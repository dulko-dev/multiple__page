import React, { useState } from "react";
import UserNav from "./UserNav";
import Applications from "./Applications/Applications";


export default function User() {
  const [homePage] = useState("none");
  return (
    <div>
      <UserNav homePage={homePage} />
      <Applications />
    </div>
  );
}
