import React, { useState } from "react";
import UserNav from "./UserNav";
import Applications from "./Applications/Applications";
import Support from "../Utility/Support/Support";

export default function User() {
  const [homePage, setHomePage] = useState("none");
  return (
    <div>
      <UserNav homePage={homePage} />
      <Applications />
      <Support />
    </div>
  );
}
