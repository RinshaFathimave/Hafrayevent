import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
const Navbar=()=>{
    return(
        <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/testimonial">Testimonial</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li style={{ textDecoration: 'none', listStyle: 'none' }}>
  <Link to="/book-now" style={{ color: '#9bb6ba',  backgroundColor:'#033f47', width:'20px', height:'50px'}}>
    Book Now
  </Link>
</li>

        </ul>
      </nav>
    )
}
export default Navbar