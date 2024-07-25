import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap"
// import products from "../products.js"
import Product from '../components/Product.jsx'

export default function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("/api/products")
            const data = await res.json()
            setProducts(data.data)
        }
        getProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product, i) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3} key={i}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}
