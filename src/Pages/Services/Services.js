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
import AOS from 'aos';
import thinkingPic from '../../Images/thinking.png';

const Services = () => {
  AOS.init();
  return (
    <>
      <Box
        className="set-meeting"
        sx={{ padding: { lg: '10em 25em', sm: '5em 5em', xs: '2em 2em' } }}
        id="services"
      >
        <Box>
          <Typography className="set-meeting-title" data-aos="fade-right">
            How can I help ?
          </Typography>
          <img
            src={thinkingPic}
            alt="think-big"
            width="100"
            style={{ marginBottom: '2em' }}
          />
        </Box>

        <Typography className="set-meeting-content" data-aos="fade-right">
          I have been working in the Microfinance Industry for years, no matter
          where you are standing now. I can give you a level up with my
          expertise to handle your DBA in more secure and Professional ways. I
          can consult your business to its ultimate goal and convert your
          complex database problem into a simpler one.
        </Typography>
        <Button
          className="set-meeting-btn"
          variant="contained"
          data-aos="fade-right"
        >
          Set up a free meeting
        </Button>
      </Box>

      <Container sx={{ my: 5, py: 5 }}>
        <Grid container spacing={3} className="service-main-grid">
          <Grid className="serv-left-grid" item xs={12} sm={6}>
            <Box className="serv-left-grid-content">
              <Typography className="left-title" data-aos="zoom-in-up">
                Why should you use Oracle database
              </Typography>
              <Typography className="left-content" data-aos="zoom-in-up">
                Oracle database services and products offer customers
                cost-optimized and high-performance versions of Oracle Database,
                the world's leading converged, multi-model database management
                system, as well as in-memory, NoSQL and MySQL databases. Oracle
                Autonomous Database, available on premises via Oracle
                Cloud@Customer or in the Oracle Cloud Infrastructure, enables
                customers to simplify relational database environments and
                reduce management workloads.
              </Typography>
              <Button className="set-meeting-btn" variant="contained">
                <a href="https://www.oracle.com/database/" target="_blank">
                  Know More
                </a>
              </Button>
            </Box>
          </Grid>

          <Grid container className="serv-rigth-grid" item xs={12} sm={6}>
            <Grid item xs={12} md={6}>
              <Box className="custom-card card-4">
                <IconButton className="custom-card-icon">
                  <SiOracle />
                </IconButton>
                <Typography className="card-title">
                  Flexible Standards
                </Typography>
                <Typography className="card-content">
                  For many years, Oracle Database has received the highest
                  ranking in the industry. In 2019, Gartner analyzed database
                  ven­dors and published a 1-to-5 ranking of critical
                  capabilities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="custom-card card-2">
                <IconButton className="custom-card-icon" data-aos="zoom-in-up">
                  <SiOracle />
                </IconButton>
                <Typography className="card-title">Scale-On-Demand</Typography>
                <Typography className="card-content">
                  With Oracle Database, your database will always be the right
                  size for your business needs due to: Single Instance Oracle
                  Database online vertical scaling (Single Instance.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="custom-card card-3" data-aos="zoom-in-up">
                <IconButton className="custom-card-icon">
                  <SiOracle />
                </IconButton>
                <Typography className="card-title">
                  Highest Availability
                </Typography>
                <Typography className="card-content">
                  These architectures protect the database and data. However,
                  they don’t ensure the continuation of a session. This
                  protection is provided by Application Continuity.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
