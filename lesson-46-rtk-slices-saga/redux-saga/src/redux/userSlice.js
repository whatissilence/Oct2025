import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    id: 0,
    name: 'Stranger',
    username: 'Stranger Username',
    email: 'example@gmail.com',
  },
  loading: false,
  error: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },

    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
})

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;