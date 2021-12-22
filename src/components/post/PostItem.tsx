import React from 'react';

const PostItem = (props: any) => {
  return (
    <div className='post-item'>
      <div className='post-header'>
        {props.index + 1} - {props.post.title}
      </div>
      <div className='post-body'>{props.post.desc}</div>
    </div>
  );
};

export default PostItem;
