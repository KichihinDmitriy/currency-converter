export const CurrencyField = ({
    allCurrency,
    currencyAmount,
    selectedCurrency,
    onChangeForm,
    currencyAmountName,
    selectCurrencyName,
    changeTo,
    dependedFieldName,
}) =>  {
    return (
        <div className="input-group">
            <input
                className="form-control"
                type="number"
                value={currencyAmount}
                onChange={onChangeForm}
                name={currencyAmountName}
                data-change-from={selectedCurrency}
                data-change-to={changeTo}
                data-amount={currencyAmount}
                data-depended-field-name={dependedFieldName}
            />
                <select
                    className="btn btn-light"
                    value={selectedCurrency}
                    onChange={onChangeForm}
                    name={selectCurrencyName}
                    data-change-from={selectedCurrency}
                    data-change-to={changeTo}
                    data-amount={currencyAmount}
                    data-depended-field-name={dependedFieldName}
                >
                    {Object.keys(allCurrency.results).map((currency) => <option key={currency}>{currency}</option>)}
                </select>
        </div>
    )
}