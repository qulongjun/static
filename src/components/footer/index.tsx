/**
 * @File 页面组件 - 页脚
 * @Author author@static.vip
 * @Date 2023/2/23 20:27:38
 */
import React from 'react';

const Footer: React.FC = () => (
    <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
            <div className="footer-copy-right pt-30 mt-5 wow fadeInUp animated">
                <p className="float-md-left font-small text-muted">
                    Copyright © 2021 - 2023 <a href="https://beian.miit.gov.cn">苏ICP备16022318号-13</a>
                </p>
                <p className="float-md-right font-small text-muted">Design by Static. - All rights reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;
