import { Box, Button, Container, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import proPic from '../../Images/propic.png';
import './Cover.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import AOS from 'aos';

export default function Cover() {
  AOS.init();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Box className="cover-page" id="cover">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 159,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#fff',
              },
              links: {
                color: '#fff',
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: true,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        ></Particles>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { md: 'row', xs: 'column-reverse' },
          }}
        >
          <Box sx={{ mx: 2, my: 5, zIndex: 2, color: '#ffff' }}>
            <Typography
              variant="h5"
              component="div"
              fontWeight="750"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Welcome to my Protfolio!
            </Typography>
            <Typography
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              fontWeight="750"
              variant="h4"
              component="div"
            >
              <span style={{ color: '#e94e00' }}>Hi! I'm Masud Rana</span>{' '}
              <br /> DBA Adminstrator & Consultant
            </Typography>
            <Typography
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit et voluptas quidem? Sapiente adipisci vero iure,
              ipsa facere, tempora molestias earum ad deleniti nulla cumque
              error deserunt nam. Odit dolor ipsum fuga, nobis eum quisquam
              dolorem perferendis tenetur amet reprehenderit recusandae impedit
              earum labore nesciunt non quas voluptatum perspiciatis.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                color: '#e94e00',
                my: 3,
                cursor: 'pointer',
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Typography className="connect-text">
                <a
                  href="https://www.linkedin.com/in/masud-rana-8a2174245/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Let's get Connect
                </a>{' '}
              </Typography>{' '}
              <ArrowCircleRightIcon className="lets-connect" />
            </Box>
          </Box>
          <Box
            sx={{
              mx: 2,
              minWidth: '50%',
              display: 'flex',
              justifyContent: { sm: 'right' },
            }}
          >
            <img
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src={proPic}
              alt="myPropic"
              style={{ width: '80%', height: '80%', zIndex: 2 }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
