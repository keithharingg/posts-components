import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      text: 'array',
    },
    {
      id: 2,
      title: 'TypeScript',
      text: 'callback',
    },
    {
      id: 3,
      title: 'Java',
      text: 'language',
    },
    {
      id: 4,
      title: 'Kotlin',
      text: 'render',
    },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Post List" />
    </div>
  );
}

export default App;
