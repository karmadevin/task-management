import React from "react";
import "./SuperadminUser.css";
import UserHeader from "../SuperAdmin-User/userHeader";
import UserList from "../SuperAdmin-User/userList";

const SuperadminUser = () => {
  return (
    <div className="SuperadminUser">
      <UserHeader/>
      <UserList/>
    </div>
  );
};

export default SuperadminUser;
