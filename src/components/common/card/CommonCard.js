import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CommonButton from './button/CommonButton';
import images from '../../../resources/images';

const CommonCard = (props) => {
    const { text, rate, color, btn, percentage } = props

    return (
        <React.Fragment>
            <Card className={`custom-border color-${color}`} sx={{
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '80%',
                borderBottom: `1px solid #E6E9EE`,
                borderTop: `1px solid #E6E9EE`,
                borderRight: `1px solid #E6E9EE`
            }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography className='expensesText' component="div">
                                {text}
                            </Typography>
                            <Typography className='cardRate' style={{ flex: '1' }}>
                                ${rate}
                            </Typography>
                        </div>
                        {btn && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <CommonButton startIcon={<img src={images.card_arrow} />}
                                    alt="Arrow" label={`${percentage} %`} className='buttonLabel' variant="outlined" />
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default CommonCard
