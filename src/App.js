import React from "react";
import Detail from "./Detail"
import Weeks from "./Weeks"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components";

function App() {

return (
  <div className="App">
    <Container>
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/Weeks/:week" element={<Weeks />} /> 
      </Routes>
    </Container>
  </div>
  );
}

const Container = styled.div`
max-width: 360px;
min-height: 70vh;
background-color: #fff;
padding: 16px;
margin: 40px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;
export default App;