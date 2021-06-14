import Sidebar from "./sidebar/Sidebar";
import React, { useEffect } from "react";

import Invoice from "./invoice/Invoices";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
const InvoicePage = () => {
  const cookies = new Cookies();
  const history = useHistory();

  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      history.push("/login");
    }
  });
  return (
    <div style={{ display: "flex" }} className="content">
      <nav style={{ flex: "0.15" }}>
        <Sidebar />
      </nav>

      <main style={{ flex: "0.85" }}>
        <div className="mt-3 ml-2 mr-3">
          <Invoice />
        </div>
      </main>
    </div>
  );
};

export default InvoicePage;
