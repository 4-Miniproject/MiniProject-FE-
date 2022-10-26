import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from '../../shared/request';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const initialState = {
  login: {
    nickname: '',
    password: '',
    passwordConfirm: ''
  },
  isLoading: false,
  error: null,
};


export const addMember = createAsyncThunk(
  "ADD_MEMBER",
  async (payload, thunkAPI) => {

    try {
      const { data } = await instance.post("api/members/signup", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const memberLogin = createAsyncThunk(
  'MEMBER_LOGIN',
  async (payload, thunkAPI) => {

    try {
      const config = {
        headers: {
          //웹브라우저 > 웹서버 쪽으로 요청하는 응용계층의 표현타입을 JSON으로
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer ' + localStorage.getItem('Authorization') 1안
        },
      };
      const { data } = await instance.post('/api/members/login', payload, config)
        .then((token) => {

          // data = token
          // 로컬 스토리지는 키와 벨류로 이루어진 데이터를 저장할 수 있다.
          // 키에 데이터 쓰기 localStorage.setItem (https://www.daleseo.com/js-web-storage/)
          // 로컬 스토리지에 키와 벨류로 이루어진 값을 저장하겠다.
          // 키는 Authorization이라는 이름을 가지고
          // 벨류는 토큰(XML)은 authorization이라는 텍스트가 포함된 문자열을 반환하도록 요청한다.

          // instance.post가 비동기 함수인데 await를 붙이면 결과가 나올때까지 기다렸다가
          // 백엔드에서 결과가 나오면 data에 응답값을 넣어주는데
          // 무슨 이유인지는 모르겠지만 백엔드에서 응답을 주기전에 await가 리턴을 해버린다.
          // 그게 fulfilled(data)로 넘어가서 문제가 있었음
          if (token.data.success) {
            localStorage.setItem('Authorization', token.request.getResponseHeader('authorization'));
            localStorage.setItem('Refresh-Token', token.request.getResponseHeader('refresh-Token'));
            alert('로그인에 성공하였습니다!')

            instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('Authorization');
            window.location.replace('/posts');
          }
        }).catch(error => {
          alert("아이디와 비밀번호를 확인해주세요!");
        })
      //localStorage.setItem('authorization', data.request.getResponseHeader('authorization'));
      //localStorage.setItem('refresh-Token', data.request.getResponseHeader('refresh-Token'));
      //return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      // alert('아이디와 비밀번호를 확인해주세요!')
      //return thunkAPI.rejectWithValue(error);
    }
  }
);

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: {
    [memberLogin.pending]: (state) => {
      state.isLoading = true;
    },

    [memberLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      //state.login = action.payload;
    },
    [memberLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberSlice.reducer;