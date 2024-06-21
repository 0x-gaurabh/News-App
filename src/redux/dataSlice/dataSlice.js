import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Initial state
const initialState = {
  loading: false,
  data: [],
  category: 'general',
  error: ''
};

// Thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async (category) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3bbdb2b1e02c4255a090aefed9f95609`);
    return response.data.articles;
  } catch (error) {
    throw Error(error.response?.data?.message || 'Failed to fetch data');
  }
});

// Data slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.category = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message || 'Oops something went wrong';
      });
  }
});

export const { filterCategory } = dataSlice.actions;
export default dataSlice.reducer;
