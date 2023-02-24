/**
 * @File 首页 - 轮播组件
 * @Author author@static.vip
 * @Date 2023/2/24 14:13:50
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { get } from '../../utils/request';
import { IArticle } from '../../interfaces/article';
import { getArticleUrl } from "../../utils/url";

const VerticalCarousel: React.FC = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchTop = useCallback(async () => {
    const articles = await get('/article/top') as IArticle[];
    setArticles(articles);
  }, []);

  useEffect(() => {
    fetchTop().then(() => console.info('top fetched'));
  }, []);

  return (
    <>
      <div className="featured-slider-2">
        <div className="featured-slider-2-items" style={{ overflow: 'hidden' }}>
          <Slider asNavFor={nav2 as Slider} ref={(slider1) => setNav1(slider1)}>
            {articles.map((article, index) => (
              <div className="slider-single" key={index}>
                <div className="post-thumb position-relative">
                  <div
                    className="thumb-overlay position-relative"
                    style={{ backgroundImage: `url(${article.cover})` }}
                  >
                    <div className="post-content-overlay">
                      <div className="container">
                        <div className="entry-meta meta-0 font-small mb-20">
                          <Link to={`${article.category.link}`}>
                            <span className="post-cat text-info">{article.category.label}</span>
                          </Link>
                        </div>
                        <h1 className="post-title mb-20 font-weight-900 text-white">
                          <Link to={getArticleUrl(article.id)}>{article.title}</Link>
                        </h1>
                        <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                          <span className="post-on">{article.date}</span>
                          <span className="hit-count has-dot">{article.views} 阅读</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </Slider>
        </div>

        <div className="container position-relative">
          <div className="arrow-cover color-white" />
          <div className="featured-slider-2-nav-cover">
            <Slider
              asNavFor={nav1 as Slider}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              className="featured-slider-2-nav"
            >
              {articles.map((article, index) => (
                <div className="slider-post-thumb mr-15 mt-20 position-relative" key={index}>
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5">
                      <img className="border-radius-5" src={article.cover} alt="" />
                    </div>
                    <div className="post-content media-body text-white">
                      <h5 className="post-title mb-15 text-limit-2-row">{article.title}</h5>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on text-white">{article.date}</span>
                        <span className="post-by has-dot text-white">{article.views} 阅读</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalCarousel;
