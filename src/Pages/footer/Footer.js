import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import './footer.css';
import { IconName } from 'react-icons/io5';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();
  const location = useLocation();
  const [routePath, setRoutePath] = useState(
    location.pathname === '/contact' ? true : false
  );
  const mailtoHref =
    'mailto:masudrana@example.com?subject=SendMail&body=Description';

  return (
    <>
      <footer>
        <Container>
          <div className="main">
            <div className="col1">
              <h3 className="heading">Quick Link to Follow</h3>
              <Box sx={{ diplay: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ mg: 2, cursor: 'pointer' }}>
                  <HashLink to={routePath ? '/home#cover' : '#cover'} smooth>
                    Home
                  </HashLink>
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  <HashLink
                    to={routePath ? '/home#experties' : '#experties'}
                    smooth
                  >
                    Experties
                  </HashLink>
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  <HashLink
                    to={routePath ? '/home#experience' : '#experience'}
                    smooth
                  >
                    Experiencs
                  </HashLink>
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  <HashLink
                    to={routePath ? '/home#services' : '#services'}
                    smooth
                  >
                    More
                  </HashLink>
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  <a href="#"> Resume </a>{' '}
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  <Link to="/contact">Contact me</Link>
                </Typography>
              </Box>
            </div>

            <div className="col2">
              <h3 className="heading">Technology also I am familiar with</h3>
              <div className="languages">
                <a href="#">MYSQL</a>
                <a href="#">SQL</a>
                <a href="#">ERP Software</a>
                <a href="#">Oracle Form</a>
                <a href="#">PL</a>
                <a href="#">PHP</a>
                <a href="#">JavaScript</a>
                <a href="#">MS Express</a>
                <a href="#">MS Office</a>
                <a href="#">Data Base Desigining</a>
                <a href="#">MVC</a>
                <a href="#">MongoDB</a>
              </div>
            </div>

            <div className="col3">
              <h3 className="heading">Get in touch</h3>
              <div className="social">
                <a
                  href="https://web.facebook.com/profile.php?id=100076589265865"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/masud-rana-8a2174245/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <Link to="/contact">
                  <AttachEmailIcon />
                </Link>
              </div>
            </div>
          </div>
        </Container>

        <p className="terms">
          <a href="#">© All Rights reserved @Masud Rana {year}</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
