import { hot } from 'react-hot-loader';
import React from 'react';

import Header from './header/Header';
import Reminder from './reminder/Reminder';
import Footer from './footer/Footer';

/**
 * Stateless component App which holds the components Header, Reminder and Footer
 */
const App = () => (
    <>
        <Header/>
        <Reminder/>
        <Footer/>
    </>
);

export default hot(module)(App);
