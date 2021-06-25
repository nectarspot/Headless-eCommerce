import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { VscPackage } from "react-icons/vsc";
import { BiCheckShield, BiSupport } from "react-icons/bi";
import '../components/all.css';

export const ShippingArea = () => {
    return (
        <div className="mb-100">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <div className="single-service d-flex">
                            <div className="shipping-icon">
                                <i><VscPackage /></i>
                            </div>
                            <div className="shipping-content">
                                <h4 className="shipping-head">Free Delivery</h4>
                                <p className="shipping-para">For all oders over $100</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <div className="single-service d-flex">
                            <div className="shipping-icon">
                                <i><VscPackage /></i>
                            </div>
                            <div className="shipping-content">
                                <h4 className="shipping-head">Refundable</h4>
                                <p className="shipping-para">If your item have no damage we agree to refund it.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <div className="single-service d-flex">
                            <div className="shipping-icon">
                                <i><BiCheckShield /></i>
                            </div>
                            <div className="shipping-content">
                                <h4 className="shipping-head">Secure Payment</h4>
                                <p className="shipping-para">100% secure payment</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}>
                        <div className="single-service d-flex">
                            <div className="shipping-icon">
                                <i><BiSupport /></i>
                            </div>
                            <div className="shipping-content">
                                <h4 className="shipping-head">24/7 Customer Support</h4>
                                <p className="shipping-para">We have dedicated support</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    )
}
