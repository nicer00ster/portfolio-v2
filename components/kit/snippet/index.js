import React, { useState, useEffect } from 'react';
import { useTransition } from 'react-spring';
import {
    StyledSnippet,
    StyledSnippetContent,
    StyledSnippetHeader,
    StyledSnippetButtons,
    StyledSnippetButton,
    StyledSnippetLine,
    StyledSnippetMenu,
    StyledSnippetMenuItem,
    StyledSnippetCode,
} from './snippet.styles';
import Javascript from '../../../static/icons/javascript.svg';
import CSS from '../../../static/icons/css.svg';
import Server from '../../../static/icons/server.svg';

function Snippet(props) {
    const [items, set] = useState(props.lines);

    const transitions = useTransition(items, (item, index) => index, {
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        trail: 1000,
    });

    return (
        <StyledSnippet {...props}>
            <StyledSnippetHeader>
                <StyledSnippetButtons>
                    <StyledSnippetButton color="#faa1bc" left="13px" />
                    <StyledSnippetButton color="#ffeaa7" left="33px" />
                    <StyledSnippetButton color="#80dad3" left="53px" />
                </StyledSnippetButtons>
            </StyledSnippetHeader>
            <StyledSnippetContent>
                <StyledSnippetMenu>
                    <StyledSnippetMenuItem>
                        <Javascript width={18} height={18} />
                        <span>index.js</span>
                    </StyledSnippetMenuItem>
                    <StyledSnippetMenuItem>
                        <CSS width={18} height={18} />
                        <span>styles.css</span>
                    </StyledSnippetMenuItem>
                    <StyledSnippetMenuItem>
                        <Server width={18} height={18} />
                        <span>server.js</span>
                    </StyledSnippetMenuItem>
                </StyledSnippetMenu>
                <StyledSnippetCode>
                    {transitions.map(({ item, props, key }) =>
                        <StyledSnippetLine key={key} style={props}>
                            {item}
                        </StyledSnippetLine>
                    )}
                </StyledSnippetCode>
            </StyledSnippetContent>
        </StyledSnippet>
    );
}

export default Snippet;