import React from 'react';
import styled from 'styled-components';
import Icon from '../../../static/icon-transparent.svg';

const Spinner = styled.span`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    border-radius: 50%;
    border: 1px solid #ccc;
    border-top-color: #1f222e;
    animation: spinner .6s linear infinite;
  }
`;

const StyledIcon = styled.div`
    @keyframes fill {
        0% {
          fill: #1f222e;
        }
        10% {
          fill: #fefefe;
        }
        60%, 80%, 100% {
          fill: #1f222e;
        }
    }
    svg {
      width: 50px;
      height: 50px;
    }
    svg path {
      animation: fill 2.5s ease-in-out infinite;
    }
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
`;

const Loading = (props) => {
    if (props.wantsLogoLoading) {
        return (
            <StyledIcon>
                <Icon />
            </StyledIcon>
        );
    }
    return (
        <Spinner />
    );
}

export default Loading;