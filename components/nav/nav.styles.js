import styled, { keyframes } from 'styled-components';

const StyledHeader = styled.header`
  position: ${props => props.isMenuScrolled ? 'sticky' : 'relative'};
  background-color: ${props => props.isMenuScrolled ? props.theme.colors.white : 'transparent'};
  box-shadow: ${props => props.isMenuScrolled ? props.theme.effects.shadow : ''};
  top: 0;
  transition: all 0.25s ease-in;
  width: 100%;
  z-index: 99;
  ${props => props.theme.mediaQuery.tablet`
    margin: 0;
  `};
  & div.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${props=> props.theme.breakpoints.desktop}px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & i {
    cursor: pointer;
    padding: .4rem;
  }
`;

const StyledNavItem = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.colors.black};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1rem;
  cursor: pointer;
  white-space: nowrap;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: .1em;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.black};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.15s ease-in-out 0s;
    transition: all 0.15s ease-in-out 0s;
  }
  &:hover:before, &:focus:before {
    visibility: visible;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
  }
  &:hover, &:focus {
    color: ${props => props.theme.colors.black};
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  transition: all 0.35s ease-in-out;
  & li {
    & a {
      padding: 10px;
      text-transform: uppercase;
      font-weight: bold;
      &.active {
        &:before {
          content: "";
          visibility: visible;
          transform: scaleX(.5);
          color: ${props => props.theme.colors.black};
          position: absolute;
          width: 100%;
          height: .1em;
          bottom: 0;
          left: 0;
          background-color: #1f222e;
        }
      }
    }
  }
`;

const StyledLogo = styled.a`
  display: block;
  text-align: center;
  font-size: 72px;
  width: 72px;
  color: ${props => props.theme.colors.black};
  filter: drop-shadow(0 .5rem 0.25rem #1f222e);
  transition: ease-in-out 0.35s;
  opacity: ${props => props.menuOpen ? '0.4' : '1'};
  transform: ${props => props.menuOpen ? 'scale(0.95)': ''};
  pointer-events: ${props => props.menuOpen ? 'none' : 'all'};
  ${props => props.theme.mediaQuery.tablet`
    font-size: 54px;
  `}
`;

const StyledDrawer = styled.div`
    display: flex;
    align-items: center;
    width: 65%;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    z-index: 99999;
    box-shadow: ${props => props.theme.effects.shadow};
    position: fixed;
    right: 0;
    bottom: 0;
    transition: ease-in-out .25s;
    transform: ${props => props.menuOpen ? 'translateX(0px)' : 'translateX(1200px)'};
    ${props => props.theme.mediaQuery.phone`
        width: 85%;
    `}
`;

const StyledDrawerGrid = styled.div`
    display: grid;
    position: absolute;
    min-width: 0;
    width: 100%;
    height: 100%;
    transform: skewY(${props => props.rotate});
    grid-template-rows: repeat(auto-fill, 64px);
    grid-template-columns: [viewport-start] 0px [left-gutter-start] 0px 0px 0px 0px [left-gutter-end content-start] 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw [content-end right-gutter-start] 0px 0px 0px 0px [right-gutter-end] 0px [viewport-end];
    & div.stripe {
        transition: width 0.25s ease-in;
            &:nth-of-type(1) {
                grid-row: 1 / span 4;
                grid-column: 6 / span 1;
                border: 1px solid ${props => props.scheme.second};
                transform: translate(8px, 8px);
            }
            &:nth-of-type(2) {
                grid-row: 13 / span 1;
                grid-column: 14 / span 1;
                background-color: ${props => props.scheme.first};
                transform: translate(8px, 8px);
            }
            &:nth-of-type(3) {
                grid-row: -2 / span 2;
                grid-column: 11 / span 1;
                border: 1px solid ${props => props.scheme.second}; 
                transform: translate(-8px, -8px);
            }
            &:nth-of-type(4) {
                grid-row: -1 / span 1;
                grid-column: 12 / span 1;
                background-color: ${props => props.scheme.third};
            }
            &:nth-of-type(5) {
                grid-row: -3 / span 3;
                grid-column: 8 / span 1;
                background-color: ${props => props.scheme.second};
            }
            &:nth-of-type(6) {
                grid-row: -2 / span 2;
                grid-column: 11 / span 1;
                background-color: ${props => props.scheme.first};
            }
            &:nth-of-type(7) {
                grid-row: -5 / span 5;
                grid-column: 9 / span 1;
                background-color: ${props => props.scheme.third};
            }
            &:nth-of-type(8) {
                grid-row: -4 / span 4;
                grid-column: 6 / span 1;
                background-color: ${props => props.scheme.first};
            }
            &:nth-of-type(9) {
                grid-row: 1 / span 2;
                grid-column: 7 / span 1;
                background-color:${props => props.scheme.third};
            }
            &:nth-of-type(10) {
                grid-row: 1 / span 4;
                grid-column: 6 / span 1;
                background-color: ${props => props.scheme.first};
            }
            &:nth-of-type(11) {
                grid-row: 1 / span 3;
                grid-column: 10 / span 1;
                background-color: ${props => props.scheme.second};
                z-index: -1;
            }
            &:nth-of-type(12) {
                grid-row: 1 / span 3;
                grid-column: 10 / span 1;
                border: 1px solid ${props => props.scheme.first};
                transform: translate(-8px, 8px);
                z-index: -1;
            }
            &:nth-of-type(13) {
                grid-row: 1 / span 2;
                grid-column: 15 / span 1;
                background-color: ${props => props.scheme.second};
            }
    }
`;

const StyledDrawerList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const StyledDrawerItem = styled.li`
    list-style: none;
    font-size: calc(2em + 4vw);
    font-family: 'Trirong', serif;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    line-height: 2em;
    & a {
      position: relative;
      color: ${props => props.theme.colors.black};
      &:after {
        content: "";
        display: block;
        background: ${props => props.theme.colors.black};
        height: 0;
        position: absolute;
        left: -8px;
        right: -12px;
        bottom: -1px;
        opacity: 0.1;
        transition: height 0.25s ease, opacity 0.25s ease;
      }
      &:hover:after {
        height: 35%;
        opacity: 0.15;
      }
      &.active {
        &:after {
          height: 50%;
          opacity: 0.15;
        }
      }
    }
`;

export {
    StyledHeader,
    StyledNav,
    StyledNavItem,
    StyledNavList,
    StyledLogo,
    StyledDrawer,
    StyledDrawerGrid,
    StyledDrawerList,
    StyledDrawerItem,
}
