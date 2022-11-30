import styled from "styled-components";

const StyledDiv = styled.div`
   box-shadow: 0 8px 16px 0 #17ff0f33, 0 6px 20px 0 rgba(0,0,0,0.19);
   border-radius: 1em;
   width: 230px;
   background-color: #15c6798d;
   padding:.4em; 
`

const Styledbutton = styled.button`
   background-color: #ccc908;
   width: 60px;
   border-radius:.4em;
   box-shadow: 0 3px 3px 0 #10b7323d, 0 17px 50px 0 rgba(0,0,0,0.19);
   margin-bottom:.5em;
`

const Styledimg = styled.img`
   border-radius:8em;
   width: 180px;
   box-shadow: 0 3px 3px 0 #10b7323d, 0 17px 50px 0 rgba(0,0,0,0.19);
   margin-bottom:.5em;
`

const StyledName = styled.h2`
   color: #142a05 ;
   font-family: 'Cafe Francoise';
   font-size: 1.7em;
   margin:0em;
`

const StyledInfo = styled.div`
   display:flex;
   flex-direction: row;
   justify-content:center;
   font-family:'Anonymous Pro';
   margin:auto;
   color: #145006 ;
   font-size: .7em;
`

export default function Card(props) {
   return (
      <StyledDiv>
         <Styledbutton onClick={props.onClose}>X</Styledbutton>
         <StyledName>{props.name}</StyledName>
         <StyledInfo>
            <h3>Especie: {props.species} | Género: {props.gender} </h3>
         </StyledInfo>
         <Styledimg  src={props.image} alt="" /> 
      </StyledDiv >
   );
}
