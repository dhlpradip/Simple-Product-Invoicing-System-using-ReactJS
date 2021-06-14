import React from "react";
import useFetch from "../useFetch";
import InvoiceList from "./InvoiceList";
import { useHistory } from "react-router-dom";
const Invoice = () => {
  const { data: invoices, isPending, error } = useFetch(
    "http://localhost:8080/invoices"
  );
  const history = useHistory();
  const addtoList = () => {
    history.push("/addinvoices");
  };
  return (
    <div>
      <button
        className="btn btn-dark mt-3 mb-2"
        style={{ float: "right" }}
        onClick={addtoList}
      >
        Add Invoice
      </button>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {invoices && <InvoiceList invoices={invoices} title="Invoices" />}
    </div>
  );
};

export default Invoice;
