import { Link } from "react-router-dom"
import styled from "styled-components"
import SearchBar from "./SearchBar"
import './css/Nav.css'


export const Nav = ({onSearch}) => {

  
  return (
    <div className="styleNav">
      <SearchBar onSearch={onSearch}/>
      <Link to={`/about`} >
           <button className="btnNav">About</button>
      </Link>
       <Link to={`/home`} >
           <button className="btnNav">Home</button>
      </Link>

      
    </div >
  )
}
