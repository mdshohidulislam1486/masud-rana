import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import useStyles from '../utils/style'
import './Layout.css'
import MenuIcon from '@mui/icons-material/Menu';



export default function Layout({children}) {

const classes = useStyles()
 
  return (
    <>
    <Box>
    <MenuIcon sx={{ml:3, display:{sm:'none'}, mt:2, cursor:"pointer"}}/>
        <Box className='navbar' sx={{display:{sm:'flex', justifyContent:'center'}}}>
            <Button>
                Home
            </Button>
            <Button>
                Experties
            </Button>
            <Button>
               Clients
            </Button>
            <Button>
              Resume
            </Button>
            <Button>
                About
            </Button>
        </Box>
        

        <Container className={classes.main}>
            {children}
        </Container>
        <footer>
            <Typography className={classes.footer}>All rights reserved</Typography>
        </footer>
    </Box>
   
    </>
  )
}
