import { Box, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../common/card/button/CommonButton'
import images from '../../resources/images'


const PaymentPage = () => {
    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span className='cardTitle'>My Card</span>
                <Card className='creditCard'>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography sx={{ padding: '2px 20px' }} className="whiteText" level="title-lg">Sakuku</Typography>
                        <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
                            <img src={images.card_wifi} alt="Your" />
                        </div>
                    </div>
                    <CardContent orientation="horizontal" style={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid container alignItems="center">
                            <Grid item xs={8} style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography className="whiteText" level="title-lg">venkatesan</Typography>
                                <Typography className="whiteText" level="body-sm" sx={{ padding: '2px 20px', display: 'inline-block' }}>April 24</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justifyContent="flex-end">
                                    <Grid item mt={4}>
                                        <img src={images.chip} alt="chip" style={{ maxWidth: '50px', maxHeight: '90px' }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            {[...Array(9)].map((_, index) => (
                                <Grid item key={index}>
                                    <Typography className="whiteText" style={{ marginRight: 5 }}>{index + 1}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography className='expensesText' component="div">
                            Your Balance
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography className='cardRate' >
                                $128,320
                            </Typography>
                            <Typography className='increment' >
                                <img src={images.up_arrow} alt="up" /> 23.12%
                            </Typography>
                            <Typography className='decrease' >
                                <img src={images.down_arrow} alt="down" />112,800%
                            </Typography>
                        </div>
                    </CardContent>
                    <hr />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography className='expensesText'>
                                Currency
                            </Typography>
                            <Typography className='expensesText'>
                                Status
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography className='cardRate' >
                                USD/ US Dollar
                            </Typography>
                            <Typography className='cardRate'>
                                Active
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
                <CommonButton startIcon={<img src={images.plus} alt="plus" />} className={'buttonName'} variant="outlined" label={'Add card'} style={{ width: '100%', backgroundColor: '#F5F6FA', color: '#15223C' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
                <span className='cardTitle'>Quick Transfer</span>
                <div>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <Card>
                    <TextField fullWidth id="outlined-basic" label="Card Number" variant="outlined" />
                </Card>
                <Box display="flex" justifyContent="space-between">
                    <CommonButton
                        className={'buttonName'}
                        variant="outlined"
                        label={'Send money'}
                        style={{ backgroundColor: '#00B3FF', color: '#FFFFFF', flex: 1, marginRight: '8px' }}
                    />
                    <CommonButton
                        className={'buttonName'}
                        variant="outlined"
                        label={'Save as Draft'}
                        style={{ backgroundColor: '#F5F6FA', color: '#15223C', flex: 1, marginLeft: '8px' }}
                    />
                </Box>
            </div>
        </React.Fragment>
    )
}

export default PaymentPage
