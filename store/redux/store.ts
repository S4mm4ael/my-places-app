import {configureStore} from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
