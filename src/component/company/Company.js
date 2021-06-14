import React from "react";
import useFetch from "../useFetch";
import CompanyList from "./CompanyList";
import { useHistory } from "react-router-dom";
const Company = () => {
  const { data: companies, isPending, error } = useFetch(
    "http://localhost:8080/companies"
  );
  const history = useHistory();
  const addtoList = () => {
    history.push("/addcompany");
  };
  return (
    <div className="company">
      <button
        className="btn btn-dark mt-3 mb-2"
        style={{ float: "right" }}
        onClick={addtoList}
      >
        Add Company
      </button>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {companies && <CompanyList companies={companies} title="Companies" />}
    </div>
  );
};

export default Company;
