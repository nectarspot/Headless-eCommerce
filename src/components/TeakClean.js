import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../components/all.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const TeakClean = () => {
    return (
        <div className="mb-100">
            <Container>
            <div className="section-heading text-center">
                <h2 className="section-title">1-Step Teak Cleaner</h2>
                <h3 className="section-subtitle">Teak Clean</h3>
            </div>
                <Row className="align-items-center">
                    <Col md={12} lg={6}>
                        <LazyLoadImage 
                        effect="blur"
                        className="img box-shadow img-mb-2" 
                        src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/teak-clean-524x333.png?v=1623052056" 
                        alt="Teak Clean Product" />
                    </Col>
                    <Col lg={{ order: 'first' }} md={{ order: 'last' }} md={12} lg={6}>
                        <p className="desc">TEAK CLEAN is specially engineered for cleaning teak and other wood surfaces. It safely cleans and restores teak decks to their natural color and eliminates the need for 2-part cleaning.</p>
                        <ul className="icons-list desc">
                            <li>1. 3 times more effective than phosphoric acid</li>
                            <li>2. 4 to 10 times more effective than citric and glycolic acid</li>
                            <li>3. Safe for gelcoat and paint</li>
                        </ul>
                        <Link to="/product/teak-clean" className="read-more tab-center">Shop Now</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
