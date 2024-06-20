import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "./ArticleSlice";
import NewsReducer from "./NewsSlice";
const rootReducer = {
  SingleArticle: ArticleReducer,
  MultipleArticles: NewsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
