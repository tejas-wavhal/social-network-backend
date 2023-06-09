import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/ErrorMidleware.js";
import cookieParser from "cookie-parser";
import cors from 'cors'


config({
  path: "./config/config.env"
})

const app = express()

// Using Middlewares
app.use(express.json())
app.use(cookieParser()); // To access Cookie
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}))

// Importing and using Routes
import user from "./routes/userRoutes.js"
import message from "./routes/messageRoutes.js"
app.use("/api", user)
app.use("/api", message)

app.get('/', (req, res) => {
  res.send(`<h1>server is working <a href=${process.env.FRONTEND_URL}>Click hear to visit Frontend</a></h1>`)
})

export default app;

app.use(ErrorMiddleware)
