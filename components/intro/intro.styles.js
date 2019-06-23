import styled, { keyframes, css } from 'styled-components';
import { animated } from 'react-spring';

const blink = keyframes`
  from, 25% {
    opacity: 1;
  }
  75%, to {
    opacity: .5;
  }
`;

const StyledIntro = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
`;

const StyledIntroItem = styled(animated.div)`
    position: absolute;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    will-change: transform;
    ${props => props.item === 'cover' ? `
        min-width: 60ch;
        min-height: 60ch;
        width: 35vw;
        height: 35vw;
        max-width: 100ch;
        max-height: 100ch;
    `: ''};
    ${props => props.item === 'moon' ? css`
        & svg {
            width: 35ch;
            height: 35ch;
            & path {
                transition: all 0.25s ease;
            }
            &:hover {
                .right-cheek {
                    animation: ${blink} .4s linear infinite alternate;
                    fill: #f8a5c2;
                }
                .left-cheek {
                    animation: ${blink} .4s linear infinite alternate;
                    fill: #f8a5c2;
                }
            }
        }
        bottom: 50%;
     `: ''};
    ${props => props.item === 'meteor' ? `
        & svg {
            opacity: 0.9;
            width: 25ch;
            height: 25ch;
        }
        left: 35%;
        z-index: -1;
    `: ''};
    ${props => props.item === 'asteroid' ? css`
        & svg {
            width: 25ch;
            height: 25ch;
            & path, circle {
                transition: all 0.25s ease;
            }
            &:hover {
                .fire {
                    fill: #f3a683;
                }
                .big-star {
                    fill: #f3a683;
                    animation: ${blink} .4s linear infinite alternate;
                }
                .dot {
                    fill: #f3a683;
                    animation: ${blink} .4s linear infinite alternate;
                }
                .ball {
                    fill: #ffeaa7;
                }
            }
        }
        left: 65%;
    `: ''};
`;

const StyledIntroButton = styled.a`
     @font-face {
       font-family: 'Trirong';
       font-display: auto;
       src: local('Trirong'), url('/static/fonts/Trirong.ttf') format('truetype');
      }
      font-family: 'Trirong', serif;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      top: 40%;
      color: #fefefe;
      font-size: 4rem;
      width: 100%;
      text-align: center;
      height: 200px;
      z-index: 1;
      font-weight: normal;
      transition: all 0.25s ease;
      &:hover {
        color: #535c68;
        font-size: 4.5rem;
        letter-spacing: 4px;
      }
`;

export {
    StyledIntro,
    StyledIntroItem,
    StyledIntroButton,
};