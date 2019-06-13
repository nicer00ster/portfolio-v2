import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const StyledForm = styled.form`
  width: 50%;
  margin: 1rem;
  box-shadow: ${props => props.theme.effects.shadow};
  border-radius: ${props => props.theme.effects.radius};
  background-color: ${props => props.theme.colors.white};
  line-height: 1.5;
  
  fieldset {
    border: 0;
    padding: 1.6rem;
    &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
    &::before {
      height: 2px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${props => props.theme.colors.scheme.first} 0%,
        ${props => props.theme.colors.scheme.third} 50%,
        ${props => props.theme.colors.scheme.first} 100%
      );
    } 
  }
  ${props => props.theme.mediaQuery.tablet`
    width: 100%;
  `}
`;

const StyledInput = styled.div`
  position: relative;
  margin: 5rem 0;
  input, textarea {
    background: none;
    color: ${props => props.theme.colors.black};
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.colors.lightBlack};
    &[value]:not([value=""]) ~ label,
    &:focus ~ label {
      top: -16px;
      left: 3px;
      font-size: 1rem;
      color: ${props => props.theme.colors.black};
    }
    &:focus ~ .bar:before {
      width: 100%;
    }
  }
  label {
    color: ${props => props.theme.colors.black};
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 6px;
    transition: 300ms ease all;
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0;
      position: absolute;
      background: ${props => props.theme.colors.black};
      transition: 300ms ease all;
      left: 0;
    }
  }
`;

export {
    StyledForm,
    StyledInput,
};