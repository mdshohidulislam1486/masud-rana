import { Box } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout';
import Cover from '../Cover/Cover';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
       <Layout>
         <Cover></Cover>
         <Skills></Skills>
         <Experience></Experience>
         <Services></Services>
       </Layout>
    );
};

export default Home;