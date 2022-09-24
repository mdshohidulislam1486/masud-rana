import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    navbar:{
        backgroundColor:'#000',
        '& a':{
            color:'#ffff',
            marginLeftZ:10
        },
    },
    main:{
        minHeight:"80vh"
    },
    footer:{
         textAlign:'center'
    },
    section:{
        marginTop:'3em',
        marginBottom:'3em',
    },
    addProduct:{
      
        '& > *':{
            marginBottom:'.2rem',
            borderRadius:3,

        }
    },
    chekOut:{
        backgroundColor:'transparent'
    },
  
})

export default useStyles;
