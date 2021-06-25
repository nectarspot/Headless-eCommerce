import React from 'react'
import { Container } from 'react-bootstrap';
import { MdHighlightOff } from "react-icons/md";
import { Link } from "react-router-dom";
import '../components/all.css';

export const Offer = () => {
    return (
        <div className="Notification-bar">
        <Container>
        <div className="text-center">
          <p className="paragraph-font">All Featured Product 50% off <Link className="buy-now" to="/">BUY NOW</Link></p>
          <i className="MdHighlightOff"><MdHighlightOff/></i>
        </div>  
        </Container>
        </div>
    )
}
