import styled, { keyframes } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  padding: 0;
  outline: 0;
  cursor: pointer;
  pointer-events: ${props => props.loading ? 'none' : 'all'};
  box-shadow: ${props => props.theme.effects.shadowHover};
`;

const StyledButtonLink = styled.a`
  display: block;
  padding: 12px 24px;
  border-radius: ${props => props.theme.effects.radius};
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
  top: 0;
  
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55,0,0.1,1);
    z-index: -1;
  }
  
  &:after {
    display: block;
    position: absolute;
    width: 160%;
    height: 190%;
    left: 55%;
    top: 180%;
    content: "";
    box-shadow: rgba(0,0,0,0);
    background-color: ${props => props.theme.colors.white};
    border-radius: 50%;
    transition: all 0.5s 0.1s cubic-bezier(0.55,0,0.1,1);
    transform: translateX(-50%)scaleY(1)scaleX(1.45);
    z-index: -1;
  }
  
  &.active, &:hover {
    color: ${props => props.theme.colors.white};
    z-index: 1;
    &:before {
      top: -35%;
      background-color: ${props => props.theme.colors.lightBlack};
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    
    &:after {
      top: -45%;
      background-color: ${props => props.theme.colors.lightBlack};
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
  }
  &:active {
    top: 2px;
  }
`;

export {
    StyledButton,
    StyledButtonLink,
};