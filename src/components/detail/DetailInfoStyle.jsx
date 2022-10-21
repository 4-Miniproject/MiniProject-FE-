import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:2px solid #46acff;
  border-radius: 5px;
  width: 1000px;
  height: 550px;
`;
export const DetailInfoBox = styled.div`
  width: 850px;
  height: 300px;
`;

export const ImageBox = styled.div`
  border: 1px solid #31a3ff;
  width: 850px;
  height: 300px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  margin-top: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
`;

export const ButtonStyle = styled.button`
  width: 90px;
  height: 50px;
  cursor: pointer;
  color: #31a3ff;
  border: 1px solid #31a3ff;
  margin-left: 10px;
  background-color: transparent;
  &:hover{
    border: 1px solid #3d7bff;
    background-color: #3d7bff;
    color: #fff
  }
`;

export const ButtonStyle2 = styled.button`
  cursor: pointer;
  color: #31a3ff;
  border: none;
  background-color: transparent;
  font-size: 30px;
  &:hover{
    color: #3d7bff;
  }
`;