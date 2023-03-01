/**
 * @File 文章页 - 评论列表
 * @Author author@static.vip
 * @Date 2023/2/27 16:25:37
 */
import React, { useCallback, useMemo } from 'react';
import arrayToTree from 'array-to-tree';
import { IComment } from '../../../interfaces/article';
import classNames from "classnames";

interface ICommentProps {
  /* 评论对象列表 */
  comments: IComment[];
  /* 回复 */
  onReply: (comment: IComment) => void;
}

interface ICommentItem {
  /* 层级 */
  depth?: number;
  /* 评论对象 */
  comment: IComment;
  /* 回复 */
  onReply: (comment: IComment) => void;
}

const CommentItem: React.FC<ICommentItem> = ({ comment, depth = 0, onReply }) => (
  <div style={{ marginLeft: `${50 * depth}px` }}
       className={classNames('single-comment', 'justify-content-between', 'd-flex', { 'mt-50': depth !== 0 })}>
    <div className="user justify-content-between d-flex">
      <div className="thumb">
        <img src={comment.avatar} alt="" />
      </div>
      <div className="desc">
        <p className="comment">
          {comment.content}
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h5>{comment.name}</h5>
            <p className="date">{comment.date}</p>
          </div>
          <div className="reply-btn">
            <a className="btn-reply" onClick={() => onReply(comment)}>回复</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Comment: React.FC<ICommentProps> = ({ comments, onReply }) => {

  const commentTree = useMemo(() => {
    return arrayToTree(comments, {
      parentProperty: 'replyId',
      childrenProperty: 'children',
      customID: 'id',
    })
  }, [comments]);

  const getCommentList = (commentTree: any, result: any[], index: number) => {
    result.push({ ...commentTree, depth: index });

    if ( Array.isArray(commentTree?.children) ) {
      index++;
      commentTree?.children?.map((item: any) => getCommentList(item, result, index));
    }
    return result;
  }

  return (
    <div className="comments-area">
      <div className="widget-header-2 position-relative mb-30">
        <h5 className="mt-5 mb-30">主题评论</h5>
      </div>

      {
        commentTree.map(item => (
          <div className="comment-list wow fadeIn animated" key={item.id}>
            {
              getCommentList(item, [], 0).map(comment => (
                <CommentItem
                  comment={comment}
                  key={comment.id}
                  depth={comment.depth}
                  onReply={onReply}
                />
              ))}
          </div>
        ))
      }
    </div>
  );
};

export default Comment;
