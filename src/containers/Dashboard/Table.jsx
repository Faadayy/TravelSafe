import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
// import { data } from './data';



export default function BasicTable({ Dataxs }) {

    function getSortedData() {
        return Dataxs.sort((a, b) => new Date(b.date) - new Date(a.date));

    }

    const styler = {
        headders: { flex: 1, color: '#F4EEE0', fontFamily: 'QuickSand', fontWeight: '600', fontSize: 16 },
        rowsstyle: { flex: 1, color: '#F4EEE0', fontFamily: 'QuickSand', fontWeight: '300', fontSize: 13 },

    }

    return (
        <TableContainer sx={{
            marginBottom: 10,
            maxWidth: 1000,
            backgroundColor: '#4F4557',
            borderRadius: 3
        }} component={Paper}>
            <Typography sx={{ marginTop: 5, marginBottom: 3, color: '#F4EEE0', fontFamily: 'QuickSand', fontWeight: '600', fontSize: 25 }} component="h1" variant="h5">
                Latest Reports
            </Typography>
            <Table sx={{ minWidth: 650, maxWidth: 1000 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={styler.headders} align="center">Name</TableCell>
                        <TableCell sx={styler.headders} align="center">Time</TableCell>
                        <TableCell sx={styler.headders} align="center">Date</TableCell>
                        <TableCell sx={styler.headders} align="center">Crime Type</TableCell>
                        <TableCell sx={styler.headders} align="center">More Detail</TableCell>
                        <TableCell sx={styler.headders} align="center">Crime Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ paddingLeft: 5, paddingRight: 5 }}>
                    {getSortedData().map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={styler.rowsstyle} aria-multiline={true} align="center">{row.name} </TableCell>
                            <TableCell sx={styler.rowsstyle} aria-multiline={true} align="center">{row.time}</TableCell>
                            <TableCell sx={styler.rowsstyle} aria-multiline={true} align="center">{row.date}</TableCell>
                            <TableCell sx={styler.rowsstyle} aria-multiline={true} align="center">{row.crimeType}</TableCell>
                            <TableCell sx={styler.rowsstyle} aria-multiline={true} align="center">{row.moreDetail}</TableCell>
                            <TableCell sx={styler.rowsstyle} aria-multiline={true} align="center">{row.crimeLocation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
