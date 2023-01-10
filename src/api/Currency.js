import Currency from "."
import { LATEST_ROUTE, SYMBOLS_ROUTE } from "./routes"

const CurrencyAPI = {
    fetchDollarLatestRate: async() => {
        const response = await Currency.get(LATEST_ROUTE, {
            params: {
                base: 'usd',
                symbols: 'uah'
            }
        })
        return response.data
    },
    fetchEuroLatestRate: async() => {
        const response = await Currency.get(LATEST_ROUTE, {
            params: {
                base: 'eur',
                symbols: 'uah'
            }
        })
        return response.data
    },
    fetchLatestRates: async() => {
        const response = await Currency.get(SYMBOLS_ROUTE)
        return response.data
    },
    convert: async(fromCurrency, toCurrency) => {
        const response = await Currency.get(LATEST_ROUTE, {
            params: {
                base: fromCurrency,
                symbols: toCurrency
            }
        })
        return response.data
    }
}

export default CurrencyAPI