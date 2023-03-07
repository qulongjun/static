/**
 * @File 首页 - 文章分类
 * @Author author@static.vip
 * @Date 2023/2/25 08:12:43
 */
import React, {useCallback, useEffect, useState} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { get, post } from '../../../utils/request';
import {getCategoryUrl} from '../../../utils/url';
import Widget from '../../../components/widget';
import {ICategory, ICategoryConfig} from '../../../interfaces/category';

const Category: React.FC = () => {
    const [category, setCategory] = useState<ICategory[]>([]);

    const fetchCategory = useCallback(async () => {
        const category = await post('category') as ICategoryConfig;
        setCategory(category.list);
    }, []);

    useEffect(() => {
        fetchCategory().then(() => console.info('category fetched'));
    }, [])

    return (
        <Widget header="分类" className={classNames('widget_categories', 'mb-50', 'wow', 'fadeInUp', 'animated')}>
            <div className="widget_nav_menu">
                <ul>
                    {
                        Array.isArray(category) && category.map(item => (
                            <li className="cat-item cat-item-2" key={item.id}>
                                <Link to={getCategoryUrl(item.link)}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Widget>
    )
}

export default Category;
