import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, chapters, verses) {
    return { id, name, chapters, verses };
}

const books = [
    createData(1, "Gênesis", 50, 1533),
    createData(2, "Êxodo", 40, 1213),
    createData(3, "Levítico", 27, 859),
    createData(4, "Números", 36, 1288),
    createData(5, "Deuteronômio", 34, 959),
];

export default function Bible() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Número</TableCell>
                        <TableCell>Livro</TableCell>
                        <TableCell>Capítulos</TableCell>
                        <TableCell>Versículos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map(
                        (book) => <TableRow>
                            <TableCell>{book.id}</TableCell>
                            <TableCell>{book.name}</TableCell>
                            <TableCell>{book.chapters}</TableCell>
                            <TableCell>{book.verses}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}