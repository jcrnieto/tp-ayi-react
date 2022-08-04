import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {getId,login} from '../actions/index';
import AccessDenied from './AccessDenied'


function Detail() {
 const dispatch = useDispatch();
 const character = useSelector( state => state.character)
 const login = useSelector( state => state.login)
 //console.log('esto es useselector',character)
 const {id} = useParams();

  useEffect(() => {
    dispatch(getId(id))
 }, [dispatch,id])
 
 return (
  <>
  {
    character !== undefined && login? (
    <div className='container-detail'>
    <div className='container-description' >
   
    <Card sx={{ maxWidth: 400 }}>
    <CardMedia
      component="img"
      height="400"
      image={character.image}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {character.name}
      </Typography>
      </CardContent>
    <CardActions>
      <Button size="small">Estado : {character.status}</Button>  
      <Button size="small">Especie :{character.species}</Button>
      <Link to={'/home'}>
<Button variant="contained" disableElevation>
    Volver a Página Principal
</Button>
 </Link>
 
    </CardActions>
  </Card>
  </div>

<div className='button'>
 
</div>
  </div>
    ): <AccessDenied/>

  }
  </>
  )
}

export default Detail
