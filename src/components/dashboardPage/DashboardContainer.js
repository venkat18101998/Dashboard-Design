import React from 'react'
import './DashboardStyle.css'
import CommonCard from '../common/card/CommonCard'
import { Grid } from '@mui/material'
import GraphFlow from './GraphFlow'
import SavingPage from './SavingPage'
import HistoryTransactions from './HistoryTransactions'
import Expenses from './Expenses'

const DashboardContainer = () => {

    return (
        <React.Fragment>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={3}>
                    <CommonCard text={'My Balance'} rate={'104,500'} color={'red'} />
                </Grid>
                <Grid item xs={3}>
                    <CommonCard text={'Income'} rate={'112,800'} color={'blue'} btn={true} percentage={'11.09'} />
                </Grid>
                <Grid item xs={3}>
                    <CommonCard text={'Saving'} rate={'302,250'} color={'green'} btn={true} percentage={'11.09'} />
                </Grid>
                <Grid item xs={3}>
                    <CommonCard text={'Expense'} rate={'441,100'} color={'yellow'} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <div className='grapSection'>
                        <GraphFlow />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className='grapSection'>
                        <SavingPage />
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <div className='grapSection'>
                        <Expenses />
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className='grapSection'>
                        <HistoryTransactions />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DashboardContainer
