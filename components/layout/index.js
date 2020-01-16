import { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from "aos";

import Header from '../nav';
import Footer from '../footer';
import Background from '../kit/background';
import Toast from '../kit/toast';
import { AppContext } from '../provider';

import {
    LayoutStyles,
    GlobalStyles,
    breakpoints,
    colors,
    effects,
    mediaQuery,
} from './layout.styles';

const theme = {
    breakpoints,
    mediaQuery,
    colors,
    effects,
};

function Layout(props) {
    const { state } = useContext(AppContext);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    if (props.isIntro) {
        return (
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Background
                        rotate="-12deg"
                        menuOpen={state.menuOpen}
                    />
                    <Header />
                    <LayoutStyles menuOpen={state.menuOpen}>
                        <GlobalStyles menuOpen={state.menuOpen} />
                        <Toast children={add => (state.toastRef.current = add)} />
                        {props.children}
                        <Footer />
                    </LayoutStyles>
                </>
            </ThemeProvider>
        );
    }
}

export default Layout;
