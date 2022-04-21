import {MdRoom as RoomIcon, MdMail as MailIcon} from 'react-icons/md';
import {BsInstagram as InstagramIcon, BsLinkedin as LinkedInIcon, BsYoutube as YouTubeIcon} from 'react-icons/bs';
import logo from '../../images/cellt.png'


import "./Footer.css";
let iconStyle = {color:'fdca40',display:'inline-block',fontSize:'35px',margin:'1rem'};
const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
      <img
        src={logo}
        alt="Ecell IIITP logo"
      />
      </div>
      <NavBar className="footer-nav"/>
      
      
      <p className="footer-tm">E-Cell IIIT Pune © 2021</p>
      <div className="footer-location">
        <RoomIcon style={{ color: "fdca40",display:'inline-block', fontSize: "37px"}} />
        <p>
          <span>E-Cell IIIT Pune</span> Near Bopdev Ghat, Yewalewadi,
          Pune-411048
        </p>
      </div>
      
      <div className="footer-mail">
      <MailIcon style={{ color: "fdca40",display:'inline-block', fontSize: "35px" }} />
      <p>
        <a href="mailto:ecell@iiitp.ac.in">ecell@iiitp.ac.in</a>
      </p>
      </div>


      <div className="footer-about">
        <h3>About E-Cell</h3>
        E-Cell IIIT Pune is committed to provide assistance to the budding
        entrepreneurs to become the future leaders.
      </div>
      <div className="footer-sm-handles">
      <a href="https://www.youtube.com/channel/UCBRfXeWo-YSFt25wlZGr30w">
        <YouTubeIcon style={iconStyle}/>
      </a>
      <a
        href="https://instagram.com/ecell_iiitp"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramIcon style={iconStyle}/>
      </a>
      <a
        href="https://www.linkedin.com/company/e-cell-iiit-pune"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedInIcon style={iconStyle}/>
      </a>
      </div>
    </footer>
  );
};

function NavBar({className}) {
  return (
    <nav className={`nav-links ${className}`}>
    <ul>
        <li><a href="#home" className="link-1">HOME</a></li>
        <li><a href="#vision">ABOUT</a></li>
        <li><a href="#event">EVENT</a></li>
        <li><a href="#resources">RESOURCES</a></li>
        <li><a href="#team">TEAM</a></li>
    </ul>
    </nav>
  )
}



export default Footer;
