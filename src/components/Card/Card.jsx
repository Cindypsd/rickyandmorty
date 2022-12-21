import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions';

import './Card.css'



 export function Card(props) {


   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else{
      setIsFav(true)
      const character = {id: props.id , species:props.species, name:props.name, image:props.image }
      props.addFavorite(character)
      }
   }

   return (

      <div className="divCard">
         <img className='characterImg' src={props.image} alt="" /> 

         <Link style={{ textDecoration: 'none' }} to={`/detail/${props.id}`} >
            <h1 className="characterName">{props.name}</h1>
         </Link>
         
         <div className="characterInfo">
            <h3>Especie: {props.species} | Género: {props.gender} </h3>
         </div>

         <div className='btnsCard'>

         {
            isFav ? (<button className='btnFavorite' onClick={handleFavorite}>❤️</button>) : 
            ( <button  className='btnFavorite' onClick={handleFavorite}>🤍</button>)
         }
         <button className="botonDelete" id={props.id} onClick={props.onClose}>X</button>
         </div>
         
      </div >
   
   );
}

const mapStateToProps = (state) =>{
   return {
     myFavorites : state.myFavorites 
   }
 }


export function mapDispatchToProps(dispatch) {
   return{
      addFavorite: (character) => dispatch(addFavorite(character)),
      deleteFavorite: (id)=> dispatch(deleteFavorite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);