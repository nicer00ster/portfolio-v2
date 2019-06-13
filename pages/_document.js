import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { parseCookies } from 'nookies';

export default class CustomDocument extends Document {
    static async getInitialProps (ctx) {
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
    render() {
        return (
            <html lang="en">
                <Head>
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    {!this.props.cookie.token && <canvas id="intro" />}
                    <NextScript />
                </body>
            </html>
        );
    }
}