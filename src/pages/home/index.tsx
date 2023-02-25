/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 11:29:48
 */
import React from 'react';
import Featured from "./featured";
import VerticalCarousel from "./verticalCarousel";
import Author from './author';
import { IAuthor } from "../../interfaces/author";
import Latest from "./latest";
import Popular from "./popular";
import Category from "./category";
import TagCloud from "./tagCloud";

interface IHome {
  author: IAuthor | null;
}

const Home: React.FC<IHome> = (props) => {
  const { author } = props;

  return (
    <main>
      <VerticalCarousel />
      <Featured />
      <div className="bg-grey pt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Latest />
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <Author author={author} />
                <Popular />
                <Category />
                <TagCloud />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
