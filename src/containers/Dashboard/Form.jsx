import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SecurityIcon from '@mui/icons-material/Security';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';



const theme = createTheme();

export default function SignUp() {
    const [crimeType, setCrimeType] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('Name'),
            crimeLocation: data.get('crimeLocation'),
            email: data.get('email'),
            password: data.get('password'),

        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <SecurityIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crime Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Abducted Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Crime Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={crimeType}
                                        label="Crime Type"
                                        onChange={setCrimeType}
                                    >
                                        <MenuItem value={'Mobile'}>Mobile</MenuItem>
                                        <MenuItem value={'Car'}>Car</MenuItem>
                                        <MenuItem value={'Bike'}>Bike</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="crime-location"
                                    name="crimeLocation"
                                    required
                                    fullWidth
                                    multiline={true}
                                    minRows={3}
                                    id="crimeLocation"
                                    label="Crime Location"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="moreDetail"
                                    name="moreDetail"
                                    fullWidth
                                    multiline={true}
                                    minRows={3}
                                    id="moreDetail"
                                    label="More Detail"
                                    autoFocus
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Upload
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}