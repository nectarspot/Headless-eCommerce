import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const CopyRights = () => {
    return (
        <div className="copy-rights">
            <Container>
            <div className="copyright-text text-center">
                <p>© 2021 - Developed by <Link to="https://nectarspot.com/" target="_blank"> NectarSpot</Link></p>
            </div>  
            </Container>
        </div>
    )
}
