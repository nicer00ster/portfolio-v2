import React, { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

function AppProvider(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMenuScrolled, setIsMenuScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(769);

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
        setIsLoading(false);

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
    };

    function handleMenuClick(e) {
        e.preventDefault();
        setMenuOpen(!menuOpen);
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
                },
                setMenuOpen: (e) => handleMenuClick(e),
            }}>
            {props.children}
        </AppContext.Provider>
    );
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer, AppContext };