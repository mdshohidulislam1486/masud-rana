import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import Layout from '../../components/Layout';
import pageNotFound from '../../Images/notfound.jpg';
import './notfound.scss';

const NotFound = () => {
  return (
    <Layout>
      <Box className="not-found-sec">
        <img src={pageNotFound} alt="" className="not-found-img" />
      </Box>
      <Link to="/home">
        <Button className="btn-home" sx={{ cursor: 'pointer' }}>
          Go back to home
        </Button>
      </Link>
    </Layout>
  );
};

export default NotFound;
