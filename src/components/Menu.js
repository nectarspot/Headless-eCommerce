import React,{useEffect} from 'react'
import { Container , Row , Col , Image ,Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import Cart from "./Cart";
import '../components/all.css';



export const Menu = () => {
   return (
        <div className="header mb-4">
          <div className="desktop-nav">
            <Container>
            
            <Row className="align-items-center desc-block">
            <Col>
            <Link to="/"><Image className="img" width="240" height="104"
            src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/logo-black_medium.png?v=1621852363" /></Link>
            </Col>
            <Col xs={6}>
            <Form>
                <Form.Group as={Row} className="mb-0">
                <Col>
                <Form.Control type="text" />
                </Col>
                </Form.Group>
            </Form>
            
            </Col>
            <Col>
                <ul className="login-icons float-right">
                    <li>
                    <Link to=""><i className="svg-scale"><AiOutlineUserAdd /></i></Link>
                    </li>
                    <li>
                    <Cart />
                    </li>                    
                </ul>
            </Col>
            </Row>
          </Container>
          </div>
          <div className="mobile-nav">
            <Container>
            <Row className="align-items-center">
            <Col className="hamburger-menu">
              <div className="nav-desktop">
              <Navbar collapseOnSelect  expand="lg" >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-center tab-ham" id="responsive-navbar-nav">
                <Nav className=" nav-link-menu desc-block">
                  <div className="mega-menu">
                  <NavDropdown title="Marine Products" id="collasible-nav-dropdown">
                    <Row>
                      <Col md={12} lg={3} className="grand-child">
                      <h6 className="grand-list"><Link to="/">Complete Teak Care</Link></h6>
                      <ul className="grand-children">
                        <li><Link to="/product/bioclear">BioClear</Link></li>
                        <li><Link to="/product/teak-clean">Teak Clean</Link></li>
                        <li><Link to="/product/triton">Triton</Link></li>
                      </ul>
                      </Col>
                      <Col md={12} lg={3}>
                      <h6 className="grand-list"><Link to="/">Exterior Care</Link></h6>
                      <ul className="grand-children">
                        <li><Link to="/product/apc-all-purpose-cleaner">APC (All Purpose Cleaner)</Link></li>
                        <li><Link to="/product/black-streak-non-skid">Black Streak/Non-Skid</Link></li>
                        <li><Link to="/product/boat-soap">Boat Soap</Link></li>
                        <li><Link to="/product/degreaser">Degreaser</Link></li>
                        <li><Link to="/product/hull-and-bottom-cleaner">Hull and Bottom Cleaner</Link></li>
                      </ul>
                      </Col>
                      <Col md={12} lg={3}>
                      <h6 className="grand-list"><Link to="/">Metal Protection</Link></h6>
                      <ul className="grand-children">
                        <li><Link to="/product/metalon-px">Metalon PX</Link></li>
                      </ul>
                      </Col>
                      <Col md={12} lg={3}>
                      <h6 className="grand-list"><Link to="/">Glass Preservation</Link></h6>
                      <ul className="grand-children">
                        <li><Link to="/product/crystal-clear">Crystal Clear</Link></li>
                        <li><Link to="/product/g200">G200</Link></li>
                        <li><Link to="/product/glasstec">Glasstec</Link></li>
                      </ul>
                      </Col>
                    </Row>
                    
                    
                    
                    
                  </NavDropdown>
                  </div>
                </Nav>

                <Nav className=" nav-link-menu tab-block">
                  
                  <NavDropdown title="Marine Products" id="collasible-nav-dropdown">
                    <Row>
                      <Col md={12} lg={3} className="grand-child">
                      <NavDropdown title="Complete Teak Care" id="collasible-nav-dropdown">
                      
                        <NavDropdown.Item href="/product/bioclear">BioClear</NavDropdown.Item>
                        <NavDropdown.Item href="/product/teak-clean">Teak Clean</NavDropdown.Item>
                        <NavDropdown.Item href="/product/triton">Triton</NavDropdown.Item>
                      
                      </NavDropdown>
                      </Col>
                      <Col md={12} lg={3}>
                      <NavDropdown title="Exterior Care" id="collasible-nav-dropdown">
                      
                        <NavDropdown.Item href="/product/apc-all-purpose-cleaner">APC (All Purpose Cleaner)</NavDropdown.Item>
                        <NavDropdown.Item href="/product/black-streak-non-skid">Black Streak/Non-Skid</NavDropdown.Item>
                        <NavDropdown.Item href="/product/boat-soap">Boat Soap</NavDropdown.Item>
                        <NavDropdown.Item href="/product/degreaser">Degreaser</NavDropdown.Item>
                        <NavDropdown.Item href="/product/hull-and-bottom-cleaner">Hull and Bottom Cleaner</NavDropdown.Item>
                      
                      </NavDropdown>
                      </Col>
                      <Col md={12} lg={3}>
                      <NavDropdown title="Metal Protection" id="collasible-nav-dropdown">
                      
                        <NavDropdown.Item href="/product/metalon-px">Metalon PX</NavDropdown.Item>
                      
                      </NavDropdown>
                      </Col>
                      <Col md={12} lg={3}>
                      <NavDropdown title="Glass Preservation" id="collasible-nav-dropdown">
                      
                        <NavDropdown.Item href="/product/crystal-clear">Crystal Clear</NavDropdown.Item>
                        <NavDropdown.Item href="/product/g200">G200</NavDropdown.Item>
                        <NavDropdown.Item href="/product/glasstec">Glasstec</NavDropdown.Item>
                      
                      </NavDropdown>
                      </Col>
                    </Row>
                    
                    
                    
                    
                  </NavDropdown>
                  
                </Nav>
                
                <Nav className=" nav-link-menu ">
                  <NavDropdown title="Find a Store" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/">US Retailers</NavDropdown.Item>
                    <NavDropdown.Item href="/">European Retailers</NavDropdown.Item>
                    <NavDropdown.Item href="/">Become a Retailer</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className=" nav-link-menu ">
                  <NavDropdown title="Commercial" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/">Cruise Liness</NavDropdown.Item>
                    <NavDropdown.Item href="/">Commercial Shipping</NavDropdown.Item>
                    <NavDropdown.Item href="/">Ocean Freight</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="nav-link-menu">
                <Nav.Link href="/">Safety Data Sheets</Nav.Link>
                  <Nav.Link  href="/">
                  Environmental Responsibility
                  </Nav.Link>
                  <Nav.Link href="/">About Us</Nav.Link>
                  <Nav.Link href="/">Contact</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>


              </div>
              </Col>
              <Col className="tab-block tab-p0">
            <Link to="/"><Image className="img mx-auto" src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/logo-black_medium.png?v=1621852363" /></Link>
            </Col>
            <Col className="tab-block">
                <ul className="login-icons float-right">
                    <li>
                    <Link to=""><i className="svg-scale"><AiOutlineUserAdd /></i></Link>
                    </li>
                    <li>
                    <Cart/>
                    </li>                    
                </ul>
            </Col>
            </Row>
            </Container>
            </div>
        </div>
    )
}
