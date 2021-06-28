import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../components/all.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PartnersBand = () => {
    return (
        <div className="environmental-section mb-100">
            <Container>
                <div className="section-heading text-center">
                    <h3 className="section-subtitle">Environmentally responsible products &amp; preservation systems unparalleled in the marine industry</h3>
                    <div className="flex">
                        <LazyLoadImage 
                        effect="blur"
                        src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/marpol_logo.png?v=1623760656" 
                        alt="marpol" 
                        className="img" />
                        <LazyLoadImage
                        effect="blur" 
                        src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/eco_safe_logo.png?v=1623760702" 
                        alt="eco-safe" 
                        className="img" />
                        <LazyLoadImage 
                        effect="blur"
                        src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/reach_logo.png?v=1623760735" 
                        alt="reach-logo" 
                        className="img" />
                        <LazyLoadImage 
                        effect="blur"
                        src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/clean_logo.png?v=1623760718" 
                        alt="clean-logo" 
                        className="img" />
                    </div> 
                </div>
            <Link to="/" className="read-more single-center">Learn more</Link>
            </Container>
        </div>
    )
}
