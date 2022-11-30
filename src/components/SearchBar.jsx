import styled from "styled-components";

const StyledDiv = styled.div`
   margin-bottom:.8em;
`

const Styledbutton = styled.button`
   background-color: #ccc908;
   width: 80px;
   border-radius:.4em;
   box-shadow: 0 3px 3px 0 #10b7323d, 0 17px 50px 0 rgba(0,0,0,0.19);
   margin-bottom:.5em;
   margin-left:1em;
   font-family:'Anonymous Pro';
   padding:.5em;
`

const Styledinput = styled.input`
   width: 200px;
   height: 2em;
   border-radius:.4em;
   background-color: #efef91 ;
`

export default function SearchBar(props) {
   return (
      <StyledDiv>
         <Styledinput type='search' />
         <Styledbutton onClick={()=>props.onSearch(5)}>Agregar</Styledbutton>
      </StyledDiv>
   );
}
