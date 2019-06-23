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
                <span>{props.text}</span>
            </StyledButtonLink>
        </StyledButton>
    );
}

export default Button;