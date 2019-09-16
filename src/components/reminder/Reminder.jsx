import React, { PureComponent } from 'react';

import { PersonFinder, Calendar } from 'chayns-components';

import text from '../../constants/text';

import './reminder.scss';

export default class Reminder extends PureComponent {
    constructor() {
        super();

        this.state = {
            person: null,
            date: new Date()
        };
    }

    handleDateSelect = (newDate) => {
        this.setState({ date: newDate });
    };

    handleChangePerson = (newPerson) => {
        this.setState({ person: newPerson });
    };

    handleSubmit = () => {
        
    };

    render() {
        const { person, date } = this.state;

        return (
            <div className="reminder">
                <div className="reminder__person-finder">
                    <div className="reminder__person-finder__label">
                        {text.reminder.personFinder.label}
                    </div>
                    <PersonFinder
                        placeholder={text.reminder.personFinder.placeholder}
                        onChange={this.handleChangePerson}
                    />
                </div>
                <div className="reminder__calendar">
                    <Calendar
                        onDateSelect={this.handleDateSelect}
                        selected={date}
                    />
                </div>
                <div className="reminder__submit-button-wrapper">
                    
                </div>
            </div>
        );
    }
}
