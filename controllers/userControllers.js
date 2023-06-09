import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../utils/errorHandler.js"
import { User } from "../models/User.js"
import { sendToken } from "../utils/sendToken.js"


// Register User
export const register = catchAsyncError(async (req, res, next) => {

  const { name, email, password } = req.body

  if (!name || !email || !password) return next(new ErrorHandler("Please Enter all feild", 400))

  let user = await User.findOne({ email })

  if (user) return next(new ErrorHandler("User already exists", 409))

  user = await User.create({
    name,
    email,
    password
  })

  sendToken(res, user, "Registered Successfully", 201)
})


// Login User
export const login = catchAsyncError(async (req, res, next) => {

  const { email, password } = req.body

  if (!email || !password) return next(new ErrorHandler("Please Enter all feild", 400))

  //imlement find many
  const user = await User.findOne({ $and: [{ email: { $eq: email } }, { password: { $eq: password } }] })

  if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401))

  // user = await User.findOne({ password })

  // if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401))

  sendToken(res, user, `Welcome back, ${user.name}`, 200)
})


// Logout 
export const logout = catchAsyncError(async (req, res, next) => {
  res.status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "logged Out Successfully"
    })
})


// Get my Profile
export const getMyProfile = catchAsyncError(async (req, res, next) => {

  // accessing the user from cookies with the help of middleware
  const user = await User.findById(req.user._id)

  if (!user) return next(new ErrorHandler("Not Logged In", 400))

  res.status(200).json({
    success: true,
    user
  })
})


// Update my Profile
export const updateProfile = catchAsyncError(async (req, res, next) => {

  const { name, email } = req.body

  // accessing the user from cookies with the help of middleware
  const user = await User.findById(req.user._id)

  if (name) user.name = name
  if (email) user.email = email

  await user.save()

  res.status(200)
    .json({
      success: true,
      message: "Profile Updated Successfully"
    })

})


// Get all Users (for chat list)
export const getAllUsers = catchAsyncError(async (req, res, next) => {

  const users = await User.find({ _id: { $ne: req.user._id } })

  if (!users) return next(new ErrorHandler("Not Logged In", 400))

  res.status(200)
    .json({
      success: true,
      users
    })

}) 