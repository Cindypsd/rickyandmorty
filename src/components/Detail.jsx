import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './css/Detail.css'




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
      <div className='detailCard'>

      <div className='detailCharacter'>
            <h1 className='detailCharacterName'  >{character.name}</h1>
            <img className='detailImg' src={character.image} alt="" /> 
      </div>

      <div >
            <h3 className='detailCharacterInfo'>Estado: {character.status} </h3>
            
            <h3 className='detailCharacterInfo'>  Especie: {character.species}</h3>
      </div>
      </div>
          

         <Link to={`/home`} >
               <button className="btnNav">Return</button>
         </Link>
  </>

    
  )
}
