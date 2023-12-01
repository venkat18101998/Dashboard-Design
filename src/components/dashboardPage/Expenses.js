import { Button, Container, Grid } from '@mui/material';
import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import CommonButton from '../common/card/button/CommonButton';

const data = [
    { name: 'Shopping', value: 400 },
    { name: 'Workspace', value: 300 },
    { name: 'Platform', value: 200 },
    { name: 'Entertainment', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseItem = ({ type, amount }) => {
    return (
        <Grid item xs={4}>
            <span className='expensesText'>{type}</span>
            <div className='amountValue'>{amount}</div>
        </Grid>
    );
};

const Expenses = () => {

    const expensesData = [
        { type: 'Daily', amount: '$457' },
        { type: 'Weekly', amount: '$457' },
        { type: 'Monthly', amount: '$457' }
    ];


    return (
        <React.Fragment>
            <Container>
                <Grid container alignItems="center" mt={2} mb={2}>
                    <Grid item xs={8}>
                        <span className='cardTitle'>All Expenses</span>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                        <CommonButton  style={{ color: '#AFAFAF' }} variant="outlined" label={'Months'} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {expensesData.map((expense, index) => (
                        <ExpenseItem key={index} type={expense.type} amount={expense.amount} />
                    ))}
                </Grid>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Legend align="right" verticalAlign="middle" layout="vertical" />
                        <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </Container>
        </React.Fragment>
    )
}

export default Expenses;
