import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  background-color: transparent;
  top: 0;
  padding-top: 0;
  transition: all 0.25s ease-in;
  width: 100%;
  z-index: 9999;
  &.is-scrolled {
    background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.effects.shadow};
  }
  ${props => props.theme.mediaQuery.tablet`
    margin: 0;
  `};
  & .header-container {
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
  padding: 1rem;
  cursor: pointer;
  white-space: nowrap;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
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
      font-weight: bold;
      &.active {
        &:before {
          content: "";
          visibility: visible;
          transform: scaleX(.5);
          color: ${props => props.theme.colors.black};
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #1f222e;
        }
      }
    }
  }
`;

const StyledLogo = styled.a`
  cursor: pointer;
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
    height: 100%;
    background-color: ${props => props.theme.colors.white};
    z-index: 99999;
    box-shadow: ${props => props.theme.effects.shadow};
    position: fixed;
    right: 0;
    bottom: 0;
    transition: transform .25s ease-in-out;
    transform: ${props => props.menuOpen ? 'translateX(0px)' : 'translateX(1200px)'};
    &:before {
      content: "";
      background-color: ${props => props.theme.colors.scheme.first};
      position: absolute;
      height: 100%;
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% calc(25% - 16vw), 0% 25%);
    }
    
    ${props => props.theme.mediaQuery.phone`
        width: 85%;
    `}
`;

const StyledDrawerBackground = styled.div`
    position: absolute;
    min-width: 0;
    width: 100%;
    height: 75vh;
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
    StyledDrawerBackground,
    StyledDrawerList,
    StyledDrawerItem,
}
