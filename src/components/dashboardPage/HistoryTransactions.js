import React from 'react'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import images from '../../resources/images';


const transactionsData = [
    {
        name: 'Order Revenue',
        date: 'Apr 27,22',
        rate: 873,
        image: {
            src: images.revenue,
            alt: 'Logo'
        }
    },
    {
        name: 'withdrawal Initiated',
        date: 'Apr 27,22',
        rate: 748,
        image: {
            src: images.revenue,
            alt: 'Logo'
        }
    },
    {
        name: 'Summer trip',
        date: 'Apr 27,22',
        rate: -23,
        image: {
            src: images.scrollDown,
            alt: 'Logo'
        }
    },
    {
        name: 'Winter Trip',
        date: 'Apr 27,22',
        rate: 90,
        image: {
            src: images.revenue,
            alt: 'Logo'
        }
    },
];


const HistoryTransactions = () => {
    return (
        <React.Fragment>
            <Container>
                <Grid container alignItems="center" mt={2} mb={2}>
                    <Grid item xs={8}>
                        <span className='cardTitle'>History Transactions</span>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                        <span className='viewAll'>View all</span>
                    </Grid>
                </Grid>
                {transactionsData.map((page, index) => (
                    <Box
                        key={page.name}
                        sx={{
                            marginBottom: '40px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar src={page.image.src} alt={page.image.alt} sx={{ marginRight: '10px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <Typography sx={{ marginRight: 'auto' }}>{page.name}</Typography>
                                <Typography sx={{ color: page.rate >= 0 ? '#2DD683' : '#E74A51' }}>
                                    {page.rate >= 0 ? `+ $${page.rate}` : `- $${Math.abs(page.rate)}`}
                                </Typography>
                            </Box>
                            <Typography variant="body2">{page.date}</Typography>
                        </Box>
                    </Box>
                ))}

            </Container>

        </React.Fragment>
    )
}

export default HistoryTransactions
