import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logos/logo-qualiopi.webp';

const Footer = (props) => {
  const {footerClass} = props;
  return (
    <>
      <footer id="react-footer" className={footerClass ? footerClass : 'react-footer home-main'}>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 md-mb-30">
                <div className="footer-widget footer-widget-1">
                  <div className="footer-logo white">
                    <Link to="/" className="logo-text"><img src={Logo} alt="Footer Logo" width={150}/></Link>
                  </div>
                  <h5 className="footer-subtitle">Votre centre de Formation.</h5>
                  <ul className="footer-address">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           className="feather feather-phone">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href="tel:+(33)625011250"> (+33)6 25 01 12 50 </a></li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           className="feather feather-mail">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a href="mailto:gestionco2formation@outlook.com"> gestionco2formation@outlook.com </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 md-mb-30">
                <div className="footer-widget footer-widget-2">
                  <h3 className="footer-title">Liens utiles</h3>
                  <div className="footer-menu">
                    <ul>
                      <li><Link to="/">Accueil</Link></li>
                      <li><Link to="/nos-formations">Nos formations</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 md-mb-30">
                <div className="footer-widget footer-widget-3">
                  <h3 className="footer-title">Légalité</h3>
                  <div className="footer-menu">
                    <ul>
                      <li><Link to="#">Mentions Légales</Link></li>
                      <li><Link to="#">Politique de confidentialité</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="react-copy-left">© 2025 <Link to="/">CO2 FORMATION.</Link> Tous droits reservé</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;