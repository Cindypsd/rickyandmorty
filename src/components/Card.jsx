import { Link } from 'react-router-dom';

import './css/Card.css'



export default function Card(props) {
   return (
      <div className="divCard">
         <button className="botonDelete" id={props.id} onClick={props.onClose}>X</button>

         <Link style={{ textDecoration: 'none' }} to={`/detail/${props.id}`} >
            <h1 className="characterName">{props.name}</h1>
         </Link>
         
         <div className="characterInfo">
            <h3>Especie: {props.species} | Género: {props.gender} </h3>
         </div>
         <img className='characterImg' src={props.image} alt="" /> 
      </div >
   );
}
