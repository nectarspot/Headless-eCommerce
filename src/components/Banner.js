import React from 'react'
import { Container , Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../components/all.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Banner = () => {
    return (
        <div className="mb-100">
            <Container>
                <div className="banner-section">
                    <LazyLoadImage 
                    effect="blur"
                    className="d-block w-100" 
                    src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/ditec-banner1_1920x810.png" 
                    alt="First slide" 
                    />
                    <div className="banner-caption">
                    <h1 className="banner-head">Treat Your Yatch And The Environment With The Very Best</h1>
                    <Link to="/collections/all/" className="read-more">Browse All Products</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
