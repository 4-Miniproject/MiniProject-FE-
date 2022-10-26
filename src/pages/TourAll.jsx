import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { __getPosts } from '../redux/modules/postsSlice';
import Layout from '../components/layout/Layout';


const TourAll = () => {

  // const dispatch = useDispatch();
  // const { posts } = useSelector((state) => state.posts);

  // console.log(posts)

  // useEffect(() => {
  //   dispatch(__getPosts());
  // }, [dispatch]);


  return (
    <Layout>
      <div>


        test
        {/* {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/detail/${post.id}`}><div>{post.title}</div></Link>
            <div>{post.content}</div>
          </div>
        )
      })} */}
      </div>
    </Layout>


  )
}

export default TourAll