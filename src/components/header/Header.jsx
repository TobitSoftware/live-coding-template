import React, { PureComponent } from 'react';

import text from '../../constants/text';

import './header.scss';

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <h1>
                    {text.header.headline}
                </h1>
            </div>
        );
    }
}
