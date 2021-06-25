import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import '../components/all.css';

export const BoatCleaningSection = () => {
    return (
        <div className="mb-100">
            <Container>
            <div className="section-heading text-center">
                <h2 className="section-title">The Most Advanced</h2>
                <h3 className="section-subtitle">Boat Cleaning &amp; Maintenance Products</h3>
            </div>
                <Row className="align-items-center flex-reverse">
                <Col md={12} lg={6}>
                        <p className="desc">At DITEC Marine, we’ve taken an environmentally-responsible approach to developing the best boat cleaning products-and along the way, we’re helping prove that putting the environment first doesn’t have to mean sacrificing on performance or cost-efficiency. We believe that the environment is our most precious asset, and that we all have a responsibility to protect it. That’s why we create products that are unsurpassed in quality and that meet or exceed the highest environmental regulatory requirements in the world.</p>
                    </Col>
                    <Col md={12} lg={6}>
                        <Image className="img img-mb-2" src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/section2-img1_a244c3d9-18cc-43e2-abc7-01535506d652.png?v=1623052315" alt="Boat Cleaning Products" />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
