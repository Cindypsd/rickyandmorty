import { connect } from "react-redux"
import React from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";

import './Favorites.css'




function Favorites(props) {

    
    return (
        <> 
       <div className="favoritesContainer">
       {props.myFavorites?.map( character => (

            <div className="favoriteCard" key={character.id} >
                <img src={character.image} alt="" />
                <Link style={{ textDecoration: 'none' }} to={`/detail/${character.id}`} >
                <h1 className="favName">{character.name}</h1>
                </Link>
                {/* <p>Click the name for more info</p> */}
            </div>    
       ) )}
       </div>
       </>
      
      )

 }


const mapStateToProps = (state) =>{
    return {
      myFavorites : state.myFavorites 
    }
  }
 

 export default connect(mapStateToProps,null)(Favorites);
