import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import validator from "validator"

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter your Name"]
  },
  email: {
    type: String,
    require: [true, "Please enter your Email"],
    unique: true,
    validate: validator.isEmail
  },
  password: {
    type: String,
    require: true,
  }
})

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  })
}

export const User = mongoose.model("User", schema)