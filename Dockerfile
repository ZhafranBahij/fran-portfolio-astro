# ============================================================
# BUILDER STAGE (for building inside Docker)
# Used when you want to build the project inside Docker
# ============================================================
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (with or without lock file)
RUN npm install

# Copy all source files
COPY . .

# Set build environment
ENV NODE_ENV=production

# Build the project
RUN npm run build


# ============================================================
# DEVELOPMENT STAGE
# Hot-reload enabled for local development
# ============================================================
FROM node:22-alpine AS development

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (with or without lock file)
RUN npm install

# Copy all source files
COPY . .

# Set development environment
ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=4321

# Expose port
EXPOSE 4321

# Use development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
