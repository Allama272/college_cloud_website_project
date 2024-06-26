FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["sh", "-c", "sleep 20 && node backend/app.js"]