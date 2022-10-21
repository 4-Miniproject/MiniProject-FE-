import React from 'react';
import CommentForm from '../commentForm/CommentForm';
import CommentList from '../commentList/CommentList';



import {
  DetailContainer,
  DetailInfoBox,
  ImageBox,
  TextBox,
  ButtonBox
} from './DetailInfoStyle'

const DetailInfo = () => {
  return (
    <>
      <DetailContainer>
        <DetailInfoBox>
          <ImageBox>이미지</ImageBox>
          <TextBox>
            <p>제목 : 경포대 해수욕장</p>
            <p>물이 시원하고 아주 좋습니다 근데 지금가면 춥겠죠?</p>
            <p>위치 : 강원도</p>
            <ButtonBox>
              <button>수정</button>
              <button>삭제</button>
            </ButtonBox>
          </TextBox>
        </DetailInfoBox>
      </DetailContainer>
      <CommentForm />
      <CommentList />
    </>
  )
}

export default DetailInfo;