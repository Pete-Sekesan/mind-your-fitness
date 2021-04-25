import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserLogin from "./user-login";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UserLogin />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
