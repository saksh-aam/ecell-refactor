import React from 'react'
import './heropage.css';
import { Container } from 'reactstrap';
import Navbars from '../Navbar/Navbar';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {ImFacebook2} from 'react-icons/im';

const Heropage = () => {
  return (
      <div className="herobg">
      <Navbars />
      <div>
        <Container fluid className="mx-auto hero-container">
          <p style={{height:'20px', lineHeight:'30px'}}>Think. Innovate. Sell. Prosper.</p>
          <div className="centerele">
            <p>Entrepreneurship Cell IIIT Pune</p>
          </div>
          <div style={{margin:"10vh"}}>
            <button className='explore-btn'>EXPLORE</button>
          </div>
        </Container>
        <Container fluid style={{ left: '48px', bottom: '90px'}}>
          <div>
              <ul className="icons mb-0">
              <li><a href="https://www.linkedin.com/company/e-cell-iiit-pune"><BsLinkedin style={{fontSize:'5vh'}}/></a></li>
              <li><a href="https://instagram.com/ecell_iiitp?igshid=6ivz7097rmfr"><BsInstagram style={{fontSize:'5vh'}}/></a></li>
              <li><a href="#"><ImFacebook2 style={{fontSize:'5vh'}}/></a></li>
              <li><div className="bar mt-4"></div></li>
              <div id="vertical"><a href='#' style={{textDecoration:'none'}}>EVENTS &rarr;</a></div>
            </ul>
          </div>
        </Container>
          <marquee className="marque">
          <a href="https://www.octaflyte.com/" target="_blank" style={{ textDecoration: 'none' }}>[UPDATE]E-Cell IIIT Pune is proud to present "Octaflyte Technologies Pvt. Ltd.", a startup founded by Umang Kalra (from IIIT Pune) and his team.
          Visit https://www.octaflyte.com/ for more details</a>
          </marquee>
      </div>
    </div>
  )
}

export default Heropage