/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const CompanyList = ({ companies, title }) => {
  return (
    <div className="companies-table">
      <h2>{title}</h2>
      <TableContainer component={Paper}>
        <Table
          className="table"
          aria-label="simple table"
          style={{ overflowX: "scroll" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Contact No.</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">PAN No.</TableCell>
              <TableCell align="right">VAT No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((companies) => (
              <TableRow key={companies.name}>
                <TableCell component="th" scope="row">
                  {companies.name}
                </TableCell>
                <TableCell align="right">{companies.address}</TableCell>
                <TableCell align="right">{companies.contact}</TableCell>
                <TableCell align="right">{companies.email}</TableCell>
                <TableCell align="right">{companies.pan}</TableCell>
                <TableCell align="right">{companies.vat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompanyList;
