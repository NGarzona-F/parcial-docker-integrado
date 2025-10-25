# Parcial 2 - Implantación de Sistemas
## Docker y Docker Compose

### Datos del Estudiante
- **Nombre completo:** Nestor Alexander Flores Garzona
- **Expediente:** 25845
- **Código estudiantil:** FG22-I04-001
- **Repositorio:** https://github.com/NGarzona-F/parcial-docker-integrado

---

## Ejercicio 1 - Servicio Base con Dockerfile

### Evidencias:
- Contenedor se levanta sin errores
- Endpoint / responde datos personales
- Endpoint /health devuelve { status: 'OK' }
- Dockerfile no usa usuario root
- Imagen con tamaño razonable (<200MB)

---

## Ejercicio 2 - Persistencia con PostgreSQL

### Evidencias:
- Contenedor PostgreSQL corriendo correctamente
- Volumen db_data creado
- Datos persisten tras reinicio del contenedor
- Variables de entorno aplicadas correctamente

---

## Ejercicio 3 - Integración con Docker Compose

### Evidencias:
- docker-compose.yml funcional
- Red app_net creada automáticamente
- Servicios api y db comunican correctamente
- Healthcheck de DB marca healthy
- API devuelve conexión exitosa con DB

---

## URLs de Verificación
- API: http://localhost:3000/
- Health Check: http://localhost:3000/health
- Repositorio: https://github.com/NGarzona-F/parcial-docker-integrado
