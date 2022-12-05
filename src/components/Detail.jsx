import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'




export const Detail = () => {

 let {detailId} = useParams()


  
  const [character, setCharacter] = useState('')

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);
  
 
  return (
  <>
      <div>
            <h1>{character.name}</h1>
            <img className='' src={character.image} alt="" /> 
            <h3>Estado: {character.status}</h3>
            <h3>Especie: {character.species}</h3>
            
           
      </div>

         <Link to={`/home`} >
               <button className="btnNav">Return</button>
         </Link>
  </>

    
  )
}
