import React from 'react';
import PostItem from './PostItem';
import Heading from '../Heading';

interface PostListPropsModel {
  posts: {
    id: number;
    title: string;
    desc: string;
  }[];
}

const PostList = function (props: PostListPropsModel) {
  return (
    <section className='post-list'>
      <Heading title={`Список постов`} />
      {props.posts.map((post: any, index: number) => (
        <PostItem post={post} key={post.id} index={index} />
      ))}
    </section>
  );
};

export default PostList;
