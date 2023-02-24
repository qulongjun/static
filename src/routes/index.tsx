/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 11:56:02
 */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Router;
