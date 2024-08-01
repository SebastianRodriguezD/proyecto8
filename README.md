# Proyecto de Gestión de Móviles y Tiendas

Este repositorio contiene el código del backend desarrollado para el Proyecto de Gestión de Móviles y Tiendas. Este proyecto utiliza tecnologías como Node.js, Express.js, y MongoDB para implementar una API RESTful que gestiona móviles y tiendas, incluyendo funcionalidades de autenticación y gestión de imágenes con Cloudinary.

## Descripción del Proyecto

El Proyecto de Gestión de Móviles y Tiendas implementa un servidor Node.js que proporciona una API RESTful para la gestión de móviles y tiendas. Incluye endpoints para crear, actualizar y eliminar móviles y tiendas, así como para manejar la autenticación de usuarios y la gestión de imágenes.

## Estructura del Repositorio

El repositorio está estructurado de la siguiente manera:

Proyecto8/
│
├── controllers/
│ ├── movilesController.js
│ └── tiendasController.js
│
├── models/
│ ├── Movil.js
│ └── Tienda.js
│
├── routes/
│ ├── movilesRoutes.js
│ └── tiendasRoutes.js
│
├── utils/
│ └── cloudinary.js
│
├── .env
├── app.js
├── package.json
└── README.md

## Requisitos Previos

- Node.js (versión 14 o superior)
- MongoDB (versión 4 o superior)
- Cuenta de Cloudinary para la gestión de imágenes

## Instalación

1. Clonar el repositorio

   ```bash
   git clone https://github.com/tuusuario/proyecto8.git
   cd proyecto8
   ```

2. Instalar las dependencias

npm install

3. Configurar las variables de entorno

Crear un archivo .env en la raíz del proyecto con las siguientes variables:

PORT=8000
MONGO_URI=mongodb://localhost:27017/tu_basededatos
CLOUDINARY_CLOUD_NAME=tu_nombre_cloud
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

Uso
Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm start: Inicia el servidor en modo de producción.
npm run dev: Inicia el servidor en modo de desarrollo con nodemon.
Endpoints
Móviles

GET /api/moviles: Obtiene todos los móviles
POST /api/moviles: Crea un nuevo móvil
PUT /api/moviles/:id: Actualiza un móvil existente
DELETE /api/moviles/:id: Elimina un móvil
Tiendas

GET /api/tiendas: Obtiene todas las tiendas
POST /api/tiendas: Crea una nueva tienda
PUT /api/tiendas/:id: Actualiza una tienda existente
DELETE /api/tiendas/:id: Elimina una tienda
Contribución
Las contribuciones son bienvenidas. Puedes abrir issues y pull requests para discutir mejoras o corregir errores.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

By Sebastian Rodriguez
