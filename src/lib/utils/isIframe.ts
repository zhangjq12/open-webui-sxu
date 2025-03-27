let isIframe = false;

export const setIsIframe = (boo: boolean) => {
    isIframe = boo;
}

export const getIsIframe = () => {
    console.log(isIframe)
    return isIframe;
}