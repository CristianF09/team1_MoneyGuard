import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchTransactionsSummaryByPeriod,
} from '../services/transactionService';

export const getTransactionsCategories = createAsyncThunk(
  'statistics/getTransactionsCategories',
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.token;
      const data = await fetchCategories(token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsSummaryByPeriod = createAsyncThunk(
  'statistics/getTransactionsSummaryByPeriod',
  async ({ month, year }, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.token;
      const data = await fetchTransactionsSummaryByPeriod({
        month,
        year,
        token,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
