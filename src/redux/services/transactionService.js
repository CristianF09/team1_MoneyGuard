import {
  userTransactionsApi,
  setToken,
} from '../../config/userTransactionsApi';

export const fetchCategories = async token => {
  if (token) setToken(token);
  const response = await userTransactionsApi.get('/api/transaction-categories');
  return response.data;
};

// Implement this function to fetch the transactions summary by period
export const fetchTransactionsSummaryByPeriod = async ({
  month,
  year,
  token,
}) => {
  if (token) setToken(token);
  const response = await userTransactionsApi.get(
    `/api/transactions-summary?month=${month}&year=${year}`
  );
  return response.data;
};
