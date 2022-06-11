import {useEffect, useState} from "react";
import {CurrencyField} from "./CurrencyField";
import {CURRENCY_EXCHANGE_FIELDS} from "../consts";
import {fetchExchange} from "../api";

export const CurrencyConversion = ({allCurrency}) => {

    const [form, updateForm]  = useState({
        [CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_1]: '',
        [CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_2]: '',
        [CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_1]: 'UAH',
        [CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_2]: 'USD',
    })

    const onChangeForm = ({ target: { name, value } }) => {
        updateForm({...form, [name]: value});
            fetchExchange({
                changeFrom: form[CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_1],
                changeTo: form[CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_2],
                amount: form[CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_1]
            }).then(response => {
                updateForm({...form, [CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_2]: value * response.result.rate});
            })
    }

    console.log('form ', form)
    if(!allCurrency.results) {
        return null
    }

        return (
            <div>
                <form>
                    <CurrencyField
                        allCurrency={allCurrency}
                        currencyAmount={form[CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_1]}
                        selectedCurrency={form[CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_1]}
                        updateForm={onChangeForm}
                        currencyAmountName={CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_1}
                        selectCurrencyName={CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_1}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <CurrencyField
                        allCurrency={allCurrency}
                        currencyAmount={form[CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_2]}
                        selectedCurrency={form[CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_2]}
                        updateForm={onChangeForm}
                        currencyAmountName={CURRENCY_EXCHANGE_FIELDS.CURRENCY_AMOUNT_2}
                        selectCurrencyName={CURRENCY_EXCHANGE_FIELDS.SELECTED_CURRENCY_2}
                    />
                </form>
            </div>
        )
    }