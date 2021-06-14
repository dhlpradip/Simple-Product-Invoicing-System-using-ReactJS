import React, { useEffect } from "react";
import Company from "./company/Company";
import Client from "./client/Clients";
import Sidebar from "./sidebar/Sidebar";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
const ClientPage = () => {
  const cookies = new Cookies();
  const history = useHistory();

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      history.push("/login");
    }
  });
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ flex: "0.15" }}>
        <Sidebar />
      </nav>
      <main style={{ flex: "0.85" }}>
        <div className="mt-3 ml-2 mr-3">
          <Company />
          <div className="mt-3">
            <Client />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientPage;
