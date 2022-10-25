// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import instance from '../../shared/request';

// const initialState = {
//   // posts: [],
//   // detail: {
//   //   id: 0,
//   //   image: '',
//   //   title: '',
//   //   content: '',
//   //   comments: [
//   //     {
//   //       id: 0,
//   //       commentid: 0,
//   //       comment: ''
//   //     }
//   //   ]
//   // },
//   comments: [{
//     commentid: 0,
//     comment: '',
//   }],
//   isLoading: false,
//   error: null,
// }

// export const __getComments = createAsyncThunk(
//   "GET_Comment",
//   async (payload, thunkAPI) => {
//     try {
//       // const { data } = await instance.post(`/posts/${payload.id}`, payload)
//       const { data } = await instance.get('/comments', payload)
//       return thunkAPI.fulfillWithValue(data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// );


// // 댓글 추가
// export const __addComment = createAsyncThunk(
//   "ADD_Comment",
//   async (payload, thunkAPI) => {
//     try {
//       // const { data } = await instance.post(`/posts/${payload.id}`, payload)
//       const { data } = await instance.post('/comments', payload)
//       return thunkAPI.fulfillWithValue(data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// );

// // // 댓글 수정
// // export const __putPostDetail = createAsyncThunk(
// //   "PUT_POST_DETAIL",
// //   async (payload, thunkAPI) => {
// //     try {
// //       const { data } = await instance.put(`/posts/${payload.id}`, payload)
// //       return thunkAPI.fulfillWithValue(data)
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error)
// //     }
// //   }
// // )

// // 댓글 삭제
// export const __deleteComment = createAsyncThunk(
//   "DELETE_Comment",
//   async (payload, thunkAPI) => {
//     try {
//       await instance.delete(`/comments/${payload}`)
//       return thunkAPI.fulfillWithValue(payload)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

// export const commentSlice = createSlice({ // 리듀서를 만들어주는 역할
//   name: "comments", // 모듈이름
//   initialState, // 초기상태값
//   reducers: {}, // 자동으로 만들어지는 리듀서
//   extraReducers: { // 직접 커스텀으로 만드는 리듀서


//     [__getComments.pending]: (state) => {
//       state.isLoading = true
//     },

//     [__getComments.fulfilled]: (state, action) => {

//       state.isLoading = false
//       state.comments = action.payload

//     },

//     [__getComments.rejected]: (state, action) => {
//       state.isLoading = false
//       state.error = action.payload
//     },

//     // 댓글 추가
//     [__addComment.pending]: (state) => {
//       state.isLoading = true
//     },

//     [__addComment.fulfilled]: (state, action) => {

//       state.isLoading = false
//       state.comments = [...state.comments, action.payload]

//     },

//     [__addComment.rejected]: (state, action) => {
//       state.isLoading = false
//       state.error = action.payload
//     },

//     // 댓글 삭제
//     [__deleteComment.pending]: (state) => {
//       state.isLoading = true
//     },

//     [__deleteComment.fulfilled]: (state, action) => {
//       state.comments = state.comments.filter((comment) => comment.id !== action.payload)

//     },

//     [__deleteComment.rejected]: (state, action) => {
//       state.isLoading = false
//       state.error = action.payload
//     },

//   },

// })

// export default commentSlice.reducer;