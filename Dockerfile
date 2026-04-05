# ============================================================
# PRODUCTION STAGE
# Builds and runs the optimized production version
# ============================================================
FROM node:22-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./

# Install dependencies (with or without lock file)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy built application (must be built locally or in CI/CD)
COPY dist/ ./dist/
COPY public/ ./public/

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# Expose port
EXPOSE 4321

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4321/ || exit 1

# Start the application
CMD ["node", "./dist/server/entry.mjs"]


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
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

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
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

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
