import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import axios from 'axios';

export const formatDate = date => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

console.log(formatDate(Date.now()));

export const getBestSellers = createAsyncThunk(
  'bookify/bestsellers',
  async () => {
    try {
      // const res = await axios.get(
      //   `${Config.API_BASE_URL}/${formatDate(
      //     Date.now(),
      //   )}/hardcover-fiction.json?api-key=${Config.API_KEY}`,
      // );
      const res = await axios.get(
        `${Config.API_BASE_URL}/full-overview.json?api-key=${Config.API_KEY}`,
      );
      return res.data.results;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const searchBook = createAsyncThunk('bookify/search', async searchQ => {
  try {
    const res = await axios.get(
      `${Config.API_BASE_URL}/best-sellers/history.json?title=${searchQ}&api-key=${Config.API_KEY}`,
    );

    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
});

export const bookSlice = createSlice({
  name: 'bookify',
  initialState: {
    bestSellers: [],
    readLists: [],
    searchResults: [],
    selectedBook: '',
    searchQ: '',
    isLoading: false,
    isError: null,
  },
  reducers: {
    results: (state, action) => {
      state.searchQ = action.payload;
    },
    addToCart: (state, action) => {
      state.readLists = [...state.readLists, action.payload];
    },
    removeCart: (state, action) => {
      const index = state.readLists.indexOf(action.payload);
      state.readLists.splice(index, 1);
      state.readLists = [...state.readLists];
    },
    selectBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
  extraReducers: {
    [getBestSellers.fulfilled]: (state, action) => {
      state.bestSellers = action.payload;
      state.isLoading = false;
    },
    [getBestSellers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBestSellers.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [searchBook.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.isLoading = false;
    },
    [searchBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [searchBook.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
  },
});

export const {results, addToCart, removeCart, selectBook} = bookSlice.actions;
export default bookSlice.reducer;
