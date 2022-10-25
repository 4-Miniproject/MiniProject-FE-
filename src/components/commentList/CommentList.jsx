import React, { useEffect, useState } from 'react';
import {
  CommentListContainer,
  CommentListImage,
  CommentListText,
  CommentListButton,
  ButtonStyle,
  CommentListBox,
  TextBox
} from './CommentListStyle'

import { useDispatch, useSelector } from 'react-redux';
import { __getComments, __deleteComment } from '../../redux/modules/commentSlice';
import useInput from '../hooks/useInput';

const CommentList = ({ detail }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  const [comment, setComment, onChangeComment] = useInput('');
  const [editId, seteditId] = useState(-1);

  useEffect(() => {
    dispatch(__getComments())
  }, [dispatch]);

  return (
    <div>
      {/* {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <textarea {...editId === comment.id ? '' : 'readonly'}>
              {comment.comment}
            </textarea>
            <button>수정</button>
            <button>삭제</button>
          </div>
        )
      })} */}

    </div>


  )


  //map
  // return (
  //   <CommentListContainer>
  //     {detail.comments.map((comment) => {
  //       return (
  //         <CommentListBox key={comment.commentid}>
  //           {/* <CommentListImage>프로필</CommentListImage> */}
  //           <TextBox>
  //             <p>아직 미정(닉네임)</p>
  //             <p>{comment.comment}</p>
  //           </TextBox>

  //           <CommentListButton>
  //             <ButtonStyle><i className="fa-solid fa-pen"></i></ButtonStyle>
  //             <ButtonStyle><i className="fa-solid fa-trash"></i></ButtonStyle>
  //           </CommentListButton>
  //         </CommentListBox>
  //       )
  //     })}

  //   </CommentListContainer>
  // )
}

export default CommentList;