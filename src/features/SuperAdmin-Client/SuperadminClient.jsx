import React from "react";
import "./SuperadminClient.css";
import UserHeader from "../SuperAdmin-User/userHeader";
import UserList from "../SuperAdmin-User/userList";
import ClientHeader from "./clientHeader";
import ClientList from "./clientList";

const SuperadminClient = () => {
  return (
    <div className="SuperadminUser">
      <ClientHeader/>
      <ClientList />
    </div>
  );
};

export default SuperadminClient;
