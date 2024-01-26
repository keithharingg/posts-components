import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <h2>
            {props.number}. {props.post.title}
          </h2>
          <p>{props.post.text}</p>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>x</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
