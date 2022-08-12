import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './experience.css';
import './experience.scss';

const Experience = () => {
  return (
    <Box>
      <Box class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">Benchmark Software</h2>
            <p class="copy">
              I have been working with Benchmark Software for more than four
              years they are an Expert in Microfinance and ERP
            </p>
            <a
              href="http://www.benchmarksoftwarebd.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button class="btn">Visit Website</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Dhaka Airport</h2>
            <p class="copy">
              I had worked with Shah Jalal International Airport for around two
              years as a program officer
            </p>
            <a
              href=" https://shahjalalairport.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button class="btn">Visit Website</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Novelta Bestway Pharmaceuticals </h2>
            <p class="copy">
              At the beginning of my career, I worked with Novelta as a DBA
              assistance
            </p>
            <a
              href="https://www.facebook.com/nbplbd"
              target="_blank"
              rel="noreferrer"
            >
              <button class="btn">Visit Website</button>
            </a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Experience;
