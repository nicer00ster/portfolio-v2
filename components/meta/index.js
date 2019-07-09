import Head from 'next/head';

function Meta() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#1f222e" />
            <meta name="msapplication-TileColor" content="#1f222e" />
            <meta name="Description" content="Alex Busch - Portfolio build with React, Next.JS, and Styled-Components" />
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
            <title>Alex Busch</title>
        </Head>
    );
}

export default Meta;