/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 19:26:01
 */
import React from 'react';
import { Link } from "react-router-dom";
import { LinkOutlined, QrcodeOutlined, ShareAltOutlined, WechatOutlined } from "@ant-design/icons";

interface IShare {
}

const Share: React.FC<IShare> = (props) => {

  return (
    <>
      <ul className="social-share">
        <li><Link to="#"><ShareAltOutlined /></Link></li>
        <li><Link to="#" className="wc" title="分享到微信" target="_blank"><WechatOutlined /></Link></li>
        <li><Link to="#" className="pt" target="_blank" title="二维码分享"><QrcodeOutlined /></Link></li>
        <li><Link to="#" className="tw" target="_blank" title="分享链接"><LinkOutlined /></Link></li>
      </ul>
    </>
  );
};

export default Share;
