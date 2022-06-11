import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { pokemonList: [] },
  reducers: {
    catchPokemon(state, action) {
      const newPokemon = action.payload;

      const caughtPokemon = state.pokemonList.find(
        (item) => item.id === newPokemon.id
      );
      console.log(state, "testing");
      if (caughtPokemon) {
      } else {
        state.pokemonList.push({
          id: newPokemon.id,
          name: newPokemon.name,
          sequence: newPokemon.sequence,
          url: newPokemon.url,
        });
      }
    },
    releasePokemon(state, action) {
      const id = action.payload;
      const caughtPokemon = state.pokemonList.find((item) => item.id === id);
      if (caughtPokemon) {
        state.pokemonList = state.pokemonList.filter((item) => item.id !== id);
      }
    },
    renamePokemon(state, action) {
      const newPokemon = action.payload;
      const idx = state.pokemonList.findIndex(
        (item) => item.id === newPokemon.id
      );
      state.pokemonList[idx].name = newPokemon.name;
      state.pokemonList[idx].sequence = newPokemon.sequence;
    },
  },
});

export const actions = pokemonSlice.actions;
const store = configureStore({
  reducer: pokemonSlice.reducer,
});

export default store;
