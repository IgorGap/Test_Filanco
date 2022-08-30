/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 24px;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;

const NavbarLabel = styled.span`
  margin-left: 15px;
`;

const DropdownLink = styled(Link)`
  height: 50px;
  padding-left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 22px;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;

function NavbarMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavbarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <NavbarLabel>{item.title}</NavbarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </NavbarLink>
      {subnav
        && item.subNav.map((elem, index) => (
          <DropdownLink to={elem.path} key={index}>
            {elem.icon}
            <NavbarLabel>{elem.title}</NavbarLabel>
          </DropdownLink>
        ))}
    </>
  );
}

export default NavbarMenu;
