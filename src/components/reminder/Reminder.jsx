import React, { PureComponent } from 'react';

import { PersonFinder, Calendar, Button } from 'chayns-components';

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
        const { person, date } = this.state;

        const personName = `${person.firstName} ${person.lastName}`;
        const dateString = new Date(date).toLocaleDateString().slice(0, -5);

        chayns.intercom.sendMessageToPage({ text: `Hochzeitstag Reminder\n\nEhepartner: ${personName}\nDatum: ${dateString}` });

        chayns.dialog.alert(null, text.reminder.submitButton.success);
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
                    <Button disabled={person === null} onClick={this.handleSubmit}>
                        {text.reminder.submitButton.text}
                    </Button>
                </div>
            </div>
        );
    }
}
