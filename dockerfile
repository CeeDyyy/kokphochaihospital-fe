# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that Next.js listens to
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Start the Next.js application
CMD ["npm", "start"]