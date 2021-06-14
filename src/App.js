import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddCompany from "./component/company/AddCompany";
import ClientPage from "./component/ClientPage";
import Login from "./component/login/Login";
import AddClient from "./component/client/AddClients";
import InvoicePage from "./component/InvoicePage";
import AddInvoices from "./component/invoice/ItemAdder";
import Sidebar from "./component/sidebar/Sidebar";
import Demo from "./component/Demo";
import DetailsPage from "./component/invoice/DetailsPage";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/clients">
              <ClientPage />
            </Route>
            <Route exact path="/invoices/:id">
              <DetailsPage />
            </Route>
            <Route path="/invoices">
              <InvoicePage />
            </Route>
            <Route path="/addcompany">
              <AddCompany />
            </Route>
            <Route path="/addclient">
              <AddClient />
            </Route>
            <Route path="/addinvoices">
              <AddInvoices />
            </Route>
            <Route path="/side">
              <Sidebar />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
