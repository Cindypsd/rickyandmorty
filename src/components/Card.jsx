import './css/Card.css'

export default function Card(props) {
   return (
      <div className="divCard">
         <button className="botonDelete" id={props.id} onClick={props.onClose}>X</button>
         <h2 className="characterName">{props.name}</h2>
         <div className="characterInfo">
            <h3>Especie: {props.species} | Género: {props.gender} </h3>
         </div>
         <img className='characterImg' src={props.image} alt="" /> 
      </div >
   );
}
