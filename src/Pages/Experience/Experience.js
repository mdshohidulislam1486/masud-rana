import { Box } from '@mui/material';
import React from 'react';
import './experience.css';
import './experience.scss';

const Experience = () => {
  return (
    <Box>
      <main class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">Mountain View</h2>
            <p class="copy">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button class="btn">View Trips</button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Dhaka Airport</h2>
            <p class="copy">
              Plan your next beach trip with these fabulous destinations
            </p>
            <button class="btn">View Trips</button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Desert Destinations</h2>
            <p class="copy">It's the desert you've always dreamed of</p>
            <button class="btn">Book Now</button>
          </div>
        </div>
      </main>
    </Box>
  );
};

export default Experience;
