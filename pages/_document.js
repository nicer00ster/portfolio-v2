import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { parseCookies } from 'nookies';
import Meta from '../components/meta';

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        const cookie = parseCookies(ctx);

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                cookie,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal();
        }
    }

    setGoogleTags() {
        return {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.GTAG}');
            `
        };
    }
    render() {
        return (
            <html lang="en" dir="ltr">
                <Meta />
                <Head>
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    {!this.props.cookie.token && <canvas id="intro" />}
                    <NextScript />
                    <>
                        <script
                            async
                            src="https://www.googletagmanager.com/gtag/js?id=UA-155364015-1"
                        />
                        {/* We call the function above to inject the contents of the script tag */}
                        <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                    </>
                </body>
            </html>
        );
    }
}
