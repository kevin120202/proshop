import express from "express"
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors';
import connectDB from "./config/db.js";
const app = express()
app.use(cors());

// Route files
import productRouter from "./routes/productRoutes.js"

// Body parser
app.use(express.json())

// Mount routers
app.use("/api/products", productRouter)

const port = process.env.PORT || 8000
connectDB()
app.listen(port, () => console.log(`Server running on port ${port}`))