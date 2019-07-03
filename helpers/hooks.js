import { useState, useEffect, useLayoutEffect } from 'react';
import { useSpring } from "react-spring";

function smoothScroll() {
    const [, setY] = useSpring(() => ({ y: 0 }));
    const [lock, setLock] = useState(false);

    useEffect(() => {
        setLock(true);

        setY({
            y: 0,
            reset: true,
            from: {
                y: window.scrollY,
            },
            onRest: () => setLock(false),
            onFrame: props => {
                window.scroll(0, props.y);
            },
        });
    }, []);

    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = lock && 'hidden';
        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = originalStyle;
        }
    }, [lock]); // Empty array ensures effect is only run on mount and unmount
}

export {
    smoothScroll,
};