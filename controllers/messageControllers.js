import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../utils/errorHandler.js"
import { Message } from "../models/Message.js"

// Create Message (send Message)
export const createMessage = catchAsyncError(async (req, res, next) => {
  const { message, recieverId } = req.body

  const data = await Message.create({
    message: { text: message },
    sender: req.user._id,
    reciever: recieverId
  })

  if (!data) return next(new ErrorHandler("Fail to send Message", 500))

  res.status(201).json({
    success: true,
    message: "Message send Successfully"
  })
})


// Get all Messages 
export const getAllMessages = catchAsyncError(async (req, res, next) => {

  const { recieverId } = req.body

  const messages = await Message.find({ $or: [{ sender: req.user._id, reciever: recieverId }, { sender: recieverId, reciever: req.user._id }] }).populate("sender").populate("reciever")

  // const formatedMessages = messages.map((msg) => (
  //   {
  //     fromSelf: msg.sender.toString() === from,
  //     message: msg.message.text
  //   }
  // ))

  if (!messages) return next(new ErrorHandler("Cannot get Messages", 404))

  res.status(200).json({
    success: true,
    messages
  })

})