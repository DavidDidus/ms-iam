# Establecer la imagen base
FROM node:18
# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación al contenedor
COPY . .

RUN npm run build

# Establecer las variables de entorno
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "run", "start:prod" ]