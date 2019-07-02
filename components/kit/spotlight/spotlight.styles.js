import styled, { keyframes } from 'styled-components';
import shuffle from 'lodash.shuffle';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const blink = keyframes`
  0% {
    opacity: 0;
    background-color: ${() => shuffle(['#ffeaa7', '#80dad3', '#92c5f8', '#faa1bc'])[0]};
  }
  50% {
    opacity: 1;
    background-color: ${() => shuffle(['#ffeaa7', '#80dad3', '#92c5f8', '#faa1bc'])[0]};
  }
  100% {
    opacity: 0;
    background-color:  ${() => shuffle(['#ffeaa7', '#80dad3', '#92c5f8', '#faa1bc'])[0]};
  }
`;

const StyledSpotlight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 2;
  min-width: 450px;
  min-height: 300px;
  ${props => props.theme.mediaQuery.tablet`
    margin-top: 25vh;
    min-width: 300px
    min-height: 200px;
  `};
`;

const StyledSpotlightMain = styled.a`
  position: absolute;
  border: 1px dashed ${props => props.theme.colors.lightBlack};
  box-shadow: ${props => props.theme.effects.shadow};
  border-radius: 50%;
  outline: 0;
  width: 300px;
  height: 300px;
  transition: width 0.25s ease-in, height 0.25s ease-in, box-shadow 0.25s ease-in;
  animation: ${spin} 4s infinite linear;
  ${props => props.theme.mediaQuery.phone`
    width: 250px;
    height: 250px;
  `};
  &:hover {
      width: 315px;
      height: 315px;
      box-shadow: ${props => props.theme.effects.shadowHover};
      ${props => props.theme.mediaQuery.phone`
        width: 265px;
        height: 265px;
      `};
  }
`;

const StyledSpotlightImage = styled.img`
  position: absolute;
  width: 300px;
  bottom: 20%;
  pointer-events: none;
  left: 20%;
  ${props => props.theme.mediaQuery.phone`
    width: 50%;
  `};
`;

const StyledSpotlightBubble = styled.div`
  position: absolute;
  background-color:  ${() => shuffle(['#ffeaa7', '#80dad3', '#92c5f8', '#faa1bc'])[0]};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left && props.left};
  right: ${props => props.right && props.right};
  bottom: ${props => props.bottom && props.bottom};
  top: ${props => props.top};
  border-radius: 50%;
  opacity: 0.5;
  transition: background-color 0.25s ease-in;
  animation: ${blink} ${props => props.index * 6 / 2}s infinite ease-in-out;
`;

export {
    StyledSpotlight,
    StyledSpotlightMain,
    StyledSpotlightBubble,
    StyledSpotlightImage,
}