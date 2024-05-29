import {PayloadAction, createSlice} from "@reduxjs/toolkit";

interface IFavoritesPayload {
  id: string;
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [] as string[],
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<IFavoritesPayload>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<IFavoritesPayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
