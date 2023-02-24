/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 20:27:38
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IAuthor } from '../../interfaces/author';
import { get } from "../../utils/request";
import { IFooterResponse } from '../../interfaces/footer';

interface IFooter {
  /* 作者信息 */
  author: IAuthor | null;
}

const Footer: React.FC<IFooter> = (props) => {
  const { author } = props;
  const [footer, setFooter] = useState<IFooterResponse | null>(null);

  const fetchFooter = useCallback(async () => {
    const footer = await get('footer') as IFooterResponse;
    setFooter(footer);
  }, []);

  useEffect(() => {
    fetchFooter().then(() => console.info('footer fetched'));
  }, []);


  return (
    <>
      <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
          {/*<div className="row">*/}
          {/*  <div className="col-lg-3 col-md-6">*/}
          {/*    <div className="sidebar-widget wow fadeInUp animated mb-30">*/}
          {/*      <div className="widget-header-2 position-relative mb-20">*/}
          {/*        <h5 className="mt-5 mb-20">关于作者</h5>*/}
          {/*      </div>*/}
          {/*      <div className="textwidget">*/}
          {/*        <p>{author?.description}</p>*/}
          {/*        <p>*/}
          {/*          <strong className="color-black">地址</strong>*/}
          {/*          <br />*/}
          {/*          {author?.address?.map((item, index) => <span key={index}>{item}<br /></span>)}*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-lg-2 col-md-6">*/}
          {/*    <div*/}
          {/*      className="sidebar-widget widget_categories wow fadeInUp animated mb-20"*/}
          {/*      data-wow-delay="0.1s"*/}
          {/*    >*/}
          {/*      <div className="widget-header-2 position-relative mb-10">*/}
          {/*        <h5 className="mt-5 mb-10">快速导航</h5>*/}
          {/*      </div>*/}
          {/*      <ul className="font-small">*/}
          {/*        {*/}
          {/*          Array.isArray(footer?.links) ? footer?.links.map((link, index) => {*/}
          {/*            return (*/}
          {/*              <li className="cat-item cat-item-2" key={index}>*/}
          {/*                <Link to={link.link}>*/}
          {/*                  {link.label}*/}
          {/*                </Link>*/}
          {/*              </li>*/}
          {/*            )*/}
          {/*          }) : null*/}
          {/*        }*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-lg-3 col-md-6">*/}
          {/*    <div*/}
          {/*      className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-20"*/}
          {/*      data-wow-delay="0.2s"*/}
          {/*    >*/}
          {/*      <div className="widget-header-2 position-relative mb-10">*/}
          {/*        <h5 className="mt-5 mb-10">鸣谢清单</h5>*/}
          {/*      </div>*/}
          {/*      <div className="tagcloud mt-20">*/}
          {/*        {*/}
          {/*          Array.isArray(footer?.thanks) ? footer?.thanks.map((thank, index) => {*/}
          {/*            return <Link key={index} to={thank.link} className="tag-cloud-link">{thank.label}</Link>*/}
          {/*          }) : null*/}
          {/*        }*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-lg-4 col-md-6">*/}
          {/*    <div*/}
          {/*      className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"*/}
          {/*      data-wow-delay="0.3s"*/}
          {/*    >*/}
          {/*      <div className="widget-header-2 position-relative mb-30">*/}
          {/*        <h5 className="mt-5 mb-30">订阅动态</h5>*/}
          {/*      </div>*/}
          {/*      <div className="newsletter">*/}
          {/*        <p className="font-medium">*/}
          {/*          如果需要获取作者的最新动态，欢迎订阅。*/}
          {/*        </p>*/}
          {/*        <form className="input-group form-subcriber mt-30 d-flex">*/}
          {/*          <input*/}
          {/*            type="email"*/}
          {/*            className="form-control bg-white font-small"*/}
          {/*            placeholder="输入您的邮箱"*/}
          {/*          />*/}
          {/*          <button*/}
          {/*            className="btn bg-primary text-white"*/}
          {/*            type="submit"*/}
          {/*          >*/}
          {/*            订阅*/}
          {/*          </button>*/}
          {/*        </form>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="footer-copy-right pt-30 mt-5 wow fadeInUp animated">
            <p className="float-md-left font-small text-muted">
              © 2023, Static - 苏ICP备16022318号-13
            </p>
            <p className="float-md-right font-small text-muted">
              Design by Jonny | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
