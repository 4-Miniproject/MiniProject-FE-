import React from 'react';
import {
  CommentListContainer,
  CommentListImage,
  CommentListText,
  CommentListButton,
  ButtonStyle
} from './CommentListStyle'

const CommentList = () => {
  //map
  return (
    <CommentListContainer>
      <CommentListImage>프로필</CommentListImage>
      <CommentListText>
        <p>곰젤리(닉네임)</p>
        <p>경포대말고 해운대는 어떠신가요 선생님들?(댓글 내용)</p>
      </CommentListText>
      <CommentListButton>
        <ButtonStyle><i class="fa-solid fa-pen"></i></ButtonStyle>
        <ButtonStyle><i class="fa-solid fa-trash"></i></ButtonStyle>
      </CommentListButton>
    </CommentListContainer>
  )
}

export default CommentList;