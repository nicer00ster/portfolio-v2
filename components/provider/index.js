import React, { useState, useEffect, useRef, createContext } from 'react';

const AppContext = createContext();

function AppProvider(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [width, setWidth] = useState(769);
    const [height, setHeight] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        function updateWindowDimensions() {
            if(width <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setMenuOpen(false);
            }
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        updateWindowDimensions();

        window.addEventListener('resize', updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        }
    }, [width]);

    function handleMenuClick(e) {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    function handleLoading(e) {
        e.preventDefault();
        setIsLoading(!isLoading);
    }

    return (
        <AppContext.Provider
            value={{
                state: {
                    isLoading: isLoading,
                    isMobile: isMobile,
                    menuOpen: menuOpen,
                    width: width,
                    height: height,
                    toastMessage: toastMessage,
                    toastRef: ref,
                },
                setMenuOpen: (e) => handleMenuClick(e),
                setIsLoading: (e) => handleLoading(e),
                setToastMessage: (message) => ref.current(message),
            }}>
            {props.children}
        </AppContext.Provider>
    );
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer, AppContext };