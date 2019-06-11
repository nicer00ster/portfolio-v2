import { useContext } from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

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
    if(state.isLoading) {
        return 'Loading...';
    }
    return (
      <ThemeProvider theme={theme}>
          <>
          <Background
              rotate="-12deg"
              menuOpen={state.menuOpen}
              scheme={{
                  'first': '#535c68',
                  'second': '#95afc0',
                  'third': '#c7ecee',
                  'fourth': '#dff9fb',
              }}
          />
          <Nav />
          <LayoutStyles menuOpen={state.menuOpen}>
              <GlobalStyles menuOpen={state.menuOpen} />
              <Meta />
              {props.children}
          </LayoutStyles>
          <Footer />
          </>
      </ThemeProvider>
    );
}

export default Layout;