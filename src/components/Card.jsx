import styled from "styled-components";

const StyledDiv = styled.div`
   box-shadow: 0 8px 16px 0 #17ff0f33, 0 6px 20px 0 rgba(0,0,0,0.19);
   border-radius: 1em;
   width: 250px;
   background-color: #15c6798d;
   padding:.5em; 
`

const Styledbutton = styled.button`
   background-color: #ccc908;
   width: 60px;
   border-radius:.4em;
   box-shadow: 0 3px 3px 0 #10b7323d, 0 17px 50px 0 rgba(0,0,0,0.19);
   margin-bottom:.5em;
`

const Styledimg = styled.img`
   border-radius:.5em;
   width: 200px;
   box-shadow: 0 3px 3px 0 #10b7323d, 0 17px 50px 0 rgba(0,0,0,0.19);
   margin-bottom:.5em;
`

const StyledName = styled.h2`
   color: #142a05 ;
   font-family: 'Cafe Francoise';
   font-size: 2em;
   margin:0em;
`

const StyledInfo = styled.div`
   display:flex;
   flex-direction: row;
   font-family:'Anonymous Pro';
   margin:0em;
   color: #145006 ;
`

export default function Card(props) {
   return (
      <StyledDiv>
         <Styledbutton onClick={props.onClose}>X</Styledbutton>
         <StyledName>{props.name}</StyledName>
         <StyledInfo>
            <h3>Especie: {props.species} </h3>
            <h3>Genero: {props.gender} </h3>
         </StyledInfo>
         <Styledimg  src={props.image} alt="" /> 
      </StyledDiv >
   );
}
