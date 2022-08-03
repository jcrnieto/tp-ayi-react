import React from 'react';


function Character({name, image, id}) {
  return (
    
    <div>
        <p>{name}</p>
        <img src={image}/>
    </div>
    
  )
}

export default Character