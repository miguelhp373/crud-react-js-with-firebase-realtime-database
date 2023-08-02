
//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/homePage";

const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;