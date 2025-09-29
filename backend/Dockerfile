# Use Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port and run the server
EXPOSE 5000
CMD ["node", "server.js"]
