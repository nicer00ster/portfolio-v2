import Head from 'next/head';

function Meta() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#1f222e"/>
            <meta name="Description" content="Alex Busch - Portfolio build with React, Next.JS, and Styled-Components" />
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />*/}
            {/*<link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />*/}
            {/*<link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />*/}
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
            <title>Alex Busch</title>
        </Head>
    );
}

export default Meta;