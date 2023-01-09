import { useEffect, useState } from "react"
import { Grid, Typography } from "@mui/material"
import CurrencyField from "../CurrencyField"
import styles from "./styles"

const ConverterMarkup = ({
    fetchCurrencies,
    convert
}) => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [currencyName, setCurrecies] = useState()
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
        const res = await fetchCurrencies()
        setCurrecies(res.symbols)
        const firstCurrency = Object.keys(res.symbols)[0]
        setCurrencyOptions([...Object.keys(res.symbols)])
        setFromCurrency(firstCurrency)
        setToCurrency(firstCurrency)
        setExchangeRate(res.symbols[firstCurrency])
    }

    const convertValues = async () => {
        if (fromCurrency != null && toCurrency != null) {
            const res = await convert(fromCurrency, toCurrency)
            const rate = res.rates[toCurrency]
            setExchangeRate(rate)
        }

    }

    useEffect(() => {
        fetchAllCurrencies()
    }, [])

    useEffect(() => {
        convertValues()
    }, [fromCurrency, toCurrency])

    const handleFromAmountChange = (e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    const handleToAmountChange = (e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    const onHandleFromCurrency = (e) => {
        setFromCurrency(e.target.value)
    }

    const onHandleToCurrency = (e) => {
        setToCurrency(e.target.value)
    }
    

    return <>
        <Typography variant="h5" style={styles.header}>Currency converter</Typography>
        <Grid
            container
            item
            xs={12}
            sx={styles.container}
            
        >
            <CurrencyField
                label='From'
                currencies={currencyName}
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={onHandleFromCurrency}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
            />
        </Grid>
        <Typography variant="h5">=</Typography>
        <Grid
            container
            item
            xs={12}
            sx={styles.container}
        >
            <CurrencyField
                label='To'
                currencies={currencyName}

                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}

                onChangeCurrency={onHandleToCurrency}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
            />
        </Grid>
    </>
}

export default ConverterMarkup
