import React, { createContext } from "react";
import UserNav from "./UserNav";
import Applications from "./Applications/Applications";

export default function User() {

  return (
    <div>
      <UserNav />
      <Applications />
    </div>
  );
}
