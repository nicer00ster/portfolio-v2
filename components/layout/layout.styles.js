import styled, { createGlobalStyle, css } from 'styled-components';

const LayoutStyles = styled.main`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.breakpoints.desktop}px;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;
  transition: all 0.25s linear;
  opacity: ${props => props.menuOpen ? '0.4' : '1'};
  transform: ${props => props.menuOpen ? 'scale(0.95)' : ''};
  overflow: ${props => props.menuOpen ? 'hidden' : 'visible'};
  pointer-events: ${props => props.menuOpen ? 'none' : 'all'};
  ${props => props.theme.mediaQuery.tablet`
    padding: 0;
    max-width: ${props => props.theme.breakpoints.tablet}px;
  `}
  ${props => props.theme.mediaQuery.phone`
    max-width: ${props => props.theme.breakpoints.phone}px;
  `}
`;

const breakpoints = {
    desktop: 1080,
    tablet: 768,
    phone: 576,
};

const colors = {
    black: '#1f222e',
    lightBlack: 'rgba(31, 34, 46, 0.75)',
    grey: '#cacacc',
    white: '#fefefe',
    yellow: '#ffeaa7',
    blue: '#92c5f8',
    red: '#faa1bc',
    green: '#80dad3',
    scheme: {
        first: '#535c68',
        second: '#95afc0',
        third: '#c7ecee',
        fourth: '#dff9fb',
    },
};

const effects = {
    hover: 'rgba(31, 34, 46, 0.25)',
    shadow: '0px 5px 25px 0px rgba(46, 61, 73, 0.2)',
    shadowHover: '2px 4px 8px 0px rgba(46, 61, 73, 0.2);',
    radius: '0.275rem',
};

const mediaQuery = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }`;

    return acc;
}, {});

const GlobalStyles = createGlobalStyle`
     @font-face {
       font-family: 'Raleway';
       font-display: auto;
       src: local('Raleway'), url('/static/fonts/Raleway.ttf') format('truetype');
     }
     @font-face {
       font-family: 'Trirong';
       font-display: auto;
       src: local('Trirong'), url('/static/fonts/Trirong.ttf') format('truetype');
     }
    html {
      box-sizing: border-box;
      font-size: 12px;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      background-color: ${colors.white};
      font-family: 'Raleway', sans-serif;
      font-size: 1rem;
      padding: 0;
      margin: 0;
      overflow: ${props => props.menuOpen ? 'hidden' : 'auto'};
      overflow-x: hidden;
    }
    a {
      text-decoration: none;
      color: ${colors.black};
    }
    pre {
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
        serif;
        line-height: 17px;
        margin: 0;
        white-space: pre;
        color: ${colors.white};
    }
    .bold {
        font-weight: 600;
    }
    @keyframes showFrame {
       0% {
         height: unset;
         overflow: unset;
       }
       99% {
         height: unset;
         overflow: unset;
       }
       100% {
         height: 0;
       }
    }
    @keyframes lastFrame {
       0% {
         height: unset;
         overflow: unset;
       }
       100% {
         height: unset;
         overflow: unset;
       }
    }
    ::selection {
      color: ${colors.white};
      background: ${colors.lightBlack};
    }
`;

export {
    LayoutStyles,
    GlobalStyles,
    breakpoints,
    colors,
    effects,
    mediaQuery,
};