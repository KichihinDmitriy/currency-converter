export const HeaderExchangeRates = ({allCurrency}) => {

    return (
        <div>
            <div>
                <span className="text-primary">1</span> {allCurrency.base} is equevalent to <span className="text-primary">{allCurrency.results.USD}</span> USD / <span className="text-primary">{allCurrency.results.EUR}</span> EUR</div>
        </div>
    )
}