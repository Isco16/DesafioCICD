# Proyecto Task API

Este proyecto demuestra una sencilla API Node.js para la gestión de tareas, integrada con Docker para la contenerización y Jenkins para el pipeline CI/CD.

## Características

- Listar todas las tareas  
- Obtener tarea por ID

## Ejecutando localmente

1. Instalar dependencias: `npm install`  
2. Arranca el servidor: `npm start`

## Ejecutando con Docker

1. Construye la imagen: `docker build -t tarea-api .`  
2. Ejecuta el contenedor: `docker run -p 3000:3000 task-api`.

