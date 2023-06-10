# Social Network Application Backend

This is the backend implementation for a Social Network Application built using Node.js, Express.js, and MongoDB. The backend provides API endpoints for user signup, login, profile management, and chat functionality. It utilizes various additional packages such as cookie-parser, cors, dotenv, express, jsonwebtoken, mongoose, socket.io, and validator.



## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm


---

## Install

    $ git clone https://github.com/tejas-wavhal/social-network-backend.git social-network-backend
    $ cd social-network-backend
    $ npm install

## Environment Variables

To run this project, you will need to add the following environment variables to by creating `config.env` file in `config` folder.

 `PORT`

 `FRONTEND_URL`

 `MONGO_URI`

 `JWT_SECRET`

 -  `PORT`: This is the port number on which your server will run. You can change it to any available port number if needed.

- `FRONTEND_URL`: This should be the URL of your front-end application or website. Replace (front end URL here) with the actual URL.

- `MONGO_URI`: This is the connection string for your MongoDB database. Replace (MongoDB URI here) with the URI of your MongoDB database.

- `JWT_SECRET`: This is the secret key used for JWT (JSON Web Token) authentication. Replace (JWT secret here) with your desired secret key.


## Running the project

    $ npm start


## Usage
#### User Signup:
Send a `POST` request to `/api/register` with the following parameters in the request body:
name: User's name
email: User's email address
password: User's password
On successful signup, a JWT will be stored in cookies.

#### User Login:
Send a `POST` request to `/api/login` with the following parameters in the request body:
email: User's email address
password: User's password
On successful signup, a JWT will be stored in cookies.

#### Profile:
To get the user profile, send a `GET` request to `/api/profile`.
It will return your profile information.

#### Profile Management:
To update the user profile, send a `PUT` request to `/api/updateprofile` with the following parameters in the request body:
name: New User's name
email: New User's email

#### Get all Users (for chat):
To get all users for chat, send a `POST` request to `/api/getallusers`.

#### Send Message:
To select a chat, send a `POST` request to `/api/createmessage` with the following parameters in the request body:
message: Your Message to the User
recieverId: User Id (_id) of the user to send message.
Include the partner's user ID in the request body.
Once a chat partner is selected, you can use the /api/createmessage endpoint to send messages in real-time.
Use Socket.IO to listen for new

#### Get Messages:
to get  all the messages with a specific user `POST` request to `/api/getallmessages` with a following parameter in the request body:
recieverId: User Id (_id) of the user of which you want to view the Chats. The Chats will return based on the cookie stored information and recieverId.


#### User Logout:
Send a `POST` request to `/api/logout` to logout and clear the stored cookies.

## Additional Libraries

The following additional packages were used in the backend implementation:

- `cookie`-parser: Middleware for parsing cookies in HTTP requests.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `dotenv`: Library for loading environment variables from a .env file.
- `express`: Web application framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JSON Web Tokens (JWT).
- `mongoose`: Object Data Modeling (ODM) library for MongoDB.
- `socket`.io: Library for enabling real-time, bidirectional communication between web clients and servers.
- `validator`: Library for data validation and sanitization.




## Authors

- [@tejas-wavhal](https://github.com/tejas-wavhal)


