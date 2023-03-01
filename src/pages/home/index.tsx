/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 11:29:48
 */
import React from 'react';
import { useScrollTo } from 'use-scroll-to-2';
import Featured from "./featured";
import VerticalCarousel from "./verticalCarousel";
import { IAuthor } from "../../interfaces/author";
import Recently from "./recently";
import Side from "../common/side";

interface IHome {
  /* 作者信息 */
  author: IAuthor | null;
}

const Home: React.FC<IHome> = (props) => {
  const { author } = props;
  const [ref, scroll] = useScrollTo({
    offsetTop: 100,
  });

  return (
    <main>
      <VerticalCarousel />
      <Featured />
      <div className="bg-grey pt-50" ref={ref as any}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Recently scroll2Top={scroll} />
            </div>
            <div className="col-lg-4">
              <Side author={author} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
