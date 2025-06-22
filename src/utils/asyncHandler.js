const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}





// line ko smjhnay ke liyay example
// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}


// try catch wala wrapper function 

// const asyncHandler = (fn) => async (req, res) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }