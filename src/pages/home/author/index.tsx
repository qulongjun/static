/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 16:58:07
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {GithubOutlined, ZhihuOutlined} from "@ant-design/icons";
import {IAuthor} from '../../../interfaces/author';
import Widget from "../../../components/widget";
import classNames from "classnames";

interface Props {
    author: IAuthor | null;
}

const Author: React.FC<Props> = (props) => {
    const {author} = props;

    return (
        <Widget
            className={classNames('widget-about', 'mb-50', 'pt-30', 'pr-30', 'pb-30', 'pl-30', 'bg-white border-radius-5', 'has-border', 'wow', 'fadeInUp', 'animated')}>
            <>
                <img className="about-author-img mb-25" src={author?.avatar} alt=""/>
                <h5 className="mb-20">{author?.name}</h5>
                <p className="font-medium text-muted">{author?.description}</p>
                <strong>关注我: &nbsp;</strong>
                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                    <li className="list-inline-item">
                        <Link to="/#" target="_blank" className="github" title="关注 Github"><GithubOutlined/></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/#" target="_blank" className="zh" title="关注 知乎专栏"><ZhihuOutlined/></Link>
                    </li>
                </ul>
            </>
        </Widget>
    )
};

export default Author;
