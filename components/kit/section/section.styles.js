import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 400px;
  margin: 15vh 1rem;
  position: relative;
`;

const StyledSectionChildren = styled.div`
  display: flex;
  justify-content: ${props => (
    props.position === 'left' && 'flex-end'
  ) || (
    props.position === 'right' && 'flex-start'
  ) || (
    props.position === 'center' && 'center'  
  )};
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  ${props => props.theme.mediaQuery.tablet`
    justify-content: center;
  `};
`;

const StyledSectionBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 600px;
    z-index: -1;
    transition: opacity 0.25s linear;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
    opacity: ${props => props.menuOpen ? '0.4' : '1'};
    transform: skewY(${props => props.rotate});
    & div.grid {
        align-content: end;
        min-width: 0;
        position: relative;
        width: 100%;
        height: 600px;
        display: grid;
        opacity: 0.6;
        grid-template-rows: repeat(auto-fill, 64px);
        grid-template-columns: [viewport-start] 0px [left-gutter-start] 0px 0px 0px 0px [left-gutter-end content-start] 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw [content-end right-gutter-start] 0px 0px 0px 0px [right-gutter-end] 0px [viewport-end];
        & div.stripe {
            transition: width 0.25s linear;
            width: ${props => props.menuOpen ? '50%' : '100%'};
            &:nth-of-type(1) {
                grid-row: ${props => props.position === 'left' ? '9' : '9'};
                grid-column: ${props => props.position === 'left' ? '10 / span 6' : '6 / span 2'};
                border: 1px solid ${props => props.theme.colors.scheme.second};
            }
            &:nth-of-type(2) {
                grid-row: ${props => props.position === 'left' ? '9' : '9'};
                grid-column: ${props => props.position === 'left' ? '10 / span 6' : '6 / span 2'};
                background-color: ${props => props.theme.colors.scheme.first};
                transform: translate(-8px, 8px);
            }
            &:nth-of-type(3) {
                grid-row: ${props => props.position === 'left' ? '7' : '7'};
                grid-column: ${props => props.position === 'left' ? '11 / span 4' : '9 / span 4'};
                border: 1px solid ${props => props.theme.colors.scheme.second}; 
                transform: translate(-8px, 8px);
            }
            &:nth-of-type(4) {
                grid-row: ${props => props.position === 'left' ? '7' : '7'};
                grid-column: ${props => props.position === 'left' ? '11 / span 4' : '9 / span 4'};
                background-color: ${props => props.theme.colors.scheme.third};
            }
            &:nth-of-type(5) {
                grid-row: ${props => props.position === 'left' ? '5' : '5'};
                grid-column: ${props => props.position === 'left' ? '10 / span 2' : '6 / span 4'};
                background-color: ${props => props.theme.colors.scheme.second};
            }
            &:nth-of-type(6) {
                grid-row: ${props => props.position === 'left' ? '4' : '4'};
                grid-column: ${props => props.position === 'left' ? '13 / span 3' : '6 / span 3'};
                background-color: ${props => props.theme.colors.scheme.first};
            }
        }
    }
`;

export {
    StyledSection,
    StyledSectionChildren,
    StyledSectionBackground,
};