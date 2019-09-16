import React, { PureComponent } from 'react';

import { Accordion, AccordionIntro } from 'chayns-components';

import text from '../../constants/text';

import './footer.scss';

export default class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <Accordion head={text.footer.head}>
                    <AccordionIntro>
                        {text.footer.intro}
                    </AccordionIntro>
                    <Accordion head={text.footer.question[1]} isWrapped={true} dataGroup="footer">
                        <div className="accordion__content">
                            {text.footer.answer[1]}
                        </div>
                    </Accordion>
                    <Accordion head={text.footer.question[2]} isWrapped={true} dataGroup="footer">
                        <div className="accordion__content">
                            {text.footer.answer[2]}
                        </div>
                    </Accordion>
                    <Accordion head={text.footer.question[3]} isWrapped={true} dataGroup="footer">
                        <div className="accordion__content">
                            {text.footer.answer[3]}
                        </div>
                    </Accordion>
                    <Accordion head={text.footer.question[4]} isWrapped={true} dataGroup="footer">
                        <div className="accordion__content">
                            {text.footer.answer[4]}
                        </div>
                    </Accordion>
                </Accordion>
            </div>
        );
    }
}
