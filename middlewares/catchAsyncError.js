export const catchAsyncError = (passedFunction) => {
  return (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next) //Hear due to next we are passing a middleware(custom error handler) i.e on app directory 
  }
}