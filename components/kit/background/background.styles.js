import styled from 'styled-components';

const StyledBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 600px;
    z-index: -1;
    transition: opacity 0.25s linear;
    transform: skewY(${props => props.rotate});
    border-bottom: 1px solid ${props => props.theme.colors.grey};
    opacity: ${props => props.menuOpen ? '0.4' : '1'};
    & div.grid {
        align-content: end;
        min-width: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fill, 64px);
        grid-template-columns: [viewport-start] 0px [left-gutter-start] 0px 0px 0px 0px [left-gutter-end content-start] 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw 10vw [content-end right-gutter-start] 0px 0px 0px 0px [right-gutter-end] 0px [viewport-end];
        & div.stripe {
            transition: width 0.25s linear;
            width: ${props => props.menuOpen ? '50%' : '100%'};
            &:nth-of-type(1) {
                grid-row: -2;
                grid-column: 14 / span 2;
                border: 1px solid ${props => props.theme.colors.scheme.second};
            }
            &:nth-of-type(2) {
                grid-row: -2;
                grid-column: 14 / span 2;
                background-color: ${props => props.theme.colors.scheme.first};
                transform: translate(-8px, 8px);
            }
            &:nth-of-type(3) {
                grid-row: -4;
                grid-column: 12 / span 4;
                border: 1px solid ${props => props.theme.colors.scheme.second}; 
                transform: translate(-8px, 8px);
            }
            &:nth-of-type(4) {
                grid-row: -4;
                grid-column: 12 / span 4;
                background-color: ${props => props.theme.colors.scheme.third};
            }
            &:nth-of-type(5) {
                grid-row: -2;
                grid-column: 10 / span 2;
                background-color: ${props => props.theme.colors.scheme.second};
            }
            &:nth-of-type(6) {
                grid-row: -2;
                grid-column: 6 / span 3;
                background-color: ${props => props.theme.colors.scheme.first};
            }
            &:nth-of-type(7) {
                grid-row: -3;
                grid-column: 10 / span 1;
                background-color: ${props => props.theme.colors.scheme.third};
            }
            &:nth-of-type(8) {
                grid-row: -3;
                grid-column: 6 / span 1;
                background-color: ${props => props.theme.colors.scheme.fourth};
            }
            &:nth-of-type(9) {
                grid-row: 0;
                grid-column: 6 / span 1;
                background-color:${props => props.theme.colors.scheme.third};
            }
            &:nth-of-type(10) {
                grid-row: 1;
                grid-column: 6 / span 4;
                background-color: ${props => props.theme.colors.scheme.first};
            }
            &:nth-of-type(11) {
                grid-row: 4;
                grid-column: 6 / span 2;
                background-color: ${props => props.theme.colors.scheme.second};
                transform: translate(-8px, 8px);
                z-index: -1;
            }
            &:nth-of-type(12) {
                grid-row: 4;
                grid-column: 6 / span 2;
                border: 1px solid ${props => props.theme.colors.scheme.first};
                z-index: -1;
            }
            &:nth-of-type(13) {
                grid-row: 2;
                grid-column: 13 / span 3;
                background-color: ${props => props.theme.colors.scheme.second};
            }
        }
    }
`;

export { StyledBackground };