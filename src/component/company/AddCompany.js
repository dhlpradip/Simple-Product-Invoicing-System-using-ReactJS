import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "./AddCompany.css";
// import { useQuery } from "@apollo/client";
// import { GET_DOGS } from "./company.grapql";

const AddCompany = () => {
  // const { data, error, loading } = useQuery(GET_DOGS, {
  //   variables: {
  //     breed: "nice"
  //   },
  // });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      contact: "",
      email: "",
      pan: "",
      vat: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:8080/companies", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        alert("Company Added");
        history.push("/clients");
      });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      contact: Yup.number().required("Required!"),
      email: Yup.string().email("Invalid Email Format").required("Required!"),
      pan: Yup.number().required("Required!"),
      vat: Yup.number().required("Required!"),
    }),
  });
  return (
    <div className="form-wrapper">
      <h1>Add a New Company</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Company Name</label>
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
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
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
        <label htmlFor="pan">Pan No:</label>
        <input
          type="number"
          id="pan"
          name="pan"
          value={formik.values.pan}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.pan && formik.touched.pan && (
          <p className="text-danger mt-1">{formik.errors.pan}</p>
        )}
        <label htmlFor="vat">Vat No.</label>
        <input
          type="number"
          id="vat"
          name="vat"
          value={formik.values.vat}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.vat && formik.touched.vat && (
          <p className="text-danger mt-1">{formik.errors.vat}</p>
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

export default AddCompany;
