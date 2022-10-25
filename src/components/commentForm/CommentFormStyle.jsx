import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommentFormContainer = styled.form`
  width:1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CommentText = styled.textarea`
  border: 1px solid #31a3ff;
  outline-color: #31a3ff;
  width: 750px;
  height: 90px;
`;

export const CommentButton = styled.button`
  color: #31a3ff;
  border: 1px solid #31a3ff;
  width: 200px;
  height: 95px;
  background-color: transparent;
  cursor: pointer;
  &:hover{
    border: 1px solid #3d7bff;
    background-color: #3d7bff;
    color: #fff
  }

`;