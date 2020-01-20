import React from 'react';
import ReactDOM from 'react-dom';
import Maap from './Maap';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import te from 'react-intl/locale-data/te';
import localeData from './resources/locale/messages.js';

addLocaleData(en);
addLocaleData(te);
const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en;

const flattenMessages = ((nestedMessages, prefix = '') => {
    if (nestedMessages === null) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value       = nestedMessages[key]
        const prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'string') {
        Object.assign(messages, { [prefixedKey]: value })
        } else {
        Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
})

ReactDOM.render(
    <IntlProvider locale={language} messages={flattenMessages(messages)} >
        <Maap />
    </IntlProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();