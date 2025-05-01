FROM node:18-alpine

WORKDIR /app

# Copy the list of necessary dependencies
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 5173

# Start the application and allow for connections from any host
CMD ["yarn", "run", "dev", "--host"]
