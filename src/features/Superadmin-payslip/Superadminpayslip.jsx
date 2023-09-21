import React from "react";
import "./Superadminpayslip.css";
import PayslipHeader from "./PayslipHeader";
import PayslipList from "./PayslipList";

const Superadminpayslip = () => {
  return (
    <div className="Superadminpayslip">
      <PayslipHeader />
      <PayslipList />
    </div>
  );
};

export default Superadminpayslip;
