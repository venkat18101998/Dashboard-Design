import { Container, Grid, LinearProgress, Stack } from '@mui/material'
import React from 'react'

const pages = [
    { name: 'Gaming PC', value: 80, rate: 309 },
    { name: 'New house', value: 95, rate: 400 },
    { name: 'Summer trip', value: 70, rate: 209 },
    { name: 'Wedding', value: 50, rate: 109 },
    { name: 'Top up game', value: 30, rate: 89 },
];

const SavingPage = () => {
    return (
        <React.Fragment>
            <Container>
                <Grid container alignItems="center" mt={2}>
                    <Grid item xs={8}>
                        <span className='cardTitle'>Mysaving</span>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                        <span className='viewAll'>View all</span>
                    </Grid>
                </Grid>

                <Stack spacing={2} sx={{ flex: 1 }} mt={2} >
                    {pages.map((page) => (
                        <div key={page.name} style={{ marginBottom: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>{page.name}</span>
                                <span style={{ marginLeft: 'auto' }}> ${page.rate}</span>
                            </div>

                            <LinearProgress
                                variant="determinate"
                                value={page.value}
                                style={{ width: '100%', marginTop: '10px' }}
                                sx={{
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#00B3FF'
                                    }
                                }}
                            />
                        </div>
                    ))}
                </Stack>
            </Container>
        </React.Fragment>
    )
}

export default SavingPage
