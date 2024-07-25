import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config()
import products from "./data/products.js"
import connectDB from "./config/db.js";
const port = process.env.PORT || 8000

const app = express()

app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("API is running...")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

connectDB()
app.listen(port, () => console.log(`Server running on port ${port}`))