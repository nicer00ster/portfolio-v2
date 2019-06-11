import { useState, useEffect } from 'react';
import Glitch from './Glitch';
import {
    StyledIntro,
    StyledIntroButton,
} from './intro.styles';

function Intro(props) {
    const [isMounted, setMount] = useState(false);

    useEffect(() => {
        function handleMount(status) {
            setMount(status);
        }

        handleMount(true);
    });

    if(isMounted === false) {
        return 'Loading...';
    }

    return isMounted && (
        <StyledIntro>
            <Glitch />
            <button onClick={() => props.removeCookie()}>REMOVE COOKIE</button>
            <StyledIntroButton data-text="ALEX BUSCH" href="#">ALEX BUSCH</StyledIntroButton>
        </StyledIntro>
    );
}

export default Intro;