import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from './counterSlice/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;