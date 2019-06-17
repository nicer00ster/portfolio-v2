import { useState } from 'react';
import {
    StyledForm,
    StyledInput,
    StyledFormHeading,
} from './form.styles';
import Button from '../button';
import Sparkles from '../sparkles';

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
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (e, data) => {
        e.preventDefault();
        e.persist();
        setLoading(true);
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            res.status === 200 ? setLoading(false) : console.log(res)
        }).catch(err => {
            console.log(err);
        });
        resetName();
        resetEmail();
        resetMessage();
    };

    return (
        <StyledForm fade="fade-left" duration="250" onSubmit={e => handleSubmit(e, { name, email, message })}>
            <Sparkles />
            <fieldset disabled={isLoading} aria-busy={isLoading}>
                <StyledFormHeading>Get In Touch</StyledFormHeading>
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
                <Button type="submit" text="Get In Touch" loading={isLoading} />
            </fieldset>
        </StyledForm>
    );
};

export default Form;