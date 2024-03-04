import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "features/projects/projectsSlice";
import infoReducer from "features/info/infoSlice";
import toastsReducer from "features/toast/toastSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    info: infoReducer,
    toast: toastsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
