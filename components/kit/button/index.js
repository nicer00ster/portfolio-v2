import { useState } from 'react';
import {
    StyledButton,
    StyledButtonLink,
} from './button.styles';
import Loading from '../loading';

function Button(props) {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <StyledButton onClick={() => setIsActive(!isActive)} type={props.type} loading={props.loading}>
            <StyledButtonLink type={props.type} className={isActive ? 'active' : ''}>
                {props.loading && <Loading />}
                <span>{props.text}</span>
            </StyledButtonLink>
        </StyledButton>
    );
}

export default Button;