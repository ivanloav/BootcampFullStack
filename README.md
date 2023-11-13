# API de Gestión de Datos con Node.js y MongoDB

Este proyecto es una API simple que permite realizar operaciones CRUD sobre una colección de documentos en MongoDB. Está construida utilizando Node.js y Express y ha sido dockerizada para facilitar el despliegue y la configuración del entorno.

## Características

- Conexión a MongoDB a través de Mongoose.
- Operaciones CRUD para la gestión de documentos.
- Dockerización completa de la aplicación y la base de datos.
- Rutas definidas para las operaciones de base de datos.

## Prerrequisitos

Para ejecutar este proyecto, necesitarás tener Docker y Docker Compose instalados.

## Instalación y Ejecución

Para obtener una copia del proyecto operativa sigue estos pasos:

1. **Clonar el Repositorio:**

```bash
git clone https://github.com/ivanloav/BootcampFullStack.git
cd BootcampFullStack
```

2. **Construir y Ejecutar con Docker Compose:**

```bash
    docker-compose up --build
```

    Este comando construirá la imagen de Docker para la aplicación Node.js y también iniciará un contenedor de MongoDB. La opción `--build` es necesaria solo la primera vez que ejecutas la aplicación o cuando haces cambios en el `Dockerfile`.

## Uso de la API

La API puede ser accesible desde `http://localhost:8080/`. Las siguientes son las rutas disponibles:

- `GET /`: Devuelve una confirmación de que la API está funcionando.
- `GET /api/get/all`: Devuelve todos los documentos en la colección especificada.
- `GET /api/get/query`: Devuelve los documentos en la colección especificada según la consulta realizada.
- `PUT /api/put`: Actualiza un documento existente en la colección, en caso que no exista, añade un nuevo documento a la colección.
- `DELETE /api/delete/:id`: Elimina el documento con el ID especificado de la colección.

Puedes usar herramientas como [Postman](https://www.postman.com/) o `Thunder client` para interactuar con la API.

## Estructura del Proyecto

- `Dockerfile`: Define la imagen de Docker para la aplicación Node.js.
- `docker-compose.yml`: Orquesta el contenedor de la aplicación y el contenedor de MongoDB.
- `package.json`: Lista las dependencias y define los scripts de Node.js.
- `server.js`: El punto de entrada principal de la aplicación que configura el servidor Express y las rutas de la API.

## Contribuyendo

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, realiza tus cambios y envía un pull request.

## Autor

* **Iván López Ávila** - *Desarrollo Inicial* - [Perfil de GitHub](https://github.com/ivanloav/)
