import { useEffect, useState } from "react"
import CurrencyAPI from "../../api/Currency"
import HeaderMarkup from "./markup"

const Header = () => {

    useEffect( () => {
        fetchDollarLatestRate()
        fetchEuroLatestRate()
    }, [])

    const [USD, setUSD] = useState('-')
    const [EUR, setEUR] = useState('-')

    const fetchDollarLatestRate = async() => {
        const data = await CurrencyAPI.fetchDollarLatestRate()
        const rate = data.rates.UAH.toFixed(2)
        setUSD(rate)
    }

    const fetchEuroLatestRate = async() => {
        const data = await CurrencyAPI.fetchEuroLatestRate()
        const rate = data.rates.UAH.toFixed(2)
        setEUR(rate)

    }

    return <HeaderMarkup USD={USD} EUR={EUR}/>
}

export default Header