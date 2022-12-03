import styled from 'styled-components';

export const UserMenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const LogoutBtn = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 10px 40px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 15px;
  text-transform: uppercase;
  background: #f5b08f;
  border-width: 0;
  box-shadow: 5px 5px 0 #532831;
  outline: none;
  cursor: pointer;
  transition: 1s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 200px;
    left: -50%;
    margin-top: -100px;
    top: 50%;
    width: 200px;
    border-radius: 50%;
    opacity: 0.3;
    z-index: -1;
    transform: scale(0);
  }
  &:before {
    background: #ffeede;
    transition: 0.8s ease-out;
  }
  &:after {
    transition: 0.4s ease-in 0.3s;
  }
  &:hover {
    color: #532831;
  }
  &:hover:before,
  &:hover:after {
    opacity: 1;
    transform: scale(4);
  }
`;

export const User = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
