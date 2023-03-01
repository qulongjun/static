/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/26 12:19:48
 */
import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Author from '../common/author';
import Popular from '../common/popular';
import Category from '../common/category';
import TagCloud from '../common/tagCloud';
import { IAuthor } from '../../interfaces/author';
import { IArticle, IComment } from '../../interfaces/article';
import { get } from '../../utils/request';
import Related from './related';
import Comment from './comment';
import Reply from './reply';
import Content from './content';

interface IArticleProps {
  author: IAuthor | null;
  scroll2Top: () => void;
}

const Article: React.FC<IArticleProps> = (props) => {
  const { author, scroll2Top } = props;
  const { id } = useParams();
  const [article, setArticle] = useState<IArticle>()
  const [replyComment, setReplyComment] = useState<IComment | null>(null);
  const navigate = useNavigate();
  const fetchArticle = useCallback(async () => setArticle(await get(`article/${id}`) as IArticle), [id]);

  useEffect(() => {
    scroll2Top();
  }, [id]);

  useEffect(() => {
    fetchArticle().catch(r => {
      if ( r.code === 404 ) {
        navigate('/404');
      }
      else toast.error(r.msg);
    });
  }, [fetchArticle]);

  const onReply = useCallback((comment: IComment) => {
    setReplyComment(comment);
  }, []);

  return (
    <main className="bg-grey pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="single-content2">
              <Content article={article} author={author} />
              <Related article={article?.related ?? []} />
              <Comment comments={article?.comments ?? []} onReply={onReply} />
              <Reply
                article={article}
                replyComment={replyComment}
                setReplyComment={setReplyComment}
                fetchArticle={fetchArticle} />
            </div>
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
    </main>
  )

}

export default Article;
