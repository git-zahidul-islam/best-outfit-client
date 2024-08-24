
export const loadAd = () => {
    window.atOptions = {
        key: '6f257b46bf5627156750307c9d72227d',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {}
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.topcreativeformat.com/6f257b46bf5627156750307c9d72227d/invoke.js';

    const adDiv = document.getElementById('ad-container');
    if (adDiv) {
        adDiv.appendChild(script);
    }
};
