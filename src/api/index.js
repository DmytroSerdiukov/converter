import axios from 'axios'

const Currency = axios.create({
    // baseURL: 'https://api.exchangeratesapi.io/latest',
    baseURL: 'https://api.apilayer.com/exchangerates_data',
    headers: {
        'apikey': 'ULEUbfi9ZZoAnTEvIinQHbVG1boiJ1yG',
    }
})

export default Currency