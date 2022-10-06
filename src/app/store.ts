import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shipmentReducer from '../Components/ShipmentTable/hooks/shipmentSlice'
export const store = configureStore({
  reducer: {
    shipments: shipmentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
