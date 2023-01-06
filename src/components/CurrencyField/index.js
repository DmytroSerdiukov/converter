
import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const CurrencyField = (props) => {
    const {
        label,
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <TextField id="outlined-basic" label={label} variant="outlined" value={amount} onChange={onChangeAmount} />
            <FormControl>
                <InputLabel>Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={selectedCurrency}
                    value={selectedCurrency}
                    onChange={onChangeCurrency}
                >
                    {currencyOptions.map(option => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}

                </Select>
            </FormControl>

        </div>
    )
}

export default CurrencyField
