FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

#change 'astro' username by one custom username if you want
RUN addgroup -g 1001 -S nodejs && \
    adduser -S astro -u 1001
# Change ownership
RUN chown -R astro:nodejs /app
#change 'astro' username by one custom username if you want
USER astro 

EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
