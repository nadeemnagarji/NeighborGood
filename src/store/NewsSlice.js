import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchArticle = createAsyncThunk("allArticles/fetch", async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );

  return res.data.articles;
});

export const fetchArticlesByCategory = createAsyncThunk(
  "allArticles/fetchByCategory",
  async (category) => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );

    return res.data.articles;
  }
);

const initialState = {
  allArticles: [],
  error: null,
  status: "idle",
};

const NewsSlice = createSlice({
  name: "allNewsArticles",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        (state.status = "success"), (state.allArticles = action.payload);
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(fetchArticlesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.allArticles = action.payload;
      })
      .addCase(fetchArticlesByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default NewsSlice.reducer;

/*
 const fetchArticle = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    console.log(res.data);
    SetNews(res.data.articles);
  }; */
