import React from 'react';
import { Link } from 'react-router-dom';
import TextLogo from './UI/TextLogo';


function Footer() {
  return (
    <footer className='footer'>
      <div className="wrapper">
        <div className="footer__container">
          <Link to='/' className='link_unstressed'><TextLogo /></Link>
          <p>2022 <a href="https://github.com/avpankov" className='link' target="_blank" rel="noreferrer">github</a></p>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img src="/assets/logos/rs_school_js.svg" alt="RS School course logo" height="60px" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;