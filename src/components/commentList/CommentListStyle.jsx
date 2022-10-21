import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CommentListContainer = styled.div`
  
  width:1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CommentListImage = styled.div`
  border: 1px solid #1290f7;
  width: 100px;
  height: 90px;
  border-radius: 100%;
  text-align: center;
`;

export const CommentListText = styled.div`
  border: 1px solid #1290f7;
  width: 800px;
`;

export const CommentListButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonStyle = styled.button`
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: #1290f7;
  border: none;
  background-color: transparent;
  font-size: 20px;
  &:hover{
    color: #0e59fa;
  }
  
`;

