import React from 'react';
import {
  CommentFormContainer,
  CommentText,
  CommentButton
}
  from './CommentFormStyle'

const CommentForm = () => {
  return (
    <CommentFormContainer>
      <CommentText placeholder='댓글을 입력해주세요!' />
      <CommentButton>댓글등록</CommentButton>
    </CommentFormContainer>
  )
}

export default CommentForm;