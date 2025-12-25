FROM node:18-alpine

# Set folder kerja di dalam container
WORKDIR /app

# Copy package.json dan install library
COPY package*.json ./
RUN npm install

# Copy seluruh kodingan
COPY . .

EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "server.js"]