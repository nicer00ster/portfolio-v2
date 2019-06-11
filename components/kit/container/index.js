import { StyledContainer } from './container.styles.js';

function Container(props) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
}

export default Container;