
import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styles from './style'

const CurrencyField = (props) => {
    const {
        label,
        currencies,
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <TextField sx={styles.input} label={'Amount'} variant="outlined" value={amount} onChange={onChangeAmount} />
            <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select
                sx={styles.select}
                    label={selectedCurrency}
                    value={selectedCurrency}
                    onChange={onChangeCurrency}
                >
                    {currencyOptions.map(option => (
                        <MenuItem key={option} value={option}>{currencies[option]}</MenuItem>
                    ))}

                </Select>
            </FormControl>

        </div>
    )
}

export default CurrencyField
