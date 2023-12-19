Overview

The application is using a Node.js-based service, utilizing NestJS, and a MongoDB database.




Requirements

-Docker
-Docker Compose




Containerization with Docker

Building the Docker Image
The application uses a Dockerfile for containerization. 
This Dockerfile creates an image based on node:20-alpine, 
installs necessary dependencies, and sets up the application to start with the 
command npm run start.

To build the Docker image for the Node.js application, run:
docker build -t your-custom-app-name .
*In this command, your-custom-app-name is the name you assign to your Docker image. 
You can replace it with any name you prefer. For consistency in the docker-compose.yml file, 
make sure to use the same name as the image field under the node-app service.*




Running the Application with Docker Compose

*Docker Compose Configuration
The docker-compose.yaml file is configured to set up the Next.js frontend application, 
the Node.js backend application, and the MongoDB services. 
It specifies the networking, port bindings, and volume mappings required for the application.

*MongoDB Image
The MongoDB service uses an official MongoDB image (mongo:6-jammy). 
This image is pulled from the Docker Hub registry when you run the Docker Compose file.

*Environment Configuration
A .env file contains environment variables, 
such as MONGODB_URL, which is used to connect to the MongoDB instance. 
The default value is set to 127.0.0.1:27017.

*Starting the Services
To start the application along with MongoDB, run:
docker-compose up

This command will start the following services as defined in the docker-compose.yaml:
frontend-app: The Next.js application, accessible at http://localhost:3000.
node-app: The Node.js application, accessible at http://localhost:3006.
mongodb: The MongoDB database, available on port 27017.

*Stopping the Services
To stop the running services, you can use:
docker-compose down




Networks
The services are connected via a Docker network named node-network, 
ensuring they can communicate with each other.
