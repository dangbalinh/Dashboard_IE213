import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../Components/DataTable/DataTable';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableList from '../../Components/TableList/TableList';
import './userlists.scss';

function  UserLists({ type }) {
    //
    return (
        <div className="list_page">
            <Sidebar />

            <div className="list_page_main">
                <Navbar />

                
                <div className="data_table">
                    <div className="btnn">

                        <Link
                            to={`/${
                                type === 'product' ? 'products' : 'customer' ? 'customers' : 'blogs'
                            }/addnew`}
                            style={{ textDecoration: 'none' }}
                        >
                            <button type="button">Add New {type}</button>
                        </Link>
                    </div>

                    {/* select the content of the table  */}
                    {type === 'customer' ? <DataTable /> : <TableList type='product'/>}
                </div>
            </div>
        </div>
    );
}

export default UserLists;
