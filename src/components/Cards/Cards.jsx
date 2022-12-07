import Card from '../Card/Card';
import styled from "styled-components";

const StyledDiv = styled.div`
   display: flex;
   justify-content:space-evenly;
   flex-direction:row ;
   flex-wrap: wrap;
`


export function Cards(props) {
   const { characters } = props;

      return (
      <StyledDiv>
         {

   
            characters.map(({name,species,gender,image,id},index)=>
            {
               return <Card 
               key={index}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={props.onClose}
               />
            })
            
            
         }

      </StyledDiv>)
}
