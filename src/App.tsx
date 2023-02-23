import { useCallback, useEffect, useState } from 'react';
import Layout from './components/layout';
import Header from './components/header';
import Search from './components/search';
import SideBar from './components/sidebar';
import Footer from "./components/footer";

function App() {
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [sideBarModal, setSideBarModal] = useState<boolean>(false);

  /* 开关模态窗 */
  const onToggleSearch = useCallback(() => setSearchModal(!searchModal), [searchModal]);

  /* 开关侧边栏 */
  const onToggleSideBar = useCallback(() => setSideBarModal(!sideBarModal), [sideBarModal]);

  return (
    <>
      <Layout>
        {/* 侧边栏 SideBar */}
        <SideBar visible={sideBarModal} onToggleSideBar={onToggleSideBar} />
        {/* 导航栏 Header */}
        <Header onToggleSearch={onToggleSearch} onToggleSideBar={onToggleSideBar} />
        {/* 搜索框 Search */}
        <Search visible={searchModal} />

        {/* 页脚 Footer */}
        <Footer />
      </Layout>
    </>
  )
}

export default App
