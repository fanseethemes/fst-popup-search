const prefix = 'fst';

export const plugin = `${prefix}-popup-search`;

export const icons = {
    enterIcon  : `<?xml version="1.0" encoding="utf-8"?>
                <svg version="1.1" width="25" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                <path d="M1,74.23l32.55-24.28l0.17,16.18c0,0,36.27-0.09,39.97-0.09c8.04,0.01,8.82-3.34,8.96-8.52c0.02-0.82,0.04-56.76,0.04-56.76
                    H99l-0.05,63.36c0.69,11.67-5.07,17.48-16.38,18.24l-48.9,0v16.61L1,74.23z"/>
                </svg`,
    clearIcon : `<?xml version="1.0" encoding="utf-8"?>
                <!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg version="1.1" width="18"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                <path d="M26.46,56.04C25.28,72.65,17.23,86.61,7.19,99.2h24.96c4.81-4.61,7.86-10.71,9.38-17.17c0.59,6.74-0.94,12.46-4.32,17.17
                    l21.38-0.11c2.54-2.26,4.31-4.75,5.17-7.53c0.27,2.77-0.69,5.43-2.42,7.64l15.56-0.11c10.71-0.44,13.51-10.34,14.4-28.8V56.04H26.46
                    z"/>
                <path d="M26.74,52.34l64.56-0.07l-0.5-17.24c-0.42-3.14-1.84-5.87-6.34-6.43l-18.36,0.04l1.87-20.68
                    C67.27-0.28,54.33-2.1,52.35,7.42L52.3,28.59l-16.52-0.01c-4.3,0.31-6.65,2.94-7.11,6.7L26.74,52.34z"/>
                </svg>`,
    closeIcon: '<svg version="1.1" width="18" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285L284.286,256.002z"></path></svg>'
};

export const classNames= {
    wrapper  : `${plugin}-wrapper`,
    firstTab : `${plugin}-first-tabindex`,
    lastTab  : `${plugin}-last-tabindex`, 
    close    : `${plugin}-close`, 
    clear    : `${plugin}-clear`,
    form     : `${plugin}-form`,
    label    : `${plugin}-label`,
    overlay  : `${plugin}-overlay`,
    btnSubmit: `${plugin}-submit`,
    btnWrapper: `${plugin}-btns`,
    active    : `${plugin}-active`,
};

export const txt = {
    placeholderText: 'Search...',
    labelText: 'What are you looking for?',
    elementNotExit: 'provided element not exist on DOM',
};
