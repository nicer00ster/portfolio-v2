import Head from 'next/head';

function Meta() {
    return (
        <Head>
            <noscript>
                For full functionality of this site it is necessary to enable JavaScript.
                Here are the <a href="https://www.enable-javascript.com/">
                instructions how to enable JavaScript in your web browser</a>.
            </noscript>
            <title>Alex Busch</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Alex Busch" />
            <meta name="description" content="Full Stack JavaScript Developer" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#1f222e" />
            <meta name="msapplication-TileColor" content="#1f222e" />
            <meta property="og:title" content="Alex Busch" />
            <meta property="og:description" content="Full Stack JavaScript Developer" />
            <meta property="og:image" content="https://alexbusch.io/static/thumbnail.png" />
            <meta property="og:url" content="https://alexbusch.io/" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://alexbusch.io/" />
            <meta property="twitter:title" content="Alex Busch" />
            <meta property="twitter:description" content="Full Stack JavaScript Developer" />
            <meta property="twitter:image" content="https://alexbusch.io/static/thumbnail.png" />
            <meta property="og:site_name" content="Alex Busch" />
            <meta name="twitter:image:alt" content="Alex Busch" />
            <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#1f222e" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
            <link rel="manifest" href="/static/site.webmanifest" />
            <link rel="preload" href="/static/fonts/Raleway.ttf" as="font" type="font/ttf" crossOrigin="true" />
            <link rel="preload" href="/static/fonts/Trirong.ttf" as="font" type="font/ttf" crossOrigin="true" />
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
    );
}

export default Meta;
