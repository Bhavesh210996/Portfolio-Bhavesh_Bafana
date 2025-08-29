import { createSlice } from "@reduxjs/toolkit"


const initalState = {
    theme: "dark",
    accent: "violet",
    menuOpen: false,
}

const themeSlice = createSlice({
    name: "theme",
    initialState: initalState,
    reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    cycleAccent: (state) => {
      const order = ["violet", "blue", "emerald", "amber", "pink"];
      const idx = order.indexOf(state.accent);
      state.accent = order[(idx + 1) % order.length];
    },
    setMenu: (state, { payload }) => { state.menuOpen = payload; },
  },
})

export const { toggleTheme, cycleAccent, setMenu } = themeSlice.actions;
export default themeSlice.reducer;