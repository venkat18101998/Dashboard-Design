
import { Container, Grid } from '@mui/material';
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CommonButton from '../common/card/button/CommonButton';

const GraphFlow = () => {


    const initialData = [
        { name: 'Jan', uv: 1000 },
        { name: 'Feb', uv: 3000 },
        { name: 'Mar', uv: 2000 },
        { name: 'Apr', uv: 2780 },
        { name: 'May', uv: 1890 },
        { name: 'Jun', uv: 2390 },
    ];

    const fullData = [
        ...initialData,
        { name: 'Jul', uv: 3490 },
        { name: 'Aug', uv: 2000 },
        { name: 'Sep', uv: 2780 },
        { name: 'Oct', uv: 1890 },
        { name: 'Nov', uv: 2390 },
        { name: 'Dec', uv: 3490 },
    ];

    const [showAllMonths, setShowAllMonths] = useState(false);
    const [data, setData] = useState(initialData);

    const handleButtonClick = () => {
        setShowAllMonths(!showAllMonths);
        setData(showAllMonths ? initialData : fullData);
    };
    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={2} alignItems="center" mt={1} mb={2}>
                    <Grid item xs={5}>
                        <span className='cardTitle'>Money Flow</span>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }} >
                        <CommonButton  style={{ color: '#AFAFAF' }} className={'buttonName'} variant="outlined" label={'Money Flow'} />
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: 'right', whiteSpace: 'nowrap' }} onClick={handleButtonClick}>
                        <CommonButton style={{ color: '#AFAFAF' }} variant="outlined" label={showAllMonths ? '6 Months' : '12 Months'} />
                    </Grid>
                </Grid>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fontSize: '16px', fill: '#15223C', fontWeight: '400' }} />
                        <YAxis tick={{ fontSize: '16px', fill: '#15223C', fontWeight: '400' }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </Container>
        </React.Fragment>
    )
}

export default GraphFlow
