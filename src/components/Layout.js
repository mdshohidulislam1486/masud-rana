import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import useStyles from '../utils/style';
import './Layout.css';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../Pages/footer/Footer';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Box>
        <MenuIcon
          sx={{ ml: 3, display: { sm: 'none' }, mt: 2, cursor: 'pointer' }}
        />
        <Box
          className="navbar"
          sx={{ display: { sm: 'flex', justifyContent: 'center' } }}
        >
          <Link to="/home">
            <Button>Home</Button>
          </Link>
          <Button>Experties</Button>
          <Button>Resume</Button>
          <Button>About</Button>
          <Button>Contact Me</Button>
        </Box>

        <Box className={classes.main}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
}
