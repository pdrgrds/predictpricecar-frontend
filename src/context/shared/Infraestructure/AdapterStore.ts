import { legacy_createStore as createStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import GenericSlice from './SliceGeneric';


const rootReducer = combineReducers({
  generic: GenericSlice
});

export const AdapterStore = createStore(rootReducer);

export type AppDispatch = typeof AdapterStore.dispatch;
export const useAppDispatch = () => useDispatch();
export type RootState = ReturnType<typeof rootReducer>;