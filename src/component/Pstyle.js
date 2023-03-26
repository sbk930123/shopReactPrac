import styled from "styled-components";

export const Pstyle = styled.button`
background-color: ${props => props.bg};
color: ${props => props.color};
border: none;
padding: 5px 10px;
border-radius: 5px;
box-shadow:5px 5px rgb(0, 0, 0, .2);

&:hover {
  background-color: ${props => props.hoverbg};
  color: ${props => props.hovercolor};
  border: ${props => props.hoverborder};
}
`