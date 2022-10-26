import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { __getPosts } from '../redux/modules/postsSlice';

// 메인페이지 게시글 조회
const TourAll = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  console.log(posts)

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);
  

  return (
    <Layout>
      <div>
        {posts.map((post) => {
          return (
            <div
             key={post.id}
             img={post.imgUrl}
             location={post.location}
             title={post.title}
             >
              <Link to={`/detail/${post.id}`}><div>{post.title}</div></Link>
              <div>{post.content}</div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default TourAll