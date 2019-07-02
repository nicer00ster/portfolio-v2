import React, { memo, useState, useRef, useEffect } from 'react';
import { useSpring, a } from 'react-spring';
import ResizeObserver from 'resize-observer-polyfill';
import {
    StyledTree,
    StyledBranch,
    StyledBranchTitle,
    StyledBranchContent,
} from './tree.styles';
import * as Icons from './tree.icons';

const toggle = {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle'
};

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => void (ref.current = value), [value]);
    return ref.current
}

function useMeasure() {
    const ref = useRef();
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
    const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
    useEffect(() => {
        if (ref.current) ro.observe(ref.current);
        return () => ro.disconnect()
    }, []);
    return [{ ref }, bounds]
}

const Branch = memo(({ children, name, style, notCollapsable = false, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure();
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    });
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus' ) : 'Close'}SquareO`];
    return (
        <StyledBranch>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => notCollapsable ? null : setOpen(!isOpen)} />
            <StyledBranchTitle style={style}>{name}</StyledBranchTitle>
            <StyledBranchContent style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
            </StyledBranchContent>
        </StyledBranch>
    );
});

const Tree = () => {
    return (
        <StyledTree data-aos="zoom-in-up">
            <Branch name="alex busch" defaultOpen notCollapsable>
                <Branch name="hello there" />
                <Branch name="skills">
                    <Branch name="development">
                        <Branch name="javascript" style={{ color: '#F7df1c', textShadow: '1px 2px 1px #1f222e' }} />
                        <Branch name="react" style={{ color: '#05d7ff' }} />
                        <Branch name="react-native" style={{ color: '#5cd3ff' }} />
                        <Branch name="redux" style={{ color: '#9385c4' }} />
                        <Branch name="nextjs" style={{ color: '#1f222e' }} />
                        <Branch name="nodejs" style={{ color: '#88bc5b' }} />
                        <Branch name="python/django" style={{ color : '#2ca977' }} />
                        <Branch name="php" style={{ color: '#9aa0c6' }} />
                        <Branch name="wordpress" style={{ color: '#50849a' }} />
                    </Branch>
                    <Branch name="design">
                        <Branch name="css/scss" style={{ color: '#29a3d9' }} />
                        <Branch name={<span>styled-components 💅</span>} style={{ color: '#e39573' }} />
                        <Branch name="react-spring" style={{ color: '#ffcbca' }} />
                        <Branch name="sketch" style={{ color: '#fdd131' }}/>
                        <Branch name="photoshop" style={{ color: '#77daff' }}/>
                    </Branch>
                </Branch>
                <Branch name="hobbies">
                    <Branch name="cooking" style={{ color: '#faa1bc' }}/>
                    <Branch name="fitness" style={{ color: '#80dad3' }}/>
                    <Branch name="reading" style={{ color: '#92c5f8' }}/>
                    <Branch name="bubbly beverages" style={{ color: '#fa7eff' }}/>
                </Branch>
            </Branch>
        </StyledTree>
    );
};

export default Tree;