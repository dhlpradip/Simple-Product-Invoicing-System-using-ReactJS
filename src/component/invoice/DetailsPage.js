import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import useFetch from "../useFetch";
import "./detailspage.css";

const DetailsPage = () => {
  const { id } = useParams();
  const { data: invoice, error, isPending } = useFetch(
    "http://localhost:8080/invoices/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8080/invoices/" + invoice.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/invoices");
    });
  };
  let total = 0;
  invoice && invoice.items.map((item) => (total += item.quantity * item.rate));

  return (
    <div className="whole-page">
      <nav className="sidebar">
        <Sidebar />
      </nav>
      <main className="wrapper">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {invoice && (
          <div className="wrapper">
            <h2 className="header">{invoice.title}</h2>
            <hr />
            <div className="info-wrapper">
              <div className="company-info">
                XYZ Company pvt. Ltd <br />
                Dummy Address, <br />
                Dummy Location <br />
                987456321
              </div>
              <div className="invoice-info">
                Invoice Number: {invoice.invnumber} <br />
                Date: {invoice.date} <br />
                Due Date: {invoice.duedate} <br />
                {invoice.vatable && <div>Vatable</div>}
              </div>
            </div>
            <br />
            <div className="client">
              <h4>Issued to</h4> <p>{invoice.client}</p>
            </div>
            <br />
            <div className="header">
              <h4>Items</h4>
            </div>
            <TableContainer component={Paper}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Rate</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                {invoice.items.map((item) => (
                  <TableBody key={item.id}>
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row" aligh="left">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">{item.rate}</TableCell>
                      <TableCell align="right">
                        {item.quantity * item.rate}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>

            <div className="grand-total">Grand Total: {total}</div>
            <br />
            <div className="comment-box">
              <h5>Comments</h5>
              <ul>
                <li>Date is in format mm/dd/yyyy</li>
                <li>Payment must be done within 30 days of Invoice Date.</li>
              </ul>
            </div>
            <div className="button-div">
              <button
                type="button"
                className="btn btn-dark "
                style={{ margin: "20px" }}
                onClick={handleClick}
              >
                Delete
              </button>
              <button
                className="btn btn-dark "
                style={{ margin: "20px" }}
                onClick={() => {
                  history.push("/invoices");
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DetailsPage;
