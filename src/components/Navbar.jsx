import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
//import MenuIcon from '@mui/icons-material/Menu';
//import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getName} from '../actions/index';
import {useNavigate} from 'react-router-dom';
import { getCharacters} from '../actions/index'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const link={
  
}

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [name, setName] = useState("") 

  function handleName (e) {
     e.preventDefault();
     setName(e.target.value)
     //console.log(name)
  }

  function handleSubmit (e) {
    e.preventDefault();
    dispatch(getName(name))
    navigate('/filter')
    console.log('esto es dispatch',name)
  }

  function handleClick (e) {
    e.preventDefault();
    dispatch(getCharacters())
    navigate('/home')
  }
  return (
    <Grid md={12} xs={12} sm={12}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
      <div className='container-input'>
         <input
         type='text'
         placeholder="Buscar..."
         onChange={(e)=>handleName(e)}
         className='input-busqueda'
         id='search'
         />
         
     <button className="boton-busqueda" type='submit' onClick={(e)=>handleSubmit(e)}>Buscar</button>
      </div> 
         </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            PROYECTO INDIVIDUAL JUAN CRUZ NIETO
          </Typography>
          <button  onClick={(e) => handleClick(e)}>Volver a cargar Personajes</button>
         
          <Link href="http://localhost:3000/" variant="body2" sx={link}>
                  Cerrar Sesion
             </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </Grid>
  );
}

 {/* <Search onClick={(e)=>handleSubmit(e)}  >
            <SearchIconWrapper >
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e)=>handleName(e)}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}

            />  
          </Search>  */}