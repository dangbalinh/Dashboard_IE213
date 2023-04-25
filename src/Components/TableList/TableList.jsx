/* eslint-disable no-underscore-dangle */
import React from 'react';
import './tableList.scss';

// mui table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import book1 from '../../Images/book1.jpg';
import book2 from '../../Images/book2.jpg';
import book3 from '../../Images/book3.jpg';
import book4 from '../../Images/book4.jpg';
import book5 from '../../Images/book5.jpg';
import macbook from '../../Images/macbook_pro.jpg';
function TableList() {
    const data = [
        {
            _id: 1,
            product: 'IPhone 15',
            image: macbook,
            customer: 'Nguyen Thanh Trung',
            date: '3 October, 2023',
            ammount: 1,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 2,
            product: 'IPhone 15',
            image: macbook,
            customer: 'Nguyen Thanh Trung',
            date: '23 April, 2023',
            ammount: 1,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
        {
            _id: 3,
            product: 'IPhone 15',
            image: macbook,
            customer: 'Nguyen Thanh Trung',
            date: '10 October, 2023',
            ammount: 1,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 4,
            product: 'IPhone 15',
            image: macbook,
            customer: 'Nguyen Thanh Trung',
            date: '3 March, 2023',
            ammount: 1,
            method: 'Cash On Delivery',
            status: 'Approved',
        },
        {
            _id: 5,
            product: 'IPhone 15',
            image: macbook,
            customer: 'Nguyen Thanh Trung',
            date: '20 November, 2023',
            ammount: 1,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 6,
            product: 'IPhone 15',
            image: macbook,
            customer: 'Nguyen Thanh Trung',
            date: '12 June, 2023',
            ammount: 1,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
    ];

    return (
        <TableContainer component={Paper} className="table_list">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table_cell">Id</TableCell>
                        <TableCell className="table_cell">Product</TableCell>
                        <TableCell className="table_cell">Customer</TableCell>
                        <TableCell className="table_cell">Ammount</TableCell>
                        <TableCell className="table_cell">Date</TableCell>
                        <TableCell className="table_cell">Payment Status</TableCell>
                        <TableCell className="table_cell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row" className="table_cell">
                                <div className="product_idd">
                                    <img src={row.image} alt="product" className="product_img" />
                                    {row._id}
                                </div>
                            </TableCell>
                            <TableCell className="table_cell">{row.product}</TableCell>
                            <TableCell className="table_cell">{row.customer}</TableCell>
                            <TableCell className="table_cell">{row.ammount}</TableCell>
                            <TableCell className="table_cell">{row.date}</TableCell>
                            <TableCell className="table_cell">{row.method}</TableCell>
                            <TableCell className="table_cell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableList;
