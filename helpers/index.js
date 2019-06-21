function handleScroll(el, setter) {
    const element = document.querySelector(el);

    if (window.scrollY > (element.offsetTop + element.offsetHeight)) {
        setter(true);
    }
    if(window.scrollY === 0) {
        setter(false);
    }
}

export {
    handleScroll,
};