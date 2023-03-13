/**
 * @File 框架入口
 * @Author author@static.vip
 * @Date 2023/2/23 15:49:47
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/han.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Router />)
