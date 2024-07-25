import { Row, Col } from "react-bootstrap"
// import products from "../products.js"
import Product from '../components/Product.jsx'
import { useGetProductsQuery } from "../slices/productsApiSlice.js"
import { useEffect } from "react";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

export default function HomeScreen() {
    const { data, isLoading, isError } = useGetProductsQuery()
    let products
    if (!isLoading && !isError) {
        products = data.data
    }

    return (
        <>
            {isLoading ? <Loader /> :
                isError ? (<Message variant="danger">Oops, there is an error</Message>) :
                    (<>
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
                    </>)
            }
        </>
    )
}
