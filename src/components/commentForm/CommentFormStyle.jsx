import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommentFormContainer = styled.div`
  border: 1px solid black;
  width:1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CommentText = styled.textarea`
width: 750px;
height: 90px;
`;

export const CommentButton = styled.button`
  width: 200px;
  height: 95px;
`;