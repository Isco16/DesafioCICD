# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /

# Copy package.json and install dependencies
COPY . .

RUN npm install

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]