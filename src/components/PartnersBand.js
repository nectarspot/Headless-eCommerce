import React from 'react'
import { Container, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../components/all.css';

export const PartnersBand = () => {
    return (
        <div className="environmental-section mb-100">
            <Container>
                <div className="section-heading text-center">
                    <h3 className="section-subtitle">Environmentally responsible products &amp; preservation systems unparalleled in the marine industry</h3>
                    <div className="flex">
                        <Image src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/marpol_logo.png?v=1623760656" alt="" className="img" />
                        <Image src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/eco_safe_logo.png?v=1623760702" alt="" className="img" />
                        <Image src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/reach_logo.png?v=1623760735" alt="" className="img" />
                        <Image src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/clean_logo.png?v=1623760718" alt="" className="img" />
                    </div> 
                </div>
            <Link to="/" className="read-more single-center">Learn more</Link>
            </Container>
        </div>
    )
}
