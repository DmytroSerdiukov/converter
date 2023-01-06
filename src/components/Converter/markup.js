import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import CurrencyAPI from "../../api/Currency"
import CurrencyField from "../CurrencyField"

const ConverterMarkup = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = (amount * exchangeRate).toFixed(2)
    } else {
        toAmount = amount
        fromAmount = (amount / exchangeRate).toFixed(2)
    }

    const fetchAllCurrencies = async () => {
        const res = await CurrencyAPI.fetchLatestRates()
        const firstCurrency = Object.keys(res.symbols)[0]
        setCurrencyOptions([...Object.keys(res.symbols)])
        setFromCurrency(firstCurrency)
        setToCurrency(firstCurrency)
        setExchangeRate(res.symbols[firstCurrency])
    }

    const convert = async () => {
        if (fromCurrency != null && toCurrency != null) {
            const res = await CurrencyAPI.convert(fromCurrency, toCurrency)
            const rate = res.rates[toCurrency]
            setExchangeRate(rate)
        }

    }

    useEffect(() => {
        fetchAllCurrencies()
    }, [])

    useEffect(() => {
        convert()
    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }


    return <>
        <h1>Convert</h1>
        <CurrencyField
            label='From'
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
        />
        <Typography variant="h5">=</Typography>
        <CurrencyField
            label='To'
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
        />
    </>
}

export default ConverterMarkup


const styles = {
    heading: {
        margin: 0,
        marginBottom: '.5rem'
    },
    input: {
        border: '1px solid #333',
        borderRadius: '.3em',
        padding: '.25rem',
        width: '7em'
    },
    select: {
        marginLeft: '.5rem'
    },
    equals: {
        fontWeight: 'bold',
        fontSize: '2rem'
    }
}
