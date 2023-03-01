/**
 * @File 首页 - 标签云
 * @Author author@static.vip
 * @Date 2023/2/25 08:12:43
 */
import React, {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {get} from '../../../utils/request';
import Widget from '../../../components/widget';
import classNames from "classnames";
import {ITag, ITagConfig} from "../../../interfaces/tag";
import {getTagUrl} from "../../../utils/url";

const TagCloud: React.FC = () => {
    const [tag, setTag] = useState<ITag[]>([]);

    const fetchTag = useCallback(async () => {
        const tag = await get('tag') as ITagConfig;
        setTag(tag.list);
    }, []);

    useEffect(() => {
        fetchTag().then(() => console.info('tag fetched'));
    }, [])


    return (
        <Widget header="标签云" className={classNames('widget_tagcloud', 'mb-10', 'wow', 'fadeInUp', 'animated')}>
            <div className="tagcloud mt-10">
                {tag.map(item => <Link to={getTagUrl(item.link)} key={item.id} className="tag-cloud-link">{item.label}</Link>)}
            </div>
        </Widget>
    )
}

export default TagCloud;