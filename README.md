# Blog

### pasos para ejecutar el proyecto

- clona el repositorio

  git clone https://github.com/carlosCACB333/my-blog

- instala las dependencias

  yarn install

- cambia el archivo .env.template a .env

- ejecuta la migracion

  npx prisma migrate dev --name init-post

- ejecuta el seed

  npx prisma db seed

- ejecuta el proyecto

  yarn dev
