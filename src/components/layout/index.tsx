/**
 * @File Layout 布局组件
 * @Author author@static.vip
 * @Date 2023/2/22 17:20:28
 */
import React from 'react';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {

  return <div>{children}</div>;
};

export default Layout;
