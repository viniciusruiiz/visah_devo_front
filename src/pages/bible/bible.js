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
    createData(6, "Josué", 24, 959),
    createData(7, "Juízes", 21, 959),
    createData(8, "Rute", 4, 959),
    createData(9, "1 Samuel", 31, 959),
    createData(10, "2 Samuel", 24, 959),
    createData(11, "1 Reis", 22, 959),
    createData(12, "2 Reis", 25, 959),
    createData(13, "1 Crônicas", 29, 959),
    createData(14, "2 Crônicas", 36, 959),
    createData(15, "Esdras", 10, 959),
    createData(16, "Neemias", 13, 959),
    createData(17, "Ester", 10, 959),
    createData(18, "Jó", 42, 959),
    createData(19, "Salmos", 150, 959),
    createData(20, "Salmos", 150, 959),
    createData(21, "Salmos", 150, 959),
    createData(22, "Salmos", 150, 959),
    createData(23, "Salmos", 150, 959),
    createData(24, "Salmos", 150, 959),
    createData(25, "Salmos", 150, 959),
    createData(26, "Salmos", 150, 959),
    createData(27, "Salmos", 150, 959),
    createData(28, "Salmos", 150, 959),
    createData(29, "Salmos", 150, 959),
    createData(30, "Salmos", 150, 959),
    createData(31, "Salmos", 150, 959),
    createData(32, "Salmos", 150, 959),
    createData(33, "Salmos", 150, 959),
    createData(34, "Salmos", 150, 959),
    createData(35, "Salmos", 150, 959),
    createData(36, "Salmos", 150, 959),
    createData(37, "Salmos", 150, 959),
    createData(38, "Salmos", 150, 959),

];

// Salmos	150
// Provérbios	31
// Eclesiastes	12
// Cânticos	8
// Isaías	66
// Jeremias	52
// Lamentações	5
// Ezequiel	48
// Daniel	12
// Oséias	14
// Joel	3
// Amós	9
// Obadias	1
// Jonas	4
// Miquéias	7
// Naum	3
// Habacuque	3
// Sofonias	3
// Ageu	2
// Zacarias	14
// Malaquias	4
// Mateus	28
// Marcos	16
// Lucas	24
// João	21
// Atos dos Apóstolos	28
// Romanos	16
// 1 Coríntios	16
// 2 Coríntios	13
// Gálatas	6
// Efésios	6
// Filipenses	4
// Colossenses	4
// 1 Tessalonicenses	5
// 2 Tessalonicenses	3
// 1 Timóteo	6
// 2 Timóteo	4
// Tito	3
// Filemom	1
// Hebreus	13
// Tiago	5
// 1 Pedro	5
// 2 Pedro	3
// 1 João	5
// 2 João	1
// 3 João	1
// Judas	1
// Apocalipse	22

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