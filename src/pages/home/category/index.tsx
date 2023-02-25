/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/25 08:12:43
 */
import React, {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {get} from '../../../utils/request';
import Widget from '../../../components/widget';
import classNames from "classnames";
import {ICategory, ICategoryConfig} from "../../../interfaces/category";

const Category: React.FC = () => {
    const [category, setCategory] = useState<ICategory[]>([]);

    const fetchCategory = useCallback(async () => {
        const category = await get('category') as ICategoryConfig;
        setCategory(category.list);
    }, []);

    useEffect(() => {
        fetchCategory().then(() => console.info('category fetched'));
    }, [])


    return (
        <Widget header="主题分类" className={classNames('widget-latest-posts', 'mb-50', 'wow', 'fadeInUp', 'animated')}>
            <div className="post-block-list post-module-1">
                <ul className="list-post">
                    {
                        category.map((item )=>(
                            <li className="mb-30" key={item.id}>
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <Link to={item.link} className="color-white">
                                            <img src={item.cover} alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-15 text-limit-1-row font-medium">
                                            <Link to={item.link}>
                                                {item.label}
                                            </Link>
                                        </h6>
                                        <div className="post-excerpt font-small text-muted">
                                            <p className="text-limit-1-row mb-15">{item.desc}</p>
                                        </div>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on">
                                                {item.date}
                                            </span>
                                            <span className="post-by has-dot">
                                                {item.articleCount} 篇
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Widget>
    )
}

export default Category;