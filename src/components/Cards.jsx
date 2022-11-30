import Card from './Card';
import styled from "styled-components";

const StyledDiv = styled.div`
   display: flex;
   justify-content:space-evenly;
   
`


export default function Cards(props) {
   const { characters } = props;

      return (
      <StyledDiv>
         {
            characters.map(({name,species,gender,image},index)=>{
               return <Card 
                  key={index}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => window.alert("Emulamos que se cierra la card")}
               />
            })
         }

      </StyledDiv>)
}
