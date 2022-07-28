import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Skill.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ProgressBarProvicer from '../Component/ProgressBarProvicer';

export default function Skills() {
  return (
    <Container>
      <Box className="sliderBox">
        <Box className="slider">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80px',
                margin: '2em',
              }}
            >
              <ProgressBarProvicer score={90} />
              <Typography
                sx={{ color: 'rgba(255, 255,255,.7)', marginTop: '1.5em' }}
              >
                Oracle Database
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80px',
                margin: '2em',
              }}
            >
              <ProgressBarProvicer score={80} />
              <Typography
                sx={{ color: 'rgba(255, 255,255,.7)', marginTop: '1.5em' }}
              >
                Form Control
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80px',
                margin: '2em',
              }}
            >
              <ProgressBarProvicer score={75} />
              <Typography
                sx={{ color: 'rgba(255, 255,255,.7)', marginTop: '1.5em' }}
              >
                ERP Solution
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                width: '80px',
                margin: '2em',
              }}
            >
              <ProgressBarProvicer score={60} />
              <Typography
                sx={{ color: 'rgba(255, 255,255,.7)', marginTop: '1.5em' }}
              >
                MYSQL & SQL
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
