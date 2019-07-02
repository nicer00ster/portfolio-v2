import { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from "aos";

import Meta from '../meta';
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
          {isMounted && <Header />}
          <LayoutStyles menuOpen={state.menuOpen}>
              <Meta />
              <GlobalStyles menuOpen={state.menuOpen} />
              <Toast children={add => (state.toastRef.current = add)} />
              {props.children}
              <Footer />
          </LayoutStyles>
          </>
      </ThemeProvider>
    );
}

export default Layout;