import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: null,
};

const ArticleSlice = createSlice({
  name: "singleArticle",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.article = action.payload;
    },
  },
});

export const { addArticle } = ArticleSlice.actions;

export default ArticleSlice.reducer;
