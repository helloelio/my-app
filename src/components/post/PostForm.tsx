import React, { useState } from 'react';
import Heading from '../Heading';

const PostForm = (props: any) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addNewPost = (event: any) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      desc,
    };
    props.create(newPost);
    setTitle('');
    setDesc('');
  };

  return (
    <div>
      <Heading title='Создание поста' />
      <form className='form'>
        <input
          className='form-control'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type='text'
          placeholder='Название поста'
        />
        <input
          className='form-control'
          onChange={(event) => setDesc(event.target.value)}
          value={desc}
          type='text'
          placeholder='Описание поста'
        />
        <button className='btn form-control' onClick={addNewPost}>
          Создать пост
        </button>
      </form>
    </div>
  );
};

export default PostForm;
