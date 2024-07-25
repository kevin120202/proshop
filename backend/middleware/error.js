import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message

    // Mongoose bad ObjectId
    if (err.name == "CastError") {
        const message = "Resource not found"
        error = new ErrorResponse(message, 404)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server error"
    })
}

export default errorHandler