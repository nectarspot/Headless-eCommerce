import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../components/all.css';

export const Triton = () => {
    return (
        <div className="mb-100">
            <Container>
            <div className="section-heading text-center">
                <h2 className="section-title">The Ultimate Teak Protector</h2>
                <h3 className="section-subtitle">Triton</h3>
            </div>
                <Row className="align-items-center">
                
                    <Col md={12} lg={6}>
                        <Image className="img box-shadow img-mb-2" src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/triton-524x333.png?v=1623051863" alt="Teak Clean Product" />
                    </Col>
                    <Col md={12} lg={6}>
                        <p className="desc">TRITON teak sealer features a nano-technology based coating that is designed for application on teak and other wood surfaces. Triton binds to the wood fibers and creates a highly water and dirt repellent protectant on the surface. TRITON marine teak protectant does not change the appearance, color or feel of the surface being treated. With regular maintenance and cleaning, TRITON can preserve your teak or wood surface for up to 6 months.</p>
                        <Link to="/" className="read-more tab-center">Shop</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
