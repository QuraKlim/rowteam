import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "api/projectsApi";

export interface IToast {
  title: string;
  text: string;
}

export interface ToastsState {
  toasts: IToast[];
}

const initialState: ToastsState = {
  toasts: [],
};

interface IAction<T> {
  type: string;
  payload: T;
}

export const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: IAction<IToast>) => {
      state.toasts.push(action.payload);
    },
  },
});

export const { addToast } = toastsSlice.actions;

export default toastsSlice.reducer;
