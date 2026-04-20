import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 0,
    name: 'Stranger',
    username: 'Stranger Username',
    email: 'example@gmail.com',
  },
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUserFromServer.pending,
        (state) => {
          state.loading = true;
        }
      )
      .addCase(
        getUserFromServer.fulfilled,
        (state, action) => {
          state.loading = false;
          state.user = action.payload;
        }
      )

  }
})

export const getUserFromServer = createAsyncThunk(
  'user/getUserFromServer',
  async (userId) => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(async response => {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Просто пауза

        if (!response.ok) {
          throw new Error('Запит не вдався: ' + response.status);
        }
        return response.json();
      });

    return user;
  }
)

export const { setUser } = userSlice.actions;
export default userSlice.reducer;