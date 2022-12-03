import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;
export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  color: black;
  padding: 10px 40px;
  box-shadow: 5px 5px 0 #532831;
  border: 1px solid #f5b08f;

  &.active {
    font-weight: 900;
    padding: 10px 40px;
    background: #f5b08f;
  }
  &:hover {
    transform: scale(1.02);
  }
`;
