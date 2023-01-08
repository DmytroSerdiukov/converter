import React from 'react'
import { useEffect, useState } from "react"
import CurrencyAPI from "../../api/Currency"
import ConverterMarkup from "./markup"

const Converter = () => {


    const fetchCurrencies = async() => {
        const res = await CurrencyAPI.fetchLatestRates()
        return res
    }

    const convert = async(fromCurrency, toCurrency) => {
        const res = await CurrencyAPI.convert(fromCurrency, toCurrency)
        return res
    }

    return <ConverterMarkup
    fetchCurrencies={fetchCurrencies}
    convert={convert}
    />
}

export default Converter