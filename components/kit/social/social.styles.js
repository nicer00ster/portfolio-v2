import styled from 'styled-components';

const StyledSocialSharing = styled.ul`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
`;

const StyledSocialItem = styled.li`
    list-style: none;
    position: relative;
    transition: all 0.15s ease-in;
    bottom: 0;
    &:hover {
    bottom: 3px;
      & a > svg {
        & .github-bubble {
          transition: all 0.15s ease-in;
          fill: rgba(0,0,0,0);
        }
        & .github-outline {
          transition: all 0.15s ease-in;
          fill: ${props => props.theme.colors.white};
        }
        & .github-octocat {
          transition: all 0.15s ease-in;
          fill: #6B6FB1;
        }
        & .github-outline {
          transition: all 0.15s ease-in;
          fill: ${props => props.theme.colors.white};
        }
        & .facebook-bubble {
          transition: all 0.15s ease-in;
          fill: rgba(0,0,0,0);
        }
        & .facebook-outline {
          transition: all 0.15s ease-in;
          fill: #fff;
        }
        & .facebook-f {
          transition: all 0.15s ease-in;
          fill: #78A2D2;
        }
        & .gmail-bubble {
          transition: all 0.15s ease-in;
          fill: rgba(0,0,0,0);
        }
        & .gmail-outline {
          transition: all 0.15s ease-in;
          fill: #EA5167;
        }
        & .gmail-m {
          transition: all 0.15s ease-in;
          fill: #F2F0E7;
        }
        & .linkedin-bubble {
          transition: all 0.15s ease-in;
          fill: rgba(0,0,0,0);
        }
        & .linkedin-outline {
          transition: all 0.15s ease-in;
          fill: #FDFCEE;
        }
        & .linkedin-in {
          transition: all 0.15s ease-in;
          fill: #FDFCEE;
        }
        & .linkedin-back {
          transition: all 0.15s ease-in;
          fill: #127AD8;
        }
        & .discord-bubble {
          transition: all 0.15s ease-in;
          fill: rgba(0,0,0,0);
        }
        & .discord-bot {
          transition: all 0.15s ease-in;
          fill: #7289DA;
        }
        & .instagram-bubble {
          transition: all 0.15s ease-in;
          fill: rgba(0,0,0,0);
        }
        & .instagram-top-camera {
          transition: all 0.15s ease-in;
          fill: #FED5B3;
        }
        & .instagram-bottom-camera {
          transition: all 0.15s ease-in;
          fill: #D68F53;
        }
        & .instagram-top-right-camera {
          transition: all 0.15s ease-in;
          fill: #FED5B3;
        }
        & .instagram-bottom-left-camera {
          transition: all 0.15s ease-in;
          fill: #FED5B3;
        }
        & .instagram-stripe-1 {
          transition: all 0.15s ease-in;
          fill: #BD82F4;
        }
        & .instagram-stripe-2 {
          transition: all 0.15s ease-in;
          fill: #F97DCD;
        }
        & .instagram-stripe-3 {
          transition: all 0.15s ease-in;
          fill: #FC9C95;
        }
        & .instagram-stripe-4 {
          transition: all 0.15s ease-in;
          fill: #FFC49C;
        }
      }
    }
    & a > svg {
        & path, circle, rect {
          transition: all 0.15s ease-in;
        }
        transition: all 0.15s ease-in;
        width: 72px;
        height: 72px;
    }
`;

export {
    StyledSocialSharing,
    StyledSocialItem,
};