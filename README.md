# equipox-infraestructura1

Repositorio del equipo para la infraestrucura 1, aplicación web minima

Objetivo del sistema (aplicación web mínima que contenga las buenas práticas sugeridas)

# Tecnologías utilizadas

- **Lenguaje backend:** PHP 8.3
- **Framework backend:** Laravel 13 (laravel/framework ^13.8)
- **Gestión de dependencias (PHP):** Composer
- **ORM / Persistencia:** Eloquent (migrations, seeders, factories)
- **Autenticación:** Laravel Breeze
- **Contenedores / entorno de desarrollo:** Laravel Sail (opcional / Docker)
- **Herramientas de desarrollo y calidad:** Laravel Pint, Tinker, Pail
- **Pruebas:** PHPUnit, Mockery, Faker
- **Bundler / Dev frontend:** Vite + laravel-vite-plugin
- **Estilos:** Tailwind CSS (+ @tailwindcss/forms), PostCSS, Autoprefixer
- **JS ligero:** Alpine.js
- **Node / Paquetes frontend:** Node.js, npm (scripts: `npm run dev`, `npm run build`)
- **Utilidades de desarrollo:** `concurrently` (ejecución paralela de dev servers)


# Arquitectura general

- **Tipo de aplicación:** Monolito web basado en Laravel (modelo MVC)
- **Rutas:** Definidas en `routes/` (web.php, auth.php, console.php)
- **Controladores:** `app/Http/Controllers/` (lógica de controladores HTTP)
- **Modelos:** `app/Models/` (Eloquent models, p. ej. `User`)
- **Vistas:** `resources/views/` (Blade templates)
- **Assets frontend:** `resources/js/`, `resources/css/` — compilados con Vite y Tailwind
- **Persistencia:** Migrations en `database/migrations/`, uso de Eloquent; el proyecto incluye scripts para crear `database/database.sqlite` en desarrollo
- **Tests:** `tests/Feature/` y `tests/Unit/` (pruebas automáticas con PHPUnit)
- **Scripts y comandos:** `composer` para dependencias PHP y tareas (`artisan`), `npm`/`vite` para frontend; composer.json y package.json contienen scripts de arranque, build y test
- **Despliegue / Entorno:** Diseñado para ejecutarse como aplicación PHP tradicional (servicio web + base de datos). Opcionalmente puede ejecutarse en contenedores usando Sail/Docker para entorno reproducible.

# Ejecución en Codespaces con Sail

Pasos para ejecutar la aplicación desde un entorno Codespaces usando Laravel Sail.

Prerequisitos:
- Tener Docker disponible en el entorno Codespaces (Sail usa Docker). Si Docker no está disponible en el Codespace, usar la sección "Alternativa sin Sail" abajo.

1. Abrir un terminal en el contenedor (Workspace) y moverse a la carpeta de la aplicación:

```
cd example-app
```

2. Instalar dependencias PHP y Node (Composer + npm):

```
composer install --no-interaction --prefer-dist
if [ ! -f .env ]; then cp .env.example .env; fi

# Instalar dependencias frontend (opcional vía Sail):
# ./vendor/bin/sail npm install
```

3. Levantar los contenedores con Sail (modo detached):

```
./vendor/bin/sail up -d
```

4. Ejecutar migraciones y tareas necesarias:

```
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate --force
./vendor/bin/sail artisan db:seed --class=DatabaseSeeder || true
```

5. Compilar assets frontend (dentro de Sail):

```
./vendor/bin/sail npm run build
```

6. Acceder a la aplicación: abrir `http://localhost` o el puerto expuesto por Sail en Codespaces (revisar la salida de `sail up`).

Alternativa sin Sail (si Docker no está disponible en el Codespace):

```
cd example-app
composer install --no-interaction --prefer-dist
cp .env.example .env || true
php artisan key:generate
php artisan migrate --force
npm install
npm run dev
php -S localhost:8000 -t public
```

Notas:
- En Codespaces puede que no esté permitido correr Docker dentro del contenedor; en ese caso use la alternativa sin Sail o ejecute Sail desde una máquina con Docker.
- Los comandos que comienzan con `./vendor/bin/sail` asumen que `composer install` creó el binario de Sail en `vendor/bin/`.
- Si algún comando requiere interacción, agregue `--no-interaction` cuando sea posible para automatizar.

Recomendado para Codespaces:

- Este repositorio incluye una configuración de devcontainer en `.devcontainer/devcontainer.json` que instala PHP 8.3, Node.js, Composer y habilita acceso a Docker (montando `/var/run/docker.sock`) para poder ejecutar Laravel Sail.
- Al abrir el Codespace por primera vez, haz click en "Rebuild Container" o selecciona "Reopen in Container". El contenedor ejecutará automáticamente los comandos de `postCreateCommand` y `postStartCommand` definidos en el devcontainer para instalar dependencias y (si Docker está disponible) arrancar Sail.

Si quieres forzar la reconstrucción manualmente desde la línea de comandos dentro del Codespace:

```
# Desde la paleta de comandos de VS Code: 'Dev Containers: Rebuild Container'
```

Notas finales:

- Si el proveedor de Codespaces no permite acceso a Docker (por ejemplo en algunos entornos administrados), usa la sección "Alternativa sin Sail" descrita arriba o ejecuta Sail desde una máquina local con Docker.
- Después de reconstruir el contenedor, la aplicación debería estar accesible en los puertos expuestos (revisar `Forwarded Ports` en la UI del Codespace).



# Flujo Git utilizado.

Rama main, PR cumpluendo los convensional commit

https://www.conventionalcommits.org/en/v1.0.0


# 3. Funcionalidades Obligatorias (Reducidas)

A) CRUD de Usuarios (Principal)

Administrar usuarios del sistema.

Funciones mínimas
- Crear usuario
- Nombre
- Correo
- Contraseña
- Consultar usuarios
- Tabla/listado simple
- Editar usuario
- Nombre y correo
- Eliminar usuario
- Evidencia requerida
- Endpoints funcionando.
- Capturas.
- Pull Request aprobado.
- Commits descriptivos.


# 4. Pull Requests Obligatorios

Cada integrante debe entregar:

mínimo 2 PR (pull request) aprobados,

2 issues (tarjeta del proyecto) cerrados,

commits claros,

evidencia funcional.

#5. Release Obligatorio

Crear release/tag:

	https://github.com/ivroche/equipox-infraestructura1/releases/tag/0.0.1

Hacer la v1.0.0. cuando tengan el codebase listo.

#6. Evidencia de Trabajo Colaborativo

Mostrar:

tablero Kanban **** ,

issues,

ramas,

PR (pull request),

Revisiones (code review).

# 6 Buenas Prácticas Obligatorias
Deben explicar:
Skinny Controllers / Fat Models.

Prueba unitarias (obligada) * 


Uso de validators.

Organización del proyecto.

Convenciones de commits.

Separación frontend/backend.

# Pruebas
Mínimo requerido
pruebas manuales,
capturas,
validaciones básicas.
Pruebas unitarias *

#. Estructura Simplificada de Issue
## Descripción
Explicar funcionalidad.

## Tareas
- [ ] Backend
- [ ] Frontend
- [ ] Evidencia


## Criterios de aceptación

- Debe funcionar correctamente.

# Tecnologías Recomendadas (Para avanzar rápido)
Backend
Node.js + Express

Frontend

React o HTML simple

Base de datos
MySQL o PostgreSQL

Herramientas

GitHub Projects

Postman (probar APIs)

Docker (opcional)


