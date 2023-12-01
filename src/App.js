import { Grid } from '@mui/material';
import './App.css';
import DashboardContainer from './components/dashboardPage/DashboardContainer';
import PaymentPage from './components/dashboardPage/PaymentPage';
import Header from './components/layout/Header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={2} p={1}>
        <Grid item xs={3} mt={2}>
          <PaymentPage />
        </Grid>
        <Grid item xs={9} mt={2}>
          <DashboardContainer />
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default App;
