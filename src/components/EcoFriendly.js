import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import '../components/all.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const EcoFriendly = () => {
    return (
        <div className="mb-100">
            <Container>
            <div className="section-heading text-center">
                <h2 className="section-title">Eco-Friendly</h2>
                <h3 className="section-subtitle">Boat Detailing Products</h3>
            </div>
                <Row className="align-items-center flex-reverse">
                <Col md={12} lg={6}>
                        <p className="desc">What makes the perfect marine cleaner? Well for starters, it has to do the job it sets out to do. It also has to make as minimal of an impact as possible on the environment that our boats inhabit. DITEC products are free from harsh and harmful chemical ingredients such ad acid, bleach, glycol ether, alkyl phenol ethoxylates, phosphates, nitrates, kerosene, thickeners, dyes, and optical brighteners.</p>
                        <p className="desc">These components are known to be dangerous to our health and ecosystem, and they fail to deliver performance and efficiency in cleaning products. By keeping out the bad stuff, we help ensure that our products meet the highest expectations for what boat cleaning products can be – including yours.</p>
                    </Col>
                    <Col md={12} lg={6}>
                        <LazyLoadImage 
                        effect="blur"
                        className="img img-mb-2" 
                        src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/section4-img-524x333.png?v=1623052238" 
                        alt="Boat Cleaning Products" />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
