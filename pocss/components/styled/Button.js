import styled from "styled-components";

export const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0061d5;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #48bb78;
  &:hover {
    background-color: #38a169;
  }
`;


