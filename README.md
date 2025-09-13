# Astro Azure App Service Template

Plantilla mínima para desplegar una app de `Astro` en **Azure App Service** como contenedor y comunicarse con APIs internas en la misma región.

Quickstart

1. Crear App Service con los datos Linux/Container y datos de donde estara la imagen del registry *algunos datos son parte de los secrets y variables de entorno del Azure App Service.
2. Rellenar variables de entorno en Azure App Service:
   - Ver `gihub.secrets.example` para GitHub Actions.
   - Ver `env.azure copy.example` para Azure App Service -> Environment variables
3. Si todo esta bien configurado haz un push de algun cambio minimo para que el `.githun\workflow\deploy.yml` workflow cree la imagen y hace push al ghcr.io.
4. Si el workflow se ejecuta exitosamente. El app Services va a descargar la imagen del ghcr.io y ejecutaria el contenedor.
5. Ya se podria acceder al app Service.

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
