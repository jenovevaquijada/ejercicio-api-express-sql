🚗 Gestión de Flota: Conductores y Automóviles
Módulo 6 - Actividad Práctica 2
Este proyecto consiste en una API REST construida con Node.js y Express, conectada a una base de datos PostgreSQL. Incluye un frontend dinámico que consume los endpoints para visualizar y filtrar información de conductores y vehículos.

🛠️ Tecnologías Utilizadas
Backend: Node.js, Express.

Base de Datos: PostgreSQL (Relacional).

Frontend: HTML5, CSS3, JavaScript (Fetch API).

Seguridad: Dotenv para manejo de variables de entorno.

🚀 Instalación y Configuración
1. Base de Datos
Importar el archivo actividad2.sql en tu gestor de base de datos (Postgres). Este archivo creará las tablas conductores y automoviles con datos de prueba.

2. Variables de Entorno
Crear un archivo .env en la raíz del proyecto con el siguiente formato:

Fragmento de código
DB_USER=tu_usuario
DB_PASSWORD=tu_clave
DB_HOST=localhost
DB_NAME=nombre_de_tu_db
DB_PORT=5432
PORT=3000
3. Instalación de Dependencias
Ejecutar en la terminal:

Bash
npm install
4. Ejecución
Iniciar el servidor con:

Bash
node index.js
Abrir el archivo index.html en cualquier navegador para interactuar con la interfaz.

📌 Endpoints Principales
GET /conductores: Lista completa de conductores.

GET /automoviles: Lista completa de vehículos.

GET /conductoressinauto?edad=X: Conductores menores de X años sin vehículo asignado.

GET /solitos: Cruce de datos para identificar conductores sin auto y autos sin conductor.

GET /auto?patente=X: Búsqueda exacta por patente con datos del conductor.

GET /auto?iniciopatente=X: Búsqueda de vehículos cuya patente comienza con una letra específica.

👤 Autora

Este proyecto fue desarrollado por Jenoveva Quijada.
