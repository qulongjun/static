/**
 * @File 路由入口页
 * @Author author@static.vip
 * @Date 2023/2/23 11:56:02
 */
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from '../App';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Router;
