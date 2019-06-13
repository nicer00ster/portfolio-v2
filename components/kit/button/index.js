import {
    StyledButton,
    StyledButtonLink,
} from './button.styles';
import Loading from '../loading';

function Button(props) {
    return (
        <StyledButton type={props.type} loading={props.loading}>
            <StyledButtonLink type={props.type}>
                {props.loading && <Loading />}
                <span>Get In Touch</span>
            </StyledButtonLink>
        </StyledButton>
    );
}

export default Button;