import React from 'react';
import CommentForm from '../commentForm/CommentForm';
import CommentList from '../commentList/CommentList';

import {
  DetailContainer,
  DetailInfoBox,
  ImageBox,
  TextBox,
  ButtonBox,
  TitleBox,
  ButtonStyle,
  ButtonStyle2
} from './DetailInfoStyle'

const DetailInfo = () => {
  return (
    <>
      <DetailContainer>
        <TitleBox>
          <h3>경포대 해수욕장(경포대)</h3>
          <ButtonStyle2><i class="fa-solid fa-delete-left"></i></ButtonStyle2>
        </TitleBox>
        <DetailInfoBox>
          <ImageBox>이미지</ImageBox>
        </DetailInfoBox>
        <TextBox>
          <p>물이 시원하고 아주 좋습니다 근데 지금가면 춥겠죠?</p>
          <ButtonBox>
            <ButtonStyle>수정하기</ButtonStyle>
            <ButtonStyle>삭제하기</ButtonStyle>
          </ButtonBox>
        </TextBox>
      </DetailContainer>
      <CommentForm />
      <CommentList />
    </>
  )
}

export default DetailInfo;