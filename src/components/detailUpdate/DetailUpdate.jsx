import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  DetailUpdateContainer,
  ImageBox,
  FormBox,
  InputStyle,
  ButtonBox
} from './DetailUpdateStyle';

const DetailUpdate = () => {

  const [title, setTitle, onChangeTitle] = useInput('')
  const [content, setContent, onChangeBody] = useInput('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === '' ||
      content.trim() === '') return alert('모든 항목을 입력해 주세요!');
  }


  return (
    <DetailUpdateContainer>
      <ImageBox>이미지 수정</ImageBox>
      <FormBox>
        <form onSubmit={onSubmitHandler}>
          <p>제목</p>
          <InputStyle type='text'
            name='title'
            value={title}
            onChange={onChangeTitle} />
          <p>내용</p>
          <InputStyle type='text'
            name='content'
            value={content}
            onChange={onChangeBody} />
          <ButtonBox>
            <button>수정완료</button>
          </ButtonBox>

        </form>
      </FormBox>
    </DetailUpdateContainer>
  )
}
export default DetailUpdate;