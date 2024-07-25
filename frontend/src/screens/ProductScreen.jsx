import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

export default function ProductScreen() {
    const { id: productId } = useParams()

    const { data, isLoading, isError } = useGetProductDetailsQuery(productId)

    let product
    if (!isLoading && !isError) {
        product = data.data
    }

    return (
        <>
            <Link to=".." className='btn btn-light my-3'>
                Back
            </Link>
            {isLoading ? <Loader /> :
                isError ? (<Message>Oops, there is an error</Message>) : (<Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.image} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>${product.price}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>{product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            <strong>{product.countInStock > 0 ? "In stock" : "Out of stock"}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                        Add to cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>)
            }
        </>
    )
}
