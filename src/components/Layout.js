import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import useStyles from '../utils/style';
import './Layout.css';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../Pages/footer/Footer';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StickyContainer, Sticky } from 'react-sticky';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

// drawer component

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Layout({ children }) {
  const classes = useStyles();
  const location = useLocation();

  const [routePath, setRoutePath] = useState(
    location.pathname === '/contact' ? true : false
  );

  // drawer section component
  const [state, setState] = React.useState(false);

  const handleSelection = (e) => {
    let { name, value, checked } = e.target;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
    >
      <Box>
        <Box>
          <i
            className="tim-icons icon-simple-remove"
            onClick={toggleDrawer(anchor, false)}
          />

          <Box
            className="navbar-side "
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left',
              textAlign: 'left',
            }}
          >
            <HashLink to={routePath ? '/home#cover' : '#cover'} smooth>
              <Button>Home</Button>
            </HashLink>
            <HashLink to={routePath ? '/home#experties' : '#experties'} smooth>
              <Button>Experties</Button>
            </HashLink>
            <HashLink
              to={routePath ? '/home#experience' : '#experience'}
              smooth
            >
              <Button>Experiencs</Button>
            </HashLink>
            <a href="#">
              <Button>Resume</Button>
            </a>
            <HashLink to={routePath ? '/home#services' : '#services'} smooth>
              <Button>More</Button>
            </HashLink>
            <Link to="/contact">
              <Button>Contact me</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box className="cat-title" onClick={toggleDrawer('left', true)}>
            <MenuIcon
              sx={{ ml: 3, display: { sm: 'none' }, mt: 2, cursor: 'pointer' }}
            />
          </Box>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            className="filter-drawer"
          >
            {list('left')}
          </Drawer>
        </Box>
        <StickyContainer>
          <Sticky topOffset={-20} bottomOffset={95}>
            {({ style, isSticky }) => {
              return (
                <div
                  style={{
                    ...style,
                    marginTop: isSticky ? 0 : 0,
                    background: isSticky ? '#fff' : 'transparent',
                    zIndex: isSticky ? 10 : 1,
                    transition: `${
                      isSticky ? 'margin-top .3s ease-in .1s' : 'unset'
                    }`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    className="navbar sticky-nav"
                    sx={{ display: { sm: 'block' } }}
                  >
                    <HashLink to={routePath ? '/home#cover' : '#cover'} smooth>
                      <Button>Home</Button>
                    </HashLink>
                    <HashLink
                      to={routePath ? '/home#experties' : '#experties'}
                      smooth
                    >
                      <Button>Experties</Button>
                    </HashLink>
                    <HashLink
                      to={routePath ? '/home#experience' : '#experience'}
                      smooth
                    >
                      <Button>Experiencs</Button>
                    </HashLink>
                    <a href="#">
                      <Button>Resume</Button>
                    </a>
                    <HashLink
                      to={routePath ? '/home#services' : '#services'}
                      smooth
                    >
                      <Button>More</Button>
                    </HashLink>
                    <Link to="/contact">
                      <Button>Contact me</Button>
                    </Link>
                  </Box>
                </div>
              );
            }}
          </Sticky>
          <Box className={classes.main}>{children}</Box>
        </StickyContainer>
        <Footer />
      </Box>
    </>
  );
}
