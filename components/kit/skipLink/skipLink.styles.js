import styled from "styled-components";

const StyledSkipLink = styled.a`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;

  &:focus {
    color: ${props => props.theme.colors.black};
    display: inline-block;
    height: auto;
    width: auto;
    position: static;
    margin: auto;
  }
`;

export {
    StyledSkipLink,
};