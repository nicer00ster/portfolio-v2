import styled from "styled-components";

const StyledSkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: ${props => props.theme.colors.white};
  padding: 8px;
  z-index: 100;

  &:focus {
    top: 0;
  }
`;

export {
    StyledSkipLink,
};