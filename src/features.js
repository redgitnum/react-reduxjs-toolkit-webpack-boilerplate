import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const asyncFetchExample = createAsyncThunk("fetch/users", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return {
      users: await response.json(),
    };
  } catch (err) {
    return err.message;
  }
});

export const countSlice = createSlice({
  name: "counter",
  initialState: { count: 0, users: 0 },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: {
    [asyncFetchExample.pending]: (state) => {
      state.users = "pending";
    },
    [asyncFetchExample.rejected]: (state, action) => {
      state.users = action.payload;
    },
    [asyncFetchExample.fulfilled]: (state, action) => {
      console.log(action.payload.users);
      state.users = action.payload.users;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default configureStore({
  reducer: countSlice.reducer,
});
