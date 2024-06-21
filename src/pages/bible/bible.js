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
    createData(20, "Provérbios", 31, 959),
    createData(21, "Eclesiastes", 12, 959),
    createData(22, "Cantares", 8, 959),
    createData(23, "Isaías", 66, 959),
    createData(24, "Jeremias", 52, 959),
    createData(25, "Lamentações", 5, 959),
    createData(26, "Ezequiel", 48, 959),
    createData(27, "Daniel", 12, 959),
    createData(28, "Oséias", 14, 959),
    createData(29, "Joel", 3, 959),
    createData(30, "Amós", 9, 959),
    createData(31, "Obadias", 1, 959),
    createData(32, "Jonas", 4, 959),
    createData(33, "Miqueias", 7, 959),
    createData(34, "Naum", 3, 959),
    createData(35, "Habacuque", 3, 959),
    createData(36, "Sofonias", 3, 959),
    createData(37, "Ageu", 2, 959),
    createData(38, "Zacarias", 14, 959),
    createData(39, "Malaquias", 4, 959),
    createData(40, "Mateus", 28, 959),
    createData(41, "Marcos", 16, 959),
    createData(42, "Lucas", 24, 959),
    createData(43, "João", 21, 959),
    createData(44, "Atos dos Apóstolos", 28, 959),
    createData(45, "Romanos", 16, 959),
    createData(46, "1 Coríntios", 16, 959),
    createData(47, "2 Coríntios", 13, 959),
    createData(48, "Gálatas", 6, 959),
    createData(49, "Efésios", 6, 959),
    createData(50, "Filipenses", 4, 959),
    createData(51, "Colossenses", 4, 959),
    createData(52, "1 Tessalonicenses", 5, 959),
    createData(53, "2 Tessalonicenses", 3, 959),
    createData(54, "1 Timóteo", 6, 959),
    createData(55, "2 Timóteo", 4, 959),
    createData(56, "Tito", 3, 959),
    createData(57, "Filemom", 1, 959),
    createData(58, "Hebreus", 13, 959),
    createData(59, "Tiago", 5, 959),
    createData(60, "1 Pedro", 5, 959),
    createData(61, "2 Pedro", 3, 959),
    createData(62, "1 João", 5, 959),
    createData(63, "2 João", 1, 959),
    createData(64, "3 João", 1, 959),
    createData(65, "Judas", 1, 959),
    createData(19, "Apocalipse", 22, 959),
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