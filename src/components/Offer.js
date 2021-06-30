import React from 'react'
import { Container } from 'react-bootstrap';
import { MdHighlightOff } from "react-icons/md";
import { Link } from "react-router-dom";
import '../components/all.css';

class Offer extends React.Component{
  constructor(){
    super();
    this.state = {
        toggle:true
    }
}
  render(){
    return (
      <div>
      {
        this.state.toggle ?
        <div className="Notification-bar">
        <Container>
        <div className="text-center">
          <p className="paragraph-font">All Featured Product 50% off <Link className="buy-now" to="/collections/all/">BUY NOW</Link></p>
          <span onClick={()=>{this.setState({toggle:!this.state.toggle})}}>
          <i className="MdHighlightOff pointer"><MdHighlightOff/></i>
          </span>
        </div>  
        </Container>
        </div>
        : null
                }
      </div>
    )
}
}

export default Offer;
