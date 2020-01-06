import { useState, useContext } from 'react';
import Confetti from 'react-dom-confetti';
import {
    StyledForm,
    StyledInput,
    StyledFormHeading,
    StyledCheckmark,
} from './form.styles';
import Button from '../button';
import { AppContext } from '../../provider';

const confettiConfig = {
    angle: 90,
    spread: 70,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 5000,
    stagger: 10,
    delay: 1000,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function Checkmark() {
    return (
        <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle animate">
            <path className="circle" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline className="check" points="22 4 12 14.01 9 11.01"/>
            </svg>
        </div>
    )
}

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
    const [formStatus, setFormStatus] = useState('');
    const [party, setParty] = useState(false);
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
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            if(res.status === 200) {
                setFormStatus('success');
                setToastMessage('Your message has been sent!');
                setLoading(false);
            } else {
                setFormStatus('error');
                throw new Error('Something went wrong.');
            }
        }).then(() => {
            setTimeout(() => setParty(true), 1000);
        }).then(() => {
            setTimeout(() => {
                setParty(false);
                setFormStatus('');
            }, 6500);
        }).catch(err => {
            throw new Error(err);
        });

        resetName();
        resetEmail();
        resetMessage();
    };

    return (
        <StyledForm
            formStatus={formStatus}
            onSubmit={e => handleSubmit(e, { name, email, message })}>
            {formStatus === 'success' && (
                <StyledCheckmark>
                    <Checkmark />
                    <Confetti active={party} config={confettiConfig} />
                </StyledCheckmark>)}
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
                <Button type="submit" text="Send" loading={isLoading} />
            </fieldset>
        </StyledForm>
    );
};

export default Form;
