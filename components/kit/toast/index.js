import { useState, useEffect } from 'react'
import { useTransition } from "react-spring";

import {
    StyledToastContainer,
    StyledToastOuter,
    StyledToastInner,
    StyledToastContent,
    StyledToastButton,
    StyledToastDuration,
} from './toast.styles';

let notifId = 0;

function AppNotifications({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) {
    const [refMap] = useState(() => new WeakMap());
    const [cancelMap] = useState(() => new WeakMap());
    const [items, setItems] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    const transitions = useTransition(items, item => item.key, {
        from: { opacity: 0, height: 0, life: '100%', transform: 'translate3d(0px, 100%, 0px) scale(1)', zIndex: 1 },
        enter: item => async next => await next({
            opacity: 1,
            height: refMap.get(item).offsetHeight,
            transform: `translate3d(0px, -${item.key * 15}px, 0px) scale(${1 - (item.key / 100 * 2)})`,
            zIndex: -item.key
        }),
        leave: item => async (next, cancel) => {
            cancelMap.set(item, cancel);
            await next({ life: '0%' });
            await next({ opacity: 0 });
            await next({ height: 0 });
        },
        onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
        onDestroyed: () => notifId--,
        config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
    });

    useEffect(() => void children(msg => setItems(state => [...state, { key: notifId++, msg }])), []);

    return (
        <StyledToastContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {transitions.map(({ key, item, props: { life, ...style } }) => (
                <StyledToastOuter key={key} style={isHovered ? { ...style, transform: `translate3d(0px, -${70 * item.key}px, -${item.key + 1}px) scale(.98)`} : { ...style }}>
                    <StyledToastInner>
                        <StyledToastContent ref={ref => ref && refMap.set(item, ref)}>
                            <StyledToastDuration style={{ right: life }} />
                            <p>{item.msg}</p>
                            <StyledToastButton
                                onClick={e => {
                                    e.stopPropagation();
                                    cancelMap.has(item) && cancelMap.get(item)()
                                }}>
                                <div style={{ width: '25px', height: '25px', backgroundColor: 'black' }}/>
                            </StyledToastButton>
                        </StyledToastContent>
                    </StyledToastInner>

                </StyledToastOuter>
            ))}
        </StyledToastContainer>
    )
}

export default AppNotifications;