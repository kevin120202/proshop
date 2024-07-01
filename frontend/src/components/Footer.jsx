import { Container, Row, Col } from "react-bootstrap"
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>VintageCulture &copy {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
