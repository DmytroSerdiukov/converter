import Currency from "."

const CurrencyAPI = {
    fetchDollarLatestRate: async() => {
        const response = await Currency.get('/latest', {
            params: {
                base: 'usd',
                symbols: 'uah'
            }
        })
        return response.data
    },
    fetchEuroLatestRate: async() => {
        const response = await Currency.get('/latest', {
            params: {
                base: 'eur',
                symbols: 'uah'
            }
        })
        return response.data
    },
    fetchLatestRates: async() => {
        const response = await Currency.get('/symbols')
        return response.data
    },
    convert: async(fromCurrency, toCurrency) => {
        const response = await Currency.get('/latest', {
            params: {
                base: fromCurrency,
                symbols: toCurrency
            }
        })
        return response.data
    }
}

export default CurrencyAPI