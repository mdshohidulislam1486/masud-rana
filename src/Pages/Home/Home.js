import { Box } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout';
import Cover from '../Cover/Cover';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
       <Layout>
         <Cover></Cover>
         <Skills></Skills>
       </Layout>
    );
};

export default Home;