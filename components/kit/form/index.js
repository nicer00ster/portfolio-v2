import { useState, useContext } from 'react';
import {
    StyledForm,
    StyledInput,
} from './form.styles';
import Button from '../button';
import { AppContext } from '../../provider';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: e => {
                setValue(e.target.value);
            }
        }
    };
};

function Form() {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');
    const { state, setIsLoading }  = useContext(AppContext);

    const handleSubmit = e => {
        e.preventDefault();
        resetName();
        resetEmail();
        resetMessage();
        setIsLoading(e);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <fieldset disabled={state.isLoading} aria-busy={state.isLoading}>
                <StyledInput>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...bindName}
                    />
                    <span className="bar" />
                    <label htmlFor="name">
                        Name
                    </label>
                </StyledInput>
                <StyledInput>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        {...bindEmail}
                    />
                    <span className="bar" />
                    <label htmlFor="email">
                        Email
                    </label>
                </StyledInput>
                <StyledInput>
                    <input
                        type="text"
                        name="text"
                        id="message"
                        {...bindMessage}
                    />
                    <span className="bar" />
                    <label htmlFor="message">
                        Message
                    </label>
                </StyledInput>
                <Button type="submit" text="Get In Touch" loading={state.isLoading} />
            </fieldset>
        </StyledForm>
    );
};

export default Form;