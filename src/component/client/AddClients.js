import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "../company/AddCompany.css";
import useFetch from "../useFetch";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AddClient = () => {
  const history = useHistory();
  const { data: companies, isPending, error } = useFetch(
    "http://localhost:8080/companies"
  );
  console.log(companies);
  const companyList =
    companies &&
    companies.map((item) => ({
      value: item.name,

      label: item.name,
    }));

  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      designation: "",
      contact: "",
      email: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:8080/clients", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ ...values, company: values.company.label }),
      }).then(() => {
        alert("Client Added");
        history.push("/clients");
      });
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      company: Yup.object().required("Required"),
      designation: Yup.string().required("Required!"),
      contact: Yup.number().required("Required!"),
      email: Yup.string().email("Invalid Email Format").required("Required!"),
    }),
  });
  if (isPending) {
    console.log("pending");
  }
  console.log("Done");
  if (error) {
    console.log(error);
  }

  //  option: {item.name}
  //  value: item.name;
  //  console.log(item);
  //  console.log(item.name);
  // return(
  //     <option key={i} value={item.name} label = {item.name}>

  //     </option>
  // )

  return (
    <div className="form-wrapper">
      <h1>Add a New Client</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Client Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="text-danger mt-1">{formik.errors.name}</p>
        )}

        <label htmlFor="company">Company</label>
        {companyList && (
          <Autocomplete
            id="company"
            name="company"
            value={formik.values.company}
            options={companyList}
            getOptionLabel={(option) => (option ? option.label : "")}
            style={{ width: 300 }}
            onChange={(e, value) => {
              {
                console.log(value);
              }
              formik.setFieldValue(
                "company",
                value !== null ? value : formik.initialValues.company
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Your Company"
                variant="outlined"
              />
            )}
          />
        )}

        {formik.errors.company && formik.touched.company && (
          <p className="text-danger mt-1">{formik.errors.company}</p>
        )}
        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formik.values.designation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.designation && formik.touched.designation && (
          <p className="text-danger mt-1">{formik.errors.designation}</p>
        )}
        {formik.errors.address && formik.touched.address && (
          <p className="text-danger mt-1">{formik.errors.address}</p>
        )}
        <label htmlFor="contact">Contact No.</label>
        <input
          type="number"
          id="contact"
          name="contact"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.contact && formik.touched.contact && (
          <p className="text-danger mt-1">{formik.errors.contact}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-danger mt-1">{formik.errors.email}</p>
        )}
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
  );
};

export default AddClient;
