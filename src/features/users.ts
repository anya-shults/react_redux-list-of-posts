/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';
import { getUsers } from '../api/users';

type UsersState = {
  users: User[];
  expanded: boolean;
};

const initialState: UsersState = {
  users: [],
  expanded: false,
};

export const init = createAsyncThunk('users/fetch', getUsers);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeExpanded: (state, action) => {
      state.expanded = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(init.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { changeExpanded } = usersSlice.actions;
export default usersSlice.reducer;
