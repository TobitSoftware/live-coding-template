import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';

/**
 * This function renders the "App" component inside the "tapp" Element given in "index(.dev).html" file.
 */
const init = () => {
    const tappElement = document.querySelector('.tapp');

    ReactDOM.render(<App/>, tappElement);
};

/**
 * This function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go and then calls
 * the "init" function given above.
 */
chayns.ready.then(init).catch(() => {
    console.warn('No chayns environment found.');
});
