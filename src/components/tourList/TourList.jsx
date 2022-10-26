import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { __getPosts } from '../../redux/modules/postsSlice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TourList = () => {

    const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  console.log(posts)


  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

    return (
    
        <div>
          <section>
            <div>
              <button onClick={()=> navigate('/addpost')}>작성하기</button>
            </div>
          </section>
          <section>
            <ListContainer>
              {posts.length !== 0 && posts.map((post) => {
                return (
                  <div key={post.id}>
                    <Link to={`/detail/${post.id}`}>
                      <div>{post.title}</div>
                      <div>{post.category}</div>
                      <div><img src={post.imgUrl} /></div>
                    </Link>
                  </div>
                )
              })}
            </ListContainer>
          </section>
        </div>
      
  
    )
}

export default TourList;

const ListContainer = styled.div`
    display: flex;
    gap: 30px;
`

// const ListContainer = styled.div`
//   width: 900px;
//   border: 1px solid black;

// `

// const StyledFormBox = styled.div`
//   width: 100vw;
//   height:100vh;
//   background-color: rgba(20,40,50);
  
//   display: inline-block;
//   justify-content:center;

// `

// const PostsList = styled.div`
//       display: flex;
//       flex-wrap: wrap;
// `

// const AddButton = styled.div`
//   display: flex;
//   justify-content: center;
// `;