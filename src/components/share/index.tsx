/**
 * @File 页面组件 - 分享
 * @Author author@static.vip
 * @Date 2023/2/24 19:26:01
 */
import React, { useCallback, useState } from 'react';
import { Link } from "react-router-dom";
import { Popover } from 'react-tiny-popover'
import toast from 'react-hot-toast';
import { QRCodeSVG } from 'qrcode.react';
import copy from 'copy-to-clipboard';
import { LinkOutlined, QrcodeOutlined, ShareAltOutlined, WechatOutlined } from "@ant-design/icons";

interface IShare {
  /* 分享 URL */
  shareUrl?: string;
}

const Share: React.FC<IShare> = ({ shareUrl }) => {
  const [visible, setVisible] = useState<boolean>(false)

  // 分享链接
  const onCopy = useCallback(() => {
    copy(`我发现了一篇好文章，分享给你：${shareUrl}`);
    toast.success('文章分享链接复制成功');
  }, [shareUrl]);

  // 扫描二维码
  const LayerComponent = (
    <div style={{ width: 100, height: 120, backgroundColor: '#fff', borderRadius: 10 }}
         className="d-flex align-items-center justify-content-center flex-column mb-10">
      <span className="mb-10">微信扫一扫</span>
      <QRCodeSVG value={shareUrl ?? ''} width={70} height={70} />
    </div>
  );

  return (
    <ul className="social-share">
      <li><Link to=""><ShareAltOutlined /></Link></li>
      <li>
        <Popover
          isOpen={visible}
          positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
          content={LayerComponent}
        >
          <Link
            to=""
            className="pt"
            title="二维码分享"
            onClick={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            <QrcodeOutlined />
          </Link>
        </Popover>
      </li>
      <li>
        <Link
          to=""
          onClick={onCopy}
          className="tw"
          title="分享链接"
        >
          <LinkOutlined />
        </Link>
      </li>
    </ul>
  );
};

export default Share;
