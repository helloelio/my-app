import React, { useState } from 'react';
import './App.css';
import PostList from './components/post/PostList';
import PostForm from './components/post/PostForm';
import Container from './components/Container';
import Heading from './components/Heading';

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: 'hello', desc: 'world' },
    { id: 2, title: 'hello', desc: 'world' },
    { id: 3, title: 'hello', desc: 'world' },
    { id: 4, title: 'hello', desc: 'world' },
  ]);

  const createPost = (newPost: any): void => {
    setPost([...posts, newPost]);
  };

  return (
    <div className='App'>
      <Container>
        <Heading title='Главная' />
        <PostForm create={createPost} />
        <PostList posts={posts} />
      </Container>
    </div>
  );
}

export default App;
