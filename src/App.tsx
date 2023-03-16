/**
 * @File 全局入口
 * @Author author@static.vip
 * @Date 2023/2/23 15:49:47
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useScrollTo } from 'use-scroll-to-2';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import BackToTop from './components/backToTop';
import { get } from './utils/request';
import { IAuthor } from './interfaces/author';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Article from './pages/article';
import Sub from './pages/sub';
import SearchPage from './pages/search';
import Contact from './pages/contact';

function App() {
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [author, setAuthor] = useState<IAuthor | null>(null);
  const [ref, scroll] = useScrollTo({
    offsetTop: 100,
  });
  /* 开关模态窗 */
  const onToggleSearch = useCallback(() => setSearchModal(!searchModal), [searchModal]);

  const onCloseSearch  = useCallback(() => setSearchModal(false), []);

  const fetchAuthor = useCallback(async () => {
    const author = await get('author') as IAuthor;
    setAuthor(author);
  }, []);

  useEffect(() => {
    fetchAuthor().then(() => console.info('author fetched'));
  }, []);

  return (
    <div ref={ref as any}>
      <Layout>
        {/* 导航栏 Header */}
        <Header onToggleSearch={onToggleSearch} />
        {/* 搜索框 Search */}
        <Search visible={searchModal} onClose={onCloseSearch} />

        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="/contact" element={<Contact author={author} />} />
          <Route path="/article/:id/:link" element={<Article author={author} scroll2Top={scroll} />} />
          <Route path="/search/:key" element={<SearchPage author={author} scroll2Top={scroll} />} />
          <Route path="/tag/:tagId" element={<Sub author={author} scroll2Top={scroll} />} />
          <Route path="/:menu" element={<Sub author={author} scroll2Top={scroll} />} />
          <Route path="/:menu/:subMenu" element={<Sub author={author} scroll2Top={scroll} />} />
          <Route path="/:menu/:subMenu/:grandSubMenu" element={<Sub author={author} scroll2Top={scroll} />} />
          <Route path="/" element={<Home author={author} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* 页脚 Footer */}
        <Footer />
        <Toaster />
        <BackToTop />
      </Layout>
    </div>
  )
}

export default App
