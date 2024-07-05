import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/Login/Login";
import Home from "./page/Dashboard/DashBoard";
import Student from "./page/Student/Student";
import Layout from "./layout/Layout";
import Attendance from "./page/Attendance/Attendance";
import Course from "./page/Course/Course";
import New from "./components/Login/New";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new" element={<New />} />
  
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/students"
        element={
          <Layout>
            <Student />
          </Layout>
        }
      />
      <Route
        path="/attendance"
        element={
          <Layout>
            <Attendance />
          </Layout>
        }
      />
      <Route
        path="/course"
        element={
          <Layout>
            <Course />
          </Layout>
        }
      />
     
    </Routes>
  );
}

export default App;
