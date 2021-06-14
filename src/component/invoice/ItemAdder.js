/* eslint-disable no-unused-vars */
import React from "react";
import { Checkbox, IconButton, TextField } from "@material-ui/core";
import { Field, Formik, FieldArray, ErrorMessage } from "formik";
import useFetch from "../useFetch";
import { generate } from "shortid";
import * as Yup from "yup";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router-dom";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ClearIcon from "@material-ui/icons/Clear";
import "../company/AddCompany.css";
import { is } from "date-fns/locale";

const validationSchema = Yup.object().shape({
  invnumber: Yup.number().required("Required!"),
  title: Yup.string().required("Required!"),
  vatable: Yup.boolean(),
  client: Yup.object().required("Required!"),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required!"),
      quantity: Yup.number().required("Required!").positive().integer(),
      rate: Yup.number().required("required!"),
    })
  ),
  //    .required("Required"),
  date: Yup.date().required("Required!"),
  duedate: Yup.date().required("Required!"),
});

const AddInvoices = () => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const { data: clients, isPending, error } = useFetch(
    "http://localhost:8080/clients"
  );
  console.log(clients);
  const clientList =
    clients &&
    clients.map((item) => ({
      value: item.name,

      label: item.name,
    }));

  return (
    <Formik
      initialValues={{
        invnumber: "",
        title: "",
        vatable: false,
        client: "",
        date: new Date(),
        duedate: new Date(),
        items: [
          {
            id: 0,
            name: "",
            quantity: "",
            rate: "",
          },
        ],
        totalamount: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        fetch("http://localhost:8080/invoices", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({ ...values, client: values.client.label }),
        }).then(() => {
          alert("Invoice Added");
          history.push("/invoices");
        });
      }}
      enableReinitialize
    >
      {({ values, handleSubmit, handleChange, handleBlur, setFieldValue }) => (
        <div className="form-wrapper">
          <h1>Add a new Invoice</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="invnumber">Invoice Number</label>
            <Field
              type="number"
              id="invnumber"
              name="invnumber"
              value={values.invnumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name={`invnumber`}
              component="div"
              className="text-danger mt-1"
            />
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name={`title`}
              component="div"
              className="text-danger mt-1"
            />
            <label htmlFor="vatable">Vatable</label>
            <Checkbox
              // inputProps={{ 'aria-label': 'primary checkbox' }}
              id="vatable"
              checked={values.vatable}
              onChange={() => {
                setFieldValue("vatable", !values.vatable);
                console.log(values.vatable);
              }}
            />
            <br />
            <label htmlFor="client">Client</label>
            {clientList && (
              <Autocomplete
                id="client"
                name="client"
                value={values.client}
                options={clientList}
                getOptionLabel={(option) => (option ? option.label : "")}
                style={{ width: 300 }}
                onChange={(e, value) => {
                  {
                    console.log(value);
                  }
                  setFieldValue(
                    "client",
                    value !== null ? value : values.client
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose Client Name"
                    variant="outlined"
                  />
                )}
              />
            )}
            <ErrorMessage
              name={`client`}
              component="div"
              className="text-danger mt-1"
            />
            <FieldArray name="items">
              {({ push, remove }) => {
                return (
                  <div>
                    {values.items.length > 0 &&
                      values.items.map((p, index) => {
                        return (
                          <div key={p.id}>
                            <label htmlFor={`items[${index}].name`}>
                              Item Name
                            </label>
                            <Field
                              id={`items[${index}].name`}
                              name={`items[${index}].name`}
                              type="text"
                            />
                            <ErrorMessage
                              name={`items[${index}].name`}
                              component="div"
                              className="text-danger mt-1"
                            />

                            <label htmlFor={`items[${index}].quantity`}>
                              Quantity
                            </label>
                            <Field
                              id={`items[${index}].quantity`}
                              name={`items[${index}].quantity`}
                              type="number"
                            />
                            <ErrorMessage
                              name={`items[${index}].quantity`}
                              component="div"
                              className="text-danger mt-1"
                            />

                            <label htmlFor={`items[${index}].rate`}>Rate</label>
                            <Field
                              id={`items[${index}].rate`}
                              name={`items[${index}].rate`}
                              type="input"
                            />
                            <ErrorMessage
                              name={`items[${index}].name`}
                              component="div"
                              className="text-danger mt-1"
                            />
                            <IconButton
                              onClick={() => remove(index)}
                              aria-label="remove"
                            >
                              <ClearIcon />
                            </IconButton>
                          </div>
                        );
                      })}
                    <IconButton
                      type="button"
                      aria-label="add"
                      onClick={() =>
                        push({
                          id: generate(),
                          name: "",
                          quantity: "",
                          rate: "",
                        })
                      }
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </div>
                );
              }}
            </FieldArray>
            <label htmlFor="date">Invoice Date</label> <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                id="date"
                label=""
                name="date"
                value={values.date}
                onChange={(val) => setFieldValue("date", val)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <br />
            <label htmlFor="duedate">Due Date</label> <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label=""
                id="duedate"
                name="duedate"
                value={values.duedate}
                onChange={(val) => setFieldValue("duedate", val)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <br />
            <div>
              <button
                type="submit"
                className="btn btn-dark"
                style={{ margin: "20px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AddInvoices;
