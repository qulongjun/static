/**
 * @File 公共页 - 侧边栏
 * @Author author@static.vip
 * @Date 2023/2/28 16:25:20
 */
import React from 'react';
import { IAuthor } from '../../../interfaces/author';
import Author from '../author';
import Popular from '../popular';
import TagCloud from '../tagCloud';

interface ISide {
  author: IAuthor | null;
}

const Side: React.FC<ISide> = ({ author }) => (
  <div className="widget-area">
    <Author author={author} />
    <Popular />
    <TagCloud />
  </div>
);

export default Side;
