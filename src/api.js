const BASE_URL = 'https://api.fastforex.io';

const API_KEY = 'b55b2df137-3881195ea6-rdb43y';

const ENDPOINTS = {
    allCurrency: () => `${BASE_URL}/fetch-all?from=UAH&api_key=${API_KEY}`,
    exchange: ({changeFrom, changeTo, amount}) => `${BASE_URL}/convert?from=${changeFrom}&to=${changeTo}&amount=${amount}&api_key=${API_KEY}`
}

export const fetchAllCurrency = () => {
    return fetch(ENDPOINTS.allCurrency())
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Error ' + response.statusText);
        })
        .then(response => response)
        .catch(error => {
            new Error(error)
        })
}

export const fetchExchange = ({changeFrom, changeTo, amount}) => {
    return fetch(ENDPOINTS.exchange({changeFrom, changeTo, amount}))
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Error ' + response.statusText);
        })
        .then(response => response)
        .catch(error => {
            new Error(error)
        })
}