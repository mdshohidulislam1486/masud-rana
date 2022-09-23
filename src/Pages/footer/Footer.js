import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';
import './footer.css';
import { IconName } from 'react-icons/io5';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="main">
            <div className="col1">
              <h3 className="heading">Quick Link to Follow</h3>
              <Box sx={{ diplay: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ mg: 2, cursor: 'pointer' }}>
                  <Link to="/home">Home</Link>
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  {' '}
                  <a href=""> Experience </a>{' '}
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  {' '}
                  <a href=""> Services </a>{' '}
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  {' '}
                  <a href=""> Contact </a>{' '}
                </Typography>
                <Typography sx={{ mg: 2 }}>
                  {' '}
                  <a href=""> Resume </a>{' '}
                </Typography>
              </Box>
            </div>

            <div className="col2">
              <h3 className="heading">Language</h3>
              <div className="languages">
                <a href="#">Deutsch</a>
                <a href="#">English</a>
                <a href="#">Espaṅol</a>
                <a href="#">Français</a>
                <a href="#">Indonesian</a>
                <a href="#">Italian</a>
                <a href="#">Nederlands</a>
                <a href="#">Polnisch</a>
                <a href="#">Português</a>
                <a href="#">pyccknṅ</a>
                <a href="#">Tiéng Viêt</a>
                <a href="#">Türkçe</a>
              </div>
            </div>

            <div className="col3">
              <h3 className="heading">Get in touch</h3>
              <div className="social">
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
                <a href="masudrana@gmail.com">
                  <AttachEmailIcon />
                </a>
              </div>
            </div>
          </div>
        </Container>

        <p className="terms">
          <a href="#">Terms of purchase</a>
          <a href="#">Security and privacy</a>
          <a href="#">Newsletter</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
