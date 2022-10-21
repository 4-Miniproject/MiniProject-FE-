import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  DetailUpdateContainer,
  ImageBox,
  FormBox,
  InputStyle,
  TextareaStyle,
  ButtonBox,
  TextStyle,
  UpdateButton,
  ImageButton
} from './DetailUpdateStyle';

const DetailUpdate = () => {

  const [title, setTitle, onChangeTitle] = useInput('')
  const [content, setContent, onChageBody] = useInput('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === '' ||
      content.trim() === '') return alert('모든 항목을 입력해 주세요!');
  }


  return (
    <DetailUpdateContainer>
      <ImageBox>
        <ImageButton>+</ImageButton>
      </ImageBox>
      <FormBox>
        <form onSubmit={onSubmitHandler}>
          <TextStyle>Title</TextStyle>
          <InputStyle type='text'
            name='title'
            value={title}
            onChange={onChangeTitle} />
          <TextStyle>Content</TextStyle>
          <TextareaStyle type='text'
            name='title'
            value={content}
            onChange={onChageBody} />
          <ButtonBox>
            <UpdateButton>수정 완료</UpdateButton>
          </ButtonBox>
        </form>
      </FormBox>
    </DetailUpdateContainer>
  )
}
export default DetailUpdate;