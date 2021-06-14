import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const ClientList = ({ clients, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Contact No.</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((clients) => (
              <TableRow key={clients.name}>
                <TableCell component="th" scope="row">
                  {clients.name}
                </TableCell>
                <TableCell align="right">{clients.company}</TableCell>
                <TableCell align="right">{clients.designation}</TableCell>
                <TableCell align="right">{clients.contact}</TableCell>
                <TableCell align="right">{clients.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClientList;
