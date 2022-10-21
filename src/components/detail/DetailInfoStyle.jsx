import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 1000px;
  height: 500px;
`;
export const DetailInfoBox = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 850px;
  height: 300px;
`;

export const ImageBox = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 300px;
`;

export const TextBox = styled.div`
  border: 1px solid black;
  margin-top: 100px;
  width: 400px;
  height: 200px;
`;

export const ButtonBox = styled.div`
  border: 1px solid black;
  float: right;
  width: 120px;
  height: 70px;
`