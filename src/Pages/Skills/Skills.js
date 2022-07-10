import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import './Skill.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Skills() {
  return (
    <Container>
       <Box className='sliderBox'>
        
       <Box className='slider'>
       
        <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
            <div className='skill-box'>
                <Typography  className='skill-per' color='#fff'>90%</Typography>
            </div>     
            <div className='skill-box'>
                <Typography  className='skill-per' color='#fff'>90%</Typography>
                
            </div>     
            <div className='skill-box'>
                <Typography  className='skill-per' color='#fff'>90%</Typography>
            </div>     
        </Box>
        </Box>
       </Box>
    </Container>
  )
}
