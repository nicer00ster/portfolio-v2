import { useState, useContext } from 'react';
import {
    StyledForm,
    StyledInput,
    StyledFormHeading,
} from './form.styles';
import Button from '../button';
import Sparkles from '../sparkles';
import { AppContext } from '../../provider';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    return {
        value,
        setValue,
        reset: () => {
            setValue('');
            setError(false);
        },
        setError: (err) => setError(err),
        bind: {
            value,
            onChange: e => {
                setValue(e.target.value);
            },
        },
        hasError: error,
    };
};

function Form() {
    const { value: name, bind: bindName, reset: resetName, setError: setNameError, hasError: nameError } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail, setError: setEmailError, hasError: emailError } = useInput('');
    const { value: message, bind: bindMessage, reset: resetMessage, setError: setMessageError, hasError: messageError } = useInput('');
    const [isLoading, setLoading] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formFailed, setFormFailed] = useState(false);
    const { state, setToastMessage } = useContext(AppContext);

    const handleSubmit = (e, data) => {
        e.preventDefault();
        e.persist();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        setLoading(true);

        if(!data.name) {
            setNameError(true);
        }
        if(!data.email) {
            setEmailError(true);
        }
        if(!data.message) {
            setMessageError(true);
        }

        if(!data.name || !data.email || !data.message) {
            setToastMessage('Make sure to fill out all the fields!');
            setLoading(false);
            return;
        };

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            if(res.status === 200) {
                setFormSuccess(true);
                setLoading(false);
            } else {
                setFormFailed(true);
                throw new Error('Something went wrong.');
            }
        }).catch(err => {
            throw new Error(err);
        });

        resetName();
        resetEmail();
        resetMessage();
    };

    return (
        <StyledForm fade="fade-left" duration="250" formSuccess={formSuccess} formFailed={formFailed} onSubmit={e => handleSubmit(e, { name, email, message })}>
            <Sparkles />
            <fieldset disabled={isLoading} aria-busy={isLoading}>
                <StyledFormHeading>Get In Touch</StyledFormHeading>
                <StyledInput>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        style={nameError ? { borderBottom: '1px solid tomato' } : {}}
                        {...bindName}
                    />
                    <span className="bar" />
                    <label htmlFor="name" style={nameError ? { color: 'tomato' } : {}}>
                        Name
                    </label>
                </StyledInput>
                <StyledInput>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        style={emailError ? { borderBottom: '1px solid tomato' } : {}}
                        {...bindEmail}
                    />
                    <span className="bar" />
                    <label htmlFor="email" style={emailError ? { color: 'tomato' } : {}}>
                        Email
                    </label>
                </StyledInput>
                <StyledInput>
                    <input
                        type="text"
                        name="text"
                        id="message"
                        style={messageError ? { borderBottom: '1px solid tomato' } : {}}
                        {...bindMessage}
                    />
                    <span className="bar" />
                    <label htmlFor="message" style={messageError ? { color: 'tomato' } : {}}>
                        Message
                    </label>
                </StyledInput>
                <Button type="submit" text="Get In Touch" loading={isLoading} />
            </fieldset>
        </StyledForm>
    );
};

export default Form;