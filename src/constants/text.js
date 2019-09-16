export default {
    header: {
        headline: 'Hoch­zeits­tag Reminder',
        intro: 'Du hast euren Hochzeitstag schon einmal vergessen oder möchtest einfach nur zur Sicherheit daran erinnert werden? Dann ist der Hochzeitstag Reminder genau das richtige für Dich. Trage einfach das Datum und die Person ein und wir erinnern Dich an Deinen Hochzeitstag.'
    },
    reminder: {
        personFinder: {
            placeholder: 'Person suchen',
            label: 'Ehepartner'
        },
        submitButton: {
            text: 'Speichern',
            success: ''
        }
    },
    footer: {
        head: 'Brauchst Du Hilfe?',
        intro: 'Hier findest Du die Antwort zu deinen Fragen. Falls Du nicht weiter kommst, kannst Du auch gerne einen unserer Kollegen ansprechen.',
        question: {
            1: 'Wie starte ich das Projekt?',
            2: 'Gibt es eine Dokumentation zu den chayns-components?',
            3: 'Wo kann ich die Texte bearbeiten?',
            4: 'Wann wird der Inhalt meines Tapps aktualisiert?'
        },
        answer: {
            1: 'Öffne das Terminal in Visual Studio Code mit "STRG + ö" oder über das Menü oben, gib den NPM Befehl "npm start" ein und bestätige diesen mit der ENTER Taste.',
            2: 'Ja, diese findest Du unter der folgenden URL: https://github.com/TobitSoftware/chayns-components',
            3: 'Für die Texte gibt es eine "text.js" Datei. Du findest diese unter "src > constants".',
            4: 'Der Inhalt deines Tapps wird bei laufendem Projekt (siehe erste Frage) automatisch aktualisiert, sobald Du eine Änderung im Code machst und diese per "STRG + S" speicherst. Das ganze funktioniert über das HotLoading von React.'
        }
    }
};
