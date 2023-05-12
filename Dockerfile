# Use an official Node.js v18 runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Node.js app is running
EXPOSE 8080

# Define the command to start your Node.js app
CMD [ "node", "app.js" ]
