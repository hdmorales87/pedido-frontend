# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source and build app
COPY . ./
RUN npm run build -- --configuration production

# Production stage
FROM nginx:stable-alpine AS production
COPY --from=builder /app/dist/pedido-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
