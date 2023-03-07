/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/28 15:17:33
 */
import React from 'react';
import ScrollToTop from 'react-scroll-up';

const BackToTop: React.FC = () => (
  <ScrollToTop showUnder={160} duration={1000}>
    <a id="scrollUp" style={{ display: "block" }}>
      <i className="elegant-icon arrow_up" />
    </a>
  </ScrollToTop>
);

export default BackToTop;
