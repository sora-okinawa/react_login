import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from '../views/LoginPage'
import HomePage from '../views/pages/HomePage'
import { getSession, useAuthContext } from './AuthContext';

const CustomRouter = () => {
  // ①
  const {
    LoggedIn,
  } = useAuthContext()

  console.log(LoggedIn)
  // ②
  const PrivateRoute = ({ children }) => {
    if (!LoggedIn && !getSession().id) {
      return <Navigate to={"/login"} />
    } else {
      return children
    }
  }
  // ③
  const Login_check = ({ children }) => {
    if (getSession().id) {
      return <Navigate to={"/"} />
    } else {
      return children
    }
  }

  return (
    <>
      <Router>
          <Routes>
            {/* ④ */}
            <Route path="/login" element={<Login_check><LoginPage /></Login_check>} />
            <Route path="*" element={<>PAGE NOT FOUND 404</>} />
            {/* ⑤ */}
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          </Routes>
      </Router>
    </>
  )
}

export default CustomRouter
