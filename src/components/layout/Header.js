import React, { useState } from 'react'
import { AppBar, Container, Toolbar, Typography, Box, IconButton, MenuItem, Tooltip, Avatar, Grid, Button } from '@mui/material';
import headers from '../../shared/constant';
import images from '../../resources/images';
import CommonButton from '../common/card/button/CommonButton';


const navbarItem = [
    { name: headers.Overview, image: images.overview },
    { name: headers.Transaction, image: images.transaction },
    { name: headers.Invoice, image: images.invoice },
    { name: headers.Activity, image: images.active },
];
const Header = () => {

    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
        setIsToggleOn(prevState => !prevState);
    };


    return (
        <React.Fragment>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                            }}
                            className='logoHeading'
                        >
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <img src={images.logo_img} alt="Logo" />
                                </Grid>
                                <Grid item>
                                    <Typography className='logoHeading' variant="body1"> {headers.CompanyName}</Typography>
                                </Grid>
                            </Grid>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                            </IconButton>
                            {navbarItem.map((page, index) => (
                                <MenuItem key={index}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            <Button variant="outlined">
                                                <img src={page.image} alt={page.name} style={{ width: '24px', height: '24px' }} />
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Typography className='navHeading' variant="body1">{page.name}</Typography>
                                        </Grid>
                                    </Grid>
                                </MenuItem>
                            ))}
                        </Box>
                        <Typography
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                letterSpacing: '.3rem',
                            }}
                        >
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <img src={images.logo_img} alt="Logo" />
                                </Grid>
                                <Grid item>
                                    <Typography className='logoHeading' variant="body1"> {headers.CompanyName}</Typography>
                                </Grid>
                            </Grid>

                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {navbarItem.map((page, index) => (
                                <MenuItem key={index}>
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item>
                                            {index === 0 ? (
                                                <CommonButton startIcon={<img src={page.image}
                                                    alt={page.name} style={{ width: '24px', height: '24px', marginRight: '8px' }} />}
                                                    className={'buttonName'} variant="outlined" label={page.name}
                                                    style={{
                                                        background: '#E3F6FE',
                                                        color: '#00B3FF',
                                                        textTransform: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}

                                                />
                                            ) : (
                                                <>
                                                    <Grid container alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <img
                                                                src={page.image}
                                                                alt={page.name}
                                                                style={{ width: '24px', height: '24px' }}
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography className='navHeading' variant="body1">{page.name}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </Grid>
                                    </Grid>
                                </MenuItem>
                            ))}
                        </Box>

                        <div onClick={handleClick} className="ToggleSwitch">
                            <div className={isToggleOn ? 'knob active' : 'knob'} />
                        </div>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Profile">
                                <IconButton className="iconButton">
                                    <img
                                        src={images.bell}
                                        alt="Bell"
                                        style={{
                                            width: 29,
                                            height: 29,
                                            borderRadius: '50%',
                                            backgroundColor: '#F5F6FA',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Profile">
                                <IconButton className="iconButton">
                                    <img
                                        src={images.settings}
                                        alt="Settings"
                                        style={{
                                            width: 31,
                                            height: 31,
                                            borderRadius: '50%',
                                            backgroundColor: '#F5F6FA',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Profile">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Venkat" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
