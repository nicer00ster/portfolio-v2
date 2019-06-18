import React, { useState, useEffect, useRef, createContext } from 'react';

const AppContext = createContext();

function AppProvider(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMenuScrolled, setIsMenuScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [width, setWidth] = useState(769);

    const ref = useRef(null);

    function updateWindowDimensions() {
        if(width <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setMenuOpen(false);
        }
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        updateWindowDimensions();

        window.addEventListener('resize', updateWindowDimensions);
        window.addEventListener('scroll', handleScroll);

        return function unmount() {
            window.removeEventListener('resize', updateWindowDimensions);
            window.removeEventListener('scroll', handleScroll);
        }
    });

    function handleScroll() {
        const element = document.querySelector('#header');

        if (window.scrollY > (element.offsetTop + element.offsetHeight)) {
            setIsMenuScrolled(true);
        }
        if(window.scrollY === 0) {
            setIsMenuScrolled(false);
        }
    }

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
                    isMenuScrolled: isMenuScrolled,
                    menuOpen: menuOpen,
                    width: width,
                    toastMessage: toastMessage,
                    toastRef: ref,
                },
                setMenuOpen: (e) => handleMenuClick(e),
                setIsLoading: (e) => handleLoading(e),
                setToastMessage: (message) =>  ref.current(message),
            }}>
            {props.children}
        </AppContext.Provider>
    );
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer, AppContext };