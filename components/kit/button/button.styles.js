import styled, { keyframes } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  padding: 0;
  outline: 0;
  cursor: pointer;
`;

const StyledButtonLink = styled.a`
  display: block;
  padding: 12px 24px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.effects.radius};
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  
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
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%)scaleY(1)scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: ${props => props.theme.colors.white};
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55,0,0.1,1);
    z-index: -1;
  }
  
  &:hover {
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.black};
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
`;

export {
    StyledButton,
    StyledButtonLink,
};