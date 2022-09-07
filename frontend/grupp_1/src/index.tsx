import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Landing from "./components/pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Booking } from "./components/pages/Booking";
import { Contact } from "./components/pages/Contact";
import Login from "./components/pages/Login";
import { NotFound } from "./components/pages/NotFound";
import { PersonalPage } from "./components/pages/PersonalPage";
import { PersonalsingleBooking } from "./components/pages/PersonalSingleBooking";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/PersonalPage" element={<PersonalPage />} />
          <Route
            path="/booking/:id"
            element={<PersonalsingleBooking />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
