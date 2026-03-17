import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  currentUser: {
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;
  isLoading: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['currentUser']>) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, setLoading, logout } = userSlice.actions;
export default userSlice.reducer;
