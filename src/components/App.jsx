import React, {Component} from 'react';

import CurrencyConversion from './CurrencyConversion';

export default class App extends Component {

    getCurrentExchangeRate = () => {

        const baseUrl = 'https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014';

        const logSuccess = data => {
            console.log(data);
        }

        const logError = err => {
            console.warn(err);
        };
        
        fetch(baseUrl)
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Error ' + response.statusText);
        })
        .then(logSuccess)
        .catch(logError)
    }

    render() {

        return (
            <div>
                <CurrencyConversion />
            </div>
        )
    }
}