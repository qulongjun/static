/**
 * @File 文章页 - 发表评论
 * @Author author@static.vip
 * @Date 2023/2/27 17:28:24
 */
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { IArticle, IComment } from '../../../interfaces/article';
import { post } from '../../../utils/request';

interface IReply {
  /* 文章详情 */
  article?: IArticle;
  /* 更新文章 */
  fetchArticle: () => void;
  /* 回复评论 */
  replyComment: IComment | null;
  /* 设置回复评论 */
  setReplyComment: (comment: IComment | null) => void;
}

const Reply: React.FC<IReply> = ({ replyComment, setReplyComment, article, fetchArticle }) => {
  const [nickName, setNickName] = useState<string>('');
  const [email, setEMail] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // 发表评论
  const onComment = useCallback(() => {
    if ( content === '' ) {
      toast.error('评论内容不能为空');
      return;
    }

    if ( email !== '' && !/[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/.test(email ?? '') ) {
      toast.error('邮箱格式错误');
      return;
    }

    post('/comment', {
      articleId: article?.id,
      replyId: replyComment?.id,
      content,
      email,
      nickName,
    }).then(() => {
      toast.success('评论发表成功');
      fetchArticle();
    }).catch(err => toast.error(err.msg));
  }, [article, replyComment, fetchArticle, content, email, nickName]);

  const onCancel = useCallback(() => setReplyComment(null), [setReplyComment]);

  return (
    <div className="comment-form wow fadeIn animated">
      <div className="widget-header-2 position-relative mb-30">
        <h5 className="mt-5 mb-30">{replyComment === null ? '发表' : '回复'}评论</h5>
      </div>
      <form className="form-contact comment_form">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              {replyComment !== null && (
                <div className="d-flex align-items-center fadeInDown fadeOutDown">
                  <blockquote>{replyComment.name}: {replyComment.content}</blockquote>
                  <span className="btn-reply-remove"><a onClick={onCancel}>取消</a></span>
                </div>
              )}
              <textarea
                className="form-control w-100"
                name="comment"
                id="comment"
                cols={30}
                rows={9}
                placeholder="友善的评论是交流的起点"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="自定义昵称，留空则随机"
                value={nickName}
                onChange={e => setNickName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="填写邮箱，如需作者联系您"
                value={email}
                onChange={e => setEMail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button onClick={onComment} type="button" className="btn button button-contactForm">发表评论</button>
        </div>
      </form>
    </div>
  );
};

export default Reply;
