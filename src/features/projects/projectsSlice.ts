import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "api/projectsApi";

export enum EStatus {
  LOADING = "loading",
  ERROR = "error",
  IDLE = "idle",
}

export interface IProject {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  url: string;
  stargazers_count: number;
  forks_count: number;
  comment?: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  };
}

export interface ProjectsState {
  status: EStatus;
  projectsList: IProject[];
  total: number;
}

const initialState: ProjectsState = {
  status: EStatus.IDLE,
  projectsList: [],
  total: 0,
};

export const fetchProjectsByTitle = createAsyncThunk(
  "projects/fetchProjectsByTitle",
  async ({
    text,
    perPage,
    page,
  }: {
    text: string;
    perPage: number;
    page: number;
  }) => {
    return await fetchProjects(text, perPage, page);
  }
);

interface IAction<T> {
  type: string;
  payload: T;
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setComment: (state, action: IAction<{ id: number; text: string }>) => {
      const project = state.projectsList.find(
        (project) => project.id === action.payload.id
      );
      if (project) {
        project.comment = action.payload.text;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProjectsByTitle.pending, (state) => {
      state.status = EStatus.LOADING;
    });
    builder.addCase(
      fetchProjectsByTitle.fulfilled,
      (state, action: IAction<{ items: IProject[]; total_count: number }>) => {
        state.status = EStatus.IDLE;
        state.projectsList = action.payload.items;
        state.total = action.payload.total_count;
      }
    );
    builder.addCase(fetchProjectsByTitle.rejected, (state) => {
      state.status = EStatus.ERROR;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setComment } = projectsSlice.actions;

export default projectsSlice.reducer;
