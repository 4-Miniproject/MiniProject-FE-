import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from '../../shared/request';
import axios from 'axios';

const initialState = {
  login: [],
  isLoading: false,
  error: null,
};

export const memberLogin = createAsyncThunk(
  'MEMBER_LOGIN'.toString(),
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const config = {
        headers: {
          //웹브라우저 > 웹서버 쪽으로 요청하는 응용계층의 표현타입을 JSON으로
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post('http://www.hanghaetour.shop/api/members/login', payload, config)
        .then(() => {
          localStorage.setItem('authorization', data.request.getResponseHeader('authorization'));
          localStorage.setItem('refresh-Token', data.request.getResponseHeader('refresh-Token'));
        })
      // localStorage.setItem('authorization', data.request.getResponseHeader('authorization'));
      // localStorage.setItem('refresh-Token', data.request.getResponseHeader('refresh-Token'));
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      state.login = action.payload;
    },
    [memberLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberSlice.reducer;