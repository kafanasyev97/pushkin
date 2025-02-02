# # Используем официальный образ Node.js
# FROM node:19.9

# # Устанавливаем рабочую директорию
# WORKDIR /app

# # Копируем package.json и package-lock.json
# COPY package*.json ./

# # Устанавливаем зависимости
# RUN npm install

# # Копируем исходный код
# COPY . .

# # Собираем приложение
# RUN npm run build

# # Указываем порт, который будет использовать приложение
# EXPOSE 5132

# # Запускаем приложение
# CMD ["npm", "start"]

# Этап сборки
FROM node:19.9.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап запуска
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]