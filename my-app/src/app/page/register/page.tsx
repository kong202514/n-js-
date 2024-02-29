import React from "react";
import "./a.css";
import Nav from "../../component/Nav";

export default function page() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      user name <input type="text" name="" id="" /> <br />
      password <input type="password" name="" id="" /> <br />
      confirm password <input type="password" name="" id="" /> <br />
      <div className="aa">
        <input type="button" value="register" />
        <span>
          <span></span>
        </span>
        <input type="button" value="clear" />
      </div>
    </div>
  );
}
