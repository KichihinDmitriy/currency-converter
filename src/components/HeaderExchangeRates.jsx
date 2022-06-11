export const HeaderExchangeRates = ({allCurrency}) => {

    if(!allCurrency.results) {
        return null
    }

    return (
        <div>
            <div>1 {allCurrency.base} is equevalent to {allCurrency.results.USD} USD / {allCurrency.results.EUR} EUR</div>
        </div>
    )
}