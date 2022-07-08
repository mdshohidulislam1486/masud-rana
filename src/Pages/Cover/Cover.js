
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Cover() {
  return (
    <Box>
        <Typography variant='h5' component='div' fontWeight='750'>
            Welcome to my Protfolio
        </Typography>
        <Typography fontWeight='750' variant='h4' component='div' >Hi! I'm Masud Rana <br /> DBA Adminstrator & Consultant</Typography>
        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit et voluptas quidem? Sapiente adipisci vero iure, ipsa facere, tempora molestias earum ad deleniti nulla cumque error deserunt nam. Odit dolor ipsum fuga, nobis eum quisquam dolorem perferendis tenetur amet reprehenderit recusandae impedit earum labore nesciunt non quas voluptatum perspiciatis.</Typography>

        <Box sx={{display:"flex"}}><Typography>Let's Connect </Typography> <ArrowCircleRightIcon/></Box>
    </Box>
  )
}
