export const CurrencyField = ({
    allCurrency,
    currencyAmount,
    selectedCurrency,
    updateForm,
    currencyAmountName,
    selectCurrencyName,
}) =>  {

    return (
        <div className="input-group">
            <input className="form-control" type="number" value={currencyAmount} onChange={updateForm} name={currencyAmountName}/>
                <select value={selectedCurrency} onChange={updateForm} name={selectCurrencyName}>
                    {Object.keys(allCurrency.results).map((currency) => <option key={currency}>{currency}</option>)}
                </select>
        </div>
    )
}