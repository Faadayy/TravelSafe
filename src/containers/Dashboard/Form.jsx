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
import { Alert, AlertTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';



const theme = createTheme({
    typography: {
        fontFamily: [
            'QuickSand',
        ].join(','),
    },
});

export default function SignUp({ dataXS, setData }) {
    const [crimeType, setCrimeType] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [alert, setAlert] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('crimeLocation')
            && data.get('moreDetail')
            && data.get('name')
            && crimeType
            && date
            && time
        ) {
            console.log({ data: 'datatatattatatatatatatat' })
            const forbObj = {
                name: data.get('name'),
                crimeLocation: data.get('crimeLocation'),
                moreDetail: data.get('moreDetail'),
                crimeType: crimeType.target.value,
                date: dayjs(date).format('DD/MM/YYYY'),
                time: dayjs(time).format('HH:mm')
            }

            setData([...dataXS, forbObj]);
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 10000);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 5,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <SecurityIcon />
                    </Avatar>
                    <Typography component="h1" sx={{
                        fontFamily: 'QuickSand', fontWeight: '600', fontSize: 30
                    }} variant="h5">
                        Crime Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Abducted Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="crime-location"
                                    name="crimeLocation"
                                    required
                                    fullWidth
                                    multiline={true}
                                    minRows={2}
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
                                    minRows={2}
                                    id="moreDetail"
                                    label="More Detail"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Crime Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Crime Type"
                                        onChange={setCrimeType}
                                    >
                                        <MenuItem value={'Mobile'}>Mobile</MenuItem>
                                        <MenuItem value={'Car'}>Car</MenuItem>
                                        <MenuItem value={'Bike'}>Bike</MenuItem>
                                    </Select>
                                    <div style={{ marginTop: '1rem' }} />
                                    <DatePicker
                                        label={'Crime Date'}
                                        value={date}
                                        onChange={(newValue) => setDate(newValue)}
                                    />
                                    <div style={{ marginTop: '1rem' }} />
                                    <TimePicker
                                        label={'Crime Time'}
                                        value={time}
                                        onChange={(newValue) => setTime(newValue)}
                                    />
                                </FormControl>
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
                        {alert && <>
                            <Alert severity="warning">
                                <AlertTitle>Warning</AlertTitle>
                                Please Fill all the fields. — <strong>Recheck all the fields</strong>
                            </Alert>
                        </>
                        }
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}