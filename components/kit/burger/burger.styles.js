import styled from 'styled-components';

const StyledBurger = styled.a`
    pointer-events: bounding-box;
    position: relative;
    display: block;
    width: 72px;
    height: 72px;
    z-index: 999999;
    transition: transform 0.5s ease-in-out 0.125s;
    & div:nth-child(1) {
      top: ${props => props.menuOpen ? '35px' : '29px'};
      width: 24px;
      transform: ${props => props.menuOpen ? 'rotate(45deg)' : ''};
    }
    & div:nth-child(2) {
      top: 35px;
      width: 24px;
      opacity: ${props => props.menuOpen ? '0' : '1'};
      transform: ${props => props.menuOpen ? 'rotate(90deg)' : ''};
    }
    & div:nth-child(3) {
      top: ${props => props.menuOpen ? '35px' : '41px'};
      transform: ${props => props.menuOpen ? 'rotate(-45deg)' : ''};
      width: ${props => props.menuOpen ? '24px' : '8px'};
    }
    & div {
      position: absolute;
      left: 24px;
      width: 8px;
      height: 2px;
      background: ${props => props.theme.colors.black};
      transition: width 0.125s ease-in-out, top 0.25s ease-in-out 0.5s, transform 0.25s ease-out 0.25s, opacity 0.125s linear 0.5s;
    }
    &:hover {
      & div:nth-child(3) {
        width: 24px;
      }
    }
`;

export { StyledBurger };