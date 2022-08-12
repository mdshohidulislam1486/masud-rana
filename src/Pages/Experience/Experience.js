import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './experience.css';
import './experience.scss';

const Experience = () => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', my: 5, pt: 5 }}>
        <Typography variant="h2" className="exp-title">
          Company I have worked with
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '500px',
            textAlign: 'center',
            margin: '0 auto',
            color: 'rgba(0, 0, 0, .9)',
          }}
        >
          During my short career journey, I have worked with some reputed
          companies and helped them to bring out the best potential in the
          market
        </Typography>
      </Box>
      <Box className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">Benchmark Software</h2>
            <p className="copy">
              I have been working with Benchmark Software for more than four
              years they are an Expert in Microfinance and ERP
            </p>
            <a
              href="http://www.benchmarksoftwarebd.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">Visit Website</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Dhaka Airport</h2>
            <p className="copy">
              I had worked with Shah Jalal International Airport for around two
              years as a program officer
            </p>
            <a
              href=" https://shahjalalairport.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">Visit Website</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">Novelta Bestway Pharmaceuticals </h2>
            <p className="copy">
              At the beginning of my career, I worked with Novelta as a DBA
              assistance
            </p>
            <a
              href="https://www.facebook.com/nbplbd"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">Visit Website</button>
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Experience;
