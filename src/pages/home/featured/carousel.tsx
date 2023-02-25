/**
 * @File 首页 - 精选主题 - 轮播图
 * @Author author@static.vip
 * @Date 2023/2/24 15:40:21
 */
import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {getArticleUrl, getCategoryUrl} from '../../../utils/url';
import { IArticle } from '../../../interfaces/article';

interface IPostCarousel {
  articles: IArticle[] | null;
}

const Carousel: React.FC<IPostCarousel> = (props) => {
  const { articles } = props;

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }), []);

  return (
    <div>
      <div
        className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover" />
        <Slider {...settings} className="slide-fade">
          {Array.isArray(articles) && articles.map((item, index) => (
            <div className="position-relative post-thumb" key={index}>
              <div
                className="thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: `url(${item.cover})` }}
              >
                <span className="top-left-icon bg-warning">
                  <i className="elegant-icon icon_star_alt" />
                </span>
                <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                  <div className="entry-meta meta-0 font-small mb-20">
                    <Link to={getCategoryUrl(item.category.link)}>
                      <span className="post-cat text-info">{item.category.label}</span>
                    </Link>
                  </div>
                  <h3 className="post-title font-weight-900 mb-20">
                    <Link to={getArticleUrl(item.id)}>{item.title}</Link>
                  </h3>
                  <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                    <span className="post-on">{item.date}</span>
                    <span className="time-reading has-dot">{item.likes} 赞</span>
                    <span className="hit-count has-dot">{item.views} 阅读</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
