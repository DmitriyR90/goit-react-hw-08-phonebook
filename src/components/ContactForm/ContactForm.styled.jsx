import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrap = styled(Form)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  width: 300px;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const FormField = styled(Field)`
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
`;

export const FormLabel = styled.label`
  display: flex;
  gap: 8px;
  font-weight: 700;
  font-size: 22px;
  flex-direction: column;
`;

export const FormButton = styled.button`
  cursor: pointer;
  width: fit-content;
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 3px;
  color: #e8eff1;
  text-shadow: -2px -1px #f17555;
  background: #1e1958;
  transition: 0.3s;
  &:hover {
    text-shadow: none;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  padding: 0.5rem 0.75rem;
  white-space: pre-line;
  border-radius: 4px;
`;
