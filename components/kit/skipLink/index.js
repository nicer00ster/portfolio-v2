import React from 'react';
import {
    StyledSkipLink,
} from './skipLink.styles';

function SkipLink() {
    return (
        <StyledSkipLink className="skip-link" href="#main">
            Skip to Content
        </StyledSkipLink>
    );
}

export default SkipLink;