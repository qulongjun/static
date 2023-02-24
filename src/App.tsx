import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout';
import Header from './components/header';
import Search from './components/search';
import SideBar from './components/sidebar';
import Footer from "./components/footer";
import { get } from "./utils/request";
import { IAuthor } from './interfaces/author';
import Home from './pages/home';
import NotFound from "./pages/notFound";

function App() {
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [sideBarModal, setSideBarModal] = useState<boolean>(false);
  const [author, setAuthor] = useState<IAuthor | null>(null);
  /* 开关模态窗 */
  const onToggleSearch = useCallback(() => setSearchModal(!searchModal), [searchModal]);

  /* 开关侧边栏 */
  const onToggleSideBar = useCallback(() => setSideBarModal(!sideBarModal), [sideBarModal]);

  const fetchAuthor = useCallback(async () => {
    const author = await get('author') as IAuthor;
    setAuthor(author);
  }, []);

  useEffect(() => {
    fetchAuthor().then(() => console.info('author fetched'));
  }, []);

  return (
    <>
      <Layout>
        {/* 侧边栏 SideBar */}
        <SideBar visible={sideBarModal} onToggleSideBar={onToggleSideBar} />
        {/* 导航栏 Header */}
        <Header onToggleSearch={onToggleSearch} onToggleSideBar={onToggleSideBar} />
        {/* 搜索框 Search */}
        <Search visible={searchModal} />

        <Routes>
          <Route path="/" element={<Home author={author} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* 页脚 Footer */}
        <Footer author={author} />
      </Layout>
    </>
  )
}

export default App
