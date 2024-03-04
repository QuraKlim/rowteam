import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "api/projectsApi";
import { info } from "console";

export interface InfoState {
  perPage: number;
  page: number;
}

const storagePerPage = localStorage.getItem("perPage") ?? 30;
const storagePage = localStorage.getItem("page") ?? 1;

const initialState: InfoState = {
  perPage: +storagePerPage,
  page: +storagePage,
};

interface IAction<T> {
  type: string;
  payload: T;
}

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    changePerPage: (state, action: IAction<number>) => {
      localStorage.setItem("perPage", action.payload.toString());
      state.perPage = action.payload;
    },
    changePage: (state, action: IAction<number>) => {
      localStorage.setItem("page", action.payload.toString());
      state.page = action.payload;
    },
  },
});

export const { changePerPage, changePage } = infoSlice.actions;

export default infoSlice.reducer;
