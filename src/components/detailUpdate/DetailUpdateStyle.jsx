import styled from 'styled-components';

export const DetailUpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border:2px solid #46acff;
  border-radius: 5px;
  width: 900px;
  height: 500px;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 250px;
  border: 1px dashed #31a3ff;
  margin-right: 50px;
`;

export const FormBox = styled.div`
  width: 300px;
  height: 250px;
  margin-bottom: 5px;
`;

export const InputStyle = styled.input`
  width: 290px;
  height: 20px;
  border: 1px solid #31a3ff;
  outline-color: #31a3ff;
`;

export const TextareaStyle = styled.textarea`
  width: 290px;
  height: 100px;
  border: 1px solid #31a3ff;
  outline-color: #31a3ff;
`;

export const ButtonBox = styled.div`
  margin-top: 10px;
  margin-right: 5px;
  float: right;
`;

export const TextStyle = styled.h3`
  color:#31a3ff;
`;

export const UpdateButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  color: #31a3ff;
  border: 1px solid #31a3ff;
  &:hover{
    background-color: #31a3ff;
    color: #fff
  }
`;

export const ImageButton = styled.button`
  font-size: 50px;
  font-weight: 100;
  width: 100px;
  height: 100px;
  cursor: pointer;
  color: #31a3ff;
  border: 1px dashed #31a3ff;
  border-radius: 100%;
`;