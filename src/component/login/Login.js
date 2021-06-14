import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
const cookies = new Cookies();

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((response) => {
      cookies.set("TOKEN", response.token);
    });
}

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (token) {
      history.push("/clients");
    }
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      const token = loginUser(values).then(() => {
        history.push("/clients");
        console.log(token);
      });
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Username must be at least 4 characters long")
        .required("This Field Can't be empty!"),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters long")
        .required("This Field Can't be empty!"),
    }),
  });
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.username && formik.touched.username && (
          <p className="text-danger mt-1">{formik.errors.username}</p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.errors.password && formik.touched.password && (
          <p className="text-danger mt-1">{formik.errors.password}</p>
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

export default Login;
