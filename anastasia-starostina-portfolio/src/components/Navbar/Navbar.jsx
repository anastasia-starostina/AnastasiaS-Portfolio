import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  width: 20em;

`;

const NavigationBar = () => {
  return (
    <NavbarContainer>
    <Navbar></Navbar>
    </NavbarContainer>
  )
}

export default NavigationBar;