import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import NavbarDB from './NavbarDB';
import NavbarMenu from './NavbarMenu';

const SidebarNav = styled.nav`
  width: 16vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

function Navbar() {
  return (
    <IconContext.Provider>
      <SidebarNav>
        {NavbarDB.map((item, index) => (
          <NavbarMenu item={item} key={index} />
        ))}
      </SidebarNav>
    </IconContext.Provider>
  );
}

export default Navbar;
