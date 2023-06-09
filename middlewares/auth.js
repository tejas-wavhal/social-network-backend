import jwt from "jsonwebtoken"
import { User } from "../models/User.js"
import ErrorHandler from "../utils/errorHandler.js"
import { catchAsyncError } from "./catchAsyncError.js"

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies

  if (!token) return next(new ErrorHandler("Not Logged In", 401))

  const decode = jwt.verify(token, process.env.JWT_SECRET)

  req.user = await User.findById(decode._id)

  next()
})