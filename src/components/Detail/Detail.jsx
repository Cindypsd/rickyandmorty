import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Detail.css'




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
      <div className='detailBox'>
         
         <div className='detailImgBox'>
            <h1 className='detailCharacterName'  >{character.name}</h1>
            <img className='detailImg' src={character.image} alt="" /> 
         </div>

      

      <div className='detailTxtBox'>

          
             <div>
                <h3 className='infoTitle'>Specie:</h3>
                <p className='detailTxt'>{character.species}</p>
             </div>
         

            <div>
               <h3 className='infoTitle'> Origin:</h3>
               <p className='detailTxt'>  {character.origin && character.origin.name}</p>
            </div>
         
   
            <div>
               <h3 className='infoTitle'>Location:</h3>
               <p className='detailTxt'>   {character.location && character.location.name}</p>
            </div>

            <div>
               <h3 className='infoTitle'>Episodes</h3>
               <p className='detailTxt'> {character.episode && character.episode.length} </p> 
            </div>

      </div>  
 

</div>
      
     
      <Link to={`/home`} >
               <button className="btnNav">Return</button>
      </Link>
                 
  </>

    
  )
}
