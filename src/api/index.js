import axios from 'axios'

const Currency = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data',
    headers: {
        'apikey': 'F8c5MfDIHZHrmB65lqXLGLR1E9xNWll7',
    }
})

export default Currency