import styled from "styled-components"
import SearchBar from "./SearchBar"

const StyledDiv = styled.div`
   display: flex;
   flex-direction:row;
   justify-content:flex-end;
   margin-right:15%;   
`

export const Nav = ({onSearch}) => {

  
  return (
    <StyledDiv>
      <SearchBar onSearch={onSearch}/>
    </StyledDiv>
  )
}
