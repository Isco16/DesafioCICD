# Informe de ejecución del pipeline

## Resumen

Este informe resume los pasos realizados para configurar y ejecutar la canalización CI/CD para el proyecto Task API.

## Pasos

1.**Gestión del repositorio Git**

- Se inicializa un repositorio local usando el comando ‘git init’.

![alt text](assets\images\repo_img01.png)

- Se verifica el estado actual del repositorio git local con el comando ‘git status’.

![alt text](assets\images\repo_img02.png)

- Se modificó el archivo README.md con los integrantes del grupo y se agregaron al stash todos los archivos del proyecto no trackeados con el comando ‘git add . ‘.

![alt text](assets\images\repo_img03.png)

![alt text](assets\images\repo_img04.png)

- Se finalizó realizando exitosamente un commit con el comando y mensaje ‘git commit -m “readme.md modificado con colaboradores”’.

![alt text](assets\images\repo_img05.png)

- Se creó un nuevo repositorio vacío en GitHub.com llamado DESAFIO08 y se agregó como repositorio remoto al git local con el comando ‘git remote add origin https://github.com/byfepo/DESAFIO08.git’.

![alt text](assets\images\image.png)

- Se verifica que el repositorio está configurado exitosamente con el comando ‘git remote -v’.

![alt text](assets\images\image-1.png)

- Se realiza el primer push exitoso al repositorio remoto con el comando ‘git push -u origin master’.

![alt text](assets\images\image-2.png)

- Se verifica en GitHub.com que el proyecto ha sido subido exitosamente.

![alt text](assets\images\image-3.png)

2.**Integración con Docker**

- Se presenta un archivo Dockerfile funcional para la creación de una imagen del proyecto NodeJS brindado exponiendo el servicio en el puerto 3000.

![alt text](assets\images\image-4.png)

Se verifica que la API del proyecto responde en el puerto 3000 con las rutas /tasks y /tasks/:id

![alt text](assets\images\image-5.png)

3.**Configuración de Jenkins**

- Se crea un archivo Jenkinsfile y se configura un Pipeline que permite a Jenkins clonar el repositorio de GitHub, Buildear el proyecto y hacer el Deploy creando una imagen Docker del proyecto en NodeJS.

![alt text](assets\images\image-6.png)

![alt text](assets\images\image-7.png)

* Se anexa un pdf en el archivo zip el Console Output completo de Jenkins con la ejecución completa. 

En el equipo personal se crea un contenedor Docker llamado ‘desafio08’, en base a la imagen creada con Jenkins llamada ‘desafio08grupo02:latest’ con el comando ‘docker run -d -p 3000:3000 –name desafio08 desafio08grupo02:latest’.

![alt text](assets\images\image-8.png)

Se verifica en Docker Desktop que el contenedor ‘desafio08’ basado en la imagen ‘desafio08grupo02:latest‘ está funcionando correctamente en el equipo personal.

![alt text](assets\images\image-9.png)

- Se verifica el correcto funcionamiento de la app, probando los endpoints de la API en localhost:3000 Llamada al endpoint /tasks.

![alt text](assets\images\image-10.png)

- Llamada al endpoint /tasks/:id.

![alt text](assets\images\image-11.png)

## Problemas encontrados

- Ninguno equis de

## Resultados

- Evidencia de la ejecucion exitosas del pipeline.

![Captura pipeline](<assets/reports/Reporte pipeline.pdf>)