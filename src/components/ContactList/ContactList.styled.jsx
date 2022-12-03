import styled from 'styled-components';

export const ContactsWrap = styled.div`
  width: 360px;
`;
export const ContactSection = styled.ul`
  list-style: circle;
  margin: 0;
`;

export const ContactItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
