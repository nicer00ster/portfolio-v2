import React from 'react';
import {
    StyledSocialSharing,
    StyledSocialItem,
} from './social.styles';
import Facebook from '../../../static/icons/facebook.svg';
import Github from '../../../static/icons/github.svg';
import Instagram from '../../../static/icons/instagram.svg';
import Discord from '../../../static/icons/discord.svg';
import Gmail from '../../../static/icons/gmail.svg';
import Linkedin from '../../../static/icons/linkedin.svg';

function SocialSharing(props) {
    return (
        <StyledSocialSharing direction={props.direction} >
            <StyledSocialItem>
                <a aria-label="Github" rel="noopener" target="_blank" href="https://github.com/nicer00ster">
                    <Github/>
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a aria-label="Facebook" rel="noopener" target="_blank" href="https://www.facebook.com/alex.busch.353">
                    <Facebook />
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a aria-label="Instagram" rel="noopener" target="_blank" href="https://www.instagram.com/abuschhh/">
                    <Instagram />
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a aria-label="Email" href="mailto: abusch1013@gmail.com">
                    <Gmail />
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a aria-label="Linkedin" rel="noopener" target="_blank" href="https://www.linkedin.com/in/alex-busch-4743bb142/">
                    <Linkedin />
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a aria-label="Discord" rel="noopener" target="_blank" href="#">
                    <Discord />
                </a>
            </StyledSocialItem>
        </StyledSocialSharing>
    );
}

export default SocialSharing;