import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/DashBoard";
import { Reports, SalesReport, PurchaseReport, StockSummary } from "./pages/Reports";
import Purchase , {PurchaseReturn} from "./pages/Purchase";
import Header from "./pages/Header";
import Sales, { SalesReturn } from "./pages/Sales";
import Items, { AddItems, CategoryList, ItemList } from "./pages/Items";
import { GST1, GST2, GST3 } from "./pages/GSTReport";
import Account, { AccountList, AddAccount } from "./pages/Account";
import Quotation, { NewQuotation, QuotationList } from "./pages/Quotation";
import Contact, { AddCustomer, AddSupplier, CustomerList, SupplierList } from "./pages/Contact";



function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/DashBoard" exact component={Overview} />
        <Route path="/Sales" exact component={Sales} />
        <Route path="/Sales/SalesReturn" exact component={SalesReturn} />
        <Route path="/Purchase" exact component={Purchase} />
        <Route path="/Purchase/PurchaseReturn" exact component={PurchaseReturn} />
        <Route path="/Items" exact component={Items} />
        <Route path="/Items/AddItem" exact component={AddItems} />
        <Route path="/Items/ItemList" exact component={ItemList} />
        <Route path="/Items/CategoryList" exact component={CategoryList} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/SalesReport" exact component={SalesReport}/>
        <Route path="/reports/PurchaseReport" exact component={PurchaseReport} />
        <Route path="/reports/StockSummary" exact component={StockSummary} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/GST1" exact component={GST1} />
        <Route path="/reports/GST2" exact component={GST2} />
        <Route path="/reports/GST3" exact component={GST3} />
        <Route path="/Account" exact component={Account} />
        <Route path="/Account/AddAccount" exact component={AddAccount} />
        <Route path="/Account/AccountList" exact component={AccountList} />
        <Route path="/Quotation" exact component={Quotation} />
        <Route path="/Quotation/NewQuotation" exact component={NewQuotation} />
        <Route path="/Quotation/QuotationList" exact component={QuotationList} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Contact/AddCustomer" exact component={AddCustomer} />
        <Route path="/Contact/CustomerList" exact component={CustomerList} />
        <Route path="/Contact/AddSupplier" exact component={AddSupplier} />
        <Route path="/Contact/SupplierList" exact component={SupplierList} />
        <Route path="/Header" exact Component={Header}/>
      </Routes>
      <Header/>
    </Router>
  );
}

export default App;
