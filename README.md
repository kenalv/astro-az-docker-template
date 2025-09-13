# Astro Azure App Service Template

Plantilla mínima para desplegar una app de `Astro` en **Azure App Service** como contenedor y comunicarse con APIs internas en la misma región.

Quickstart

1. Rellenar variables de entorno en Azure App Service:
   - `BASE_API_URL` -> URL interna de las APIs (p. ej. `https://my-backend.internal:443`)
   - `NODE_ENV=production`
2. Construir imagen Docker y push a un registry.
3. Crear App Service con imagen del registry y asignarle las variables de entorno.

Recomendaciones de red

- Si las APIs están en la misma VNet/region, use VNet Integration o ASE/ILB según necesidades.
- Asegure la comunicación con Managed Identity o certificados/Private Endpoint según el diseño.

Build local

```powershell
npm ci || npm install
npm run build
npm run preview
```

Docker build

```powershell
docker build -t astro-azure-template:latest .
docker run -p 3000:3000 -e BASE_API_URL="https://your-backend" astro-azure-template:latest
```
