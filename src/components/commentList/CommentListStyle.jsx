import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommentListContainer = styled.div`
  border: 1px solid black;
  width:1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CommentListImage = styled.div`
border: 1px solid black;
width: 100px;
height: 90px;
border-radius: 100%;
text-align: center;
`;

export const CommentListText = styled.div`
  border: 1px solid black;
  width: 800px;
`;

export const CommentListButton = styled.div`
width: 60px;
border: 1px solid black;
display: flex;
flex-direction: column;
`;

