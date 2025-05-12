FROM mcr.microsoft.com/playwright:v1.52.0-jammy


WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install ALL dependencies (including dev for Playwright)
RUN npm ci

# Copy source code
COPY . .

# Run tests
CMD ["npx", "playwright", "test"]