/* eslint-disable react/prop-types */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
const InvoiceList = ({ invoices, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Invoice Number</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Vatable</TableCell>
              <TableCell align="right">Client</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Due Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoices) => (
              <TableRow key={invoices.invnumber}>
                <TableCell component="th" scope="row" aligh="left">
                  {invoices.invnumber}
                </TableCell>
                <div key={invoices.invnumber}>
                  <div>
                    <Link to={`invoices/${invoices.id}`}>
                      <TableCell align="right">{invoices.title}</TableCell>
                    </Link>
                  </div>
                </div>
                <TableCell align="right">{String(invoices.vatable)}</TableCell>
                <TableCell align="right">{invoices.client}</TableCell>
                <TableCell align="right">{invoices.date}</TableCell>
                <TableCell align="right">{invoices.duedate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvoiceList;
