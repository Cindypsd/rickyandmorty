
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';


export default function SearchBar(props) {

   const [character, setCharacter] = useState('')
      
   const handleInputChange = (event)=>{
      setCharacter(
         event.target.value
      );
   }

   const randomId = Math.floor(Math.random() * 826);

   return (
      <div>
         <input onChange={handleInputChange}  type='search' />
         <button className='btnAgregar' onClick={()=>props.onSearch(character)}>Search</button>
         <button className="btnRandom" onClick={()=>props.onSearch(randomId)} >Random Character</button>
         <Link to={`/favorites`} >
           <button className="btnFavorites">My Favorites</button>
      </Link>

        
         
      </div>
   );
}

