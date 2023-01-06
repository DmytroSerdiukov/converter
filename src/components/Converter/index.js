import React from 'react'
import { useEffect, useState } from "react"
import CurrencyAPI from "../../api/Currency"
import ConverterMarkup from "./markup"

const Converter = () => {

    // const [currencyOptions, setCurrencyOptions] = useState([])
    // const [fromCurrency, setFromCurrency] = useState()
    // const [toCurrency, setToCurrency] = useState()
    // const [exchangeRate, setExchangeRate] = useState()
    // const [amount, setAmount] = useState(1)
    // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)


    // let toAmount, fromAmount
    // if (amountInFromCurrency) {
    //     fromAmount = amount
    //     toAmount = (amount * exchangeRate).toFixed(2)
    // } else {
    //     toAmount = amount
    //     fromAmount = (amount / exchangeRate).toFixed(2)
    // }

    // const fetchAllCurrencies = async () => {
    //     const res = await CurrencyAPI.fetchLatestRates()
    //     const firstCurrency = Object.keys(res.symbols)[0]
    //     setCurrencyOptions([...Object.keys(res.symbols)])
    // }

    // const convert = async () => {
    //     if (fromCurrency != null && toCurrency != null) {
    //         const res = await CurrencyAPI.convert(fromCurrency, toCurrency)
    //         const rate = res.rates[toCurrency]
    //         setExchangeRate(rate)
    //     }

    // }

    // useEffect(() => {
    // fetchAllCurrencies()
    // }, [])

    // useEffect(() => {
    //     convert()
    // }, [fromCurrency, toCurrency])

    return <ConverterMarkup
        // currencyOptions={currencyOptions}
    />
}

export default Converter