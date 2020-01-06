function handleScroll(el, setter) {
    const element = document.querySelector(el);

    if (element && window.scrollY > (element.offsetTop + element.offsetHeight)) {
        setter(true);
    }
    if(window.scrollY === 0) {
        setter(false);
    }
}

function trackPageView(url) {
    try {
        window.gtag('config', process.env.GTAG, {
            page_location: url
        });
    } catch (error) {
        // silences the error in dev mode
        // and/or if gtag fails to load
    }
}

export {
    handleScroll,
    trackPageView,
};
