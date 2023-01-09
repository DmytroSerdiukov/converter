import React from 'react'
import { Grid, Typography } from "@mui/material";
import { US, EU } from "country-flag-icons/react/3x2";
import styles from './styles';

const UsdToHrn = ({ rate }) => {
    return (
        <div>
            <US width={48} />
            <Typography component={'p'} style={styles.iconText}>{rate}</Typography>
        </div>
    );
};

const EuroToHrn = ({ rate }) => {
    return (
        <div>
            <EU width={48} />
            <Typography component={'p'} style={styles.iconText}>{rate}</Typography>
        </div>
    );
};


const HeaderMarkup = ({ USD, EUR }) => {

    return (
        <Grid
            container
            sx={styles.container}
        >
            <Grid container item justifyContent={"center"} xs={4} sm={2}>
                <EuroToHrn rate={EUR} />
            </Grid>
            <Grid container item justifyContent={"center"} xs={4} sm={2}>
                <UsdToHrn rate={USD} />
            </Grid>
        </Grid>
    );
}



export default HeaderMarkup;
