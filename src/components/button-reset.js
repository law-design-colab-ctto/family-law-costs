import styled from "styled-components";

export const ButtonReset = styled.button`
  display: block;
  margin: 0;
  outline: 0;
  padding: 0;
  appearance: none;
  background: transparent;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
`;
