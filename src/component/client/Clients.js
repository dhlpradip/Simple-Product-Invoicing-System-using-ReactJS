import React from "react";
import useFetch from "../useFetch";
import ClientList from "./ClientList";
import { useHistory } from "react-router-dom";
const Client = () => {
  const { data: clients, isPending, error } = useFetch(
    "http://localhost:8080/clients"
  );
  const history = useHistory();
  const addtoList = () => {
    history.push("/addclient");
  };
  return (
    <div>
      <button
        className="btn btn-dark mt-3 mb-2"
        style={{ float: "right" }}
        onClick={addtoList}
      >
        Add Client
      </button>
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {clients && <ClientList clients={clients} title="Clients" />}
    </div>
  );
};

export default Client;
