
import { useState } from 'react';
import './css/SearchBar.css';


export default function SearchBar(props) {

   const [character, setCharacter] = useState('')
      
   const handleInputChange = (event)=>{
      setCharacter(
         event.target.value
      );
   }


   return (
      <div>
         <input onChange={handleInputChange}  type='search' />
         <button className='btnAgregar' onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>
   );
}

