import { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from "aos";

import Meta from '../meta';
import Nav from '../nav';
import Footer from '../footer';
import Background from '../kit/background';
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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        AOS.init();
        AOS.refresh();

        return function unmounted() {
            setIsMounted(false);
        }
    });

    return (
      <ThemeProvider theme={theme}>
          <>
          <Background
              rotate="-12deg"
              menuOpen={state.menuOpen}
          />
          <Nav />
          <LayoutStyles menuOpen={state.menuOpen}>
              <Meta />
              <GlobalStyles menuOpen={state.menuOpen} />
              {props.children}
          </LayoutStyles>
          <Footer />
          </>
      </ThemeProvider>
    );
}

export default Layout;