import { useEffect, useState } from 'react';
import { AppHeader } from './AppHeader';
import { HeaderExchangeRates } from './HeaderExchangeRates';
import { CurrencyConversion } from './CurrencyConversion';
import { fetchAllCurrency } from '../api';

import './App.css';

export const App = () => {

    const [allCurrency, setAllCurrency] = useState({});

    useEffect(() => {
        fetchAllCurrency().then(setAllCurrency)
    }, [])

    return (
        <div className="app-container">
            <AppHeader />
            <HeaderExchangeRates allCurrency={allCurrency} />
            <CurrencyConversion allCurrency={allCurrency} />
        </div>
    )
}