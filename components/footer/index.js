import { useContext } from 'react';
import SocialSharing from '../kit/social';
import { AppContext } from '../provider';
import {
    StyledFooter,
    StyledCopyright,
    StyledCiting,
} from './footer.styles';

function Footer() {
    const { state } = useContext(AppContext);

    return (
        <StyledFooter menuOpen={state.menuOpen}>
            <SocialSharing direction="row" />
            <StyledCopyright>© {new Date().getFullYear()} Alex Busch</StyledCopyright>
            <StyledCiting>Website made with React, Next.js, and Styled Components.</StyledCiting>
            <StyledCiting>Hosted on&nbsp;<a href="https://zeit.co/now" rel="noopener" target="_blank">Now</a>.</StyledCiting>
        </StyledFooter>
    );
}

export default Footer;