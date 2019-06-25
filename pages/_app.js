import App, { Container } from 'next/app';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

import Intro from '../components/intro';
import Layout from '../components/layout';
import AppProvider from '../components/provider';

class CustomApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        const token = "intro_token";

        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        if(parseCookies(ctx).token === undefined) {
            setCookie(ctx, 'token', token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            pageProps.cookie = token;
        } else {
            pageProps.cookie = null;
        }

        return { pageProps };
    }
    removeCookie(ctx) {
        return destroyCookie(ctx, 'token');
    }
    render() {
        const { Component, pageProps } = this.props;
        if(!pageProps.cookie) {
            return (
                <Container>
                    <AppProvider>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </AppProvider>
                </Container>
            );

        } else {
            return <Intro removeCookie={this.removeCookie} />
        }

    }
}

export default CustomApp;