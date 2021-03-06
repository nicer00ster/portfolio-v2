import App, { Container } from 'next/app';
import Router from 'next/router';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Loading from '../components/kit/loading';
import AppProvider from '../components/provider';
import { trackPageView } from '../helpers';

class CustomApp extends App {
    state = {
        isMounted: false,
    };

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

    componentDidMount() {
        Router.events.on("routeChangeComplete", (url) => trackPageView(url));

        this.setState({
            isMounted: true,
        });
    }

    removeCookie(ctx) {
        return destroyCookie(ctx, 'token');
    }
    render() {
        const { Component, pageProps } = this.props;
        if(!this.state.isMounted) {
            return <Loading wantsLogoLoading={false} />;
        } else if(!pageProps.cookie) {
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
            return (
                <AppProvider>
                    <Layout isIntro={true}>
                        <Intro removeCookie={this.removeCookie} />
                    </Layout>
                </AppProvider>
            );
        }

    }
}

export default CustomApp;
