import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import './Services.scss';
import { SiOracle } from 'react-icons/si';

export default function Services() {
  return (
    <>
      <Box
        className="set-meeting"
        sx={{ padding: { lg: '10em 25em', sm: '5em 5em', xs: '2em 2em' } }}
      >
        <Typography className="set-meeting-title">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography className="set-meeting-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore
          iusto numquam minima amet voluptate rerum eum nisi sint qui?
        </Typography>
        <Button className="set-meeting-btn" variant="contained">
          Set up a free meeting
        </Button>
      </Box>

      <Container sx={{ my: 5, py: 5 }}>
        <Grid container spacing={3} className="service-main-grid">
          <Grid className="serv-left-grid" item xs={12} sm={6}>
            <Box className="serv-left-grid-content">
              <Typography className="left-title">
                Lets see how can I help your business
              </Typography>
              <Typography className="left-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quo eos aspernatur architecto aut omnis vel maxime in, quae,
                cupiditate dolorum at animi minus commodi atque a! Esse,
              </Typography>
              <Button className="set-meeting-btn" variant="contained">
                Contact me
              </Button>
            </Box>
          </Grid>

          <Grid container className="serv-rigth-grid" item xs={12} sm={6}>
            <Grid item xs={12} md={6}>
              <Box className="custom-card card-1">
                <IconButton className="custom-card-icon">
                  <SiOracle />
                </IconButton>
                <Typography className="card-title">
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ratione esse aperiam ipsam officiis quam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="custom-card card-2">
                <IconButton className="custom-card-icon">
                  <SiOracle />
                </IconButton>
                <Typography className="card-title">
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ratione esse aperiam ipsam officiis quam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="custom-card card-3">
                <IconButton className="custom-card-icon">
                  <SiOracle />
                </IconButton>
                <Typography className="card-title">
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ratione esse aperiam ipsam officiis quam.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
