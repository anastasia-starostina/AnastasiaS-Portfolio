import { Outlet, Link } from "react-router-dom";

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

const Layout = () => {
  return (
    <>
      <NavbarContainer>
        <Navbar>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Navbar>
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Layout;
