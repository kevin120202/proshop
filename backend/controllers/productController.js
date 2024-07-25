import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/ProductModel.js"
import ErrorResponse from "../utils/errorResponse.js"

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find({})
    if (products) {
        res.status(200).json({ success: true, data: products })
    }
    res.status(404).json({ success: false, message: "Products not found" })
})

// @desc    Get a single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: product })
})