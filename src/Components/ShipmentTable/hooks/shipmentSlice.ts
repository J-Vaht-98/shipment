import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../../app/store';
import { API_URL } from '../../../constants';
import { fetchShipments } from './api';
import Shipment from '../../../Models/IShipment';

export interface ShipmentState {
  value: Shipment[];
  status: 'done' | 'loading' | 'failed';
}

const initialState: ShipmentState = {
  value: [],
  status: 'loading',
};

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {
    deleteShipment: (state,action: PayloadAction<string>) => {
      state.value = state.value.filter(shipment => shipment.orderNo !== action.payload)
    },
    initShipments: (state,action :PayloadAction<Shipment[]>) =>{
        state.value = action.payload
        if(action.payload.length > 0){
          state.status = "done";
        }
    },
    setStatus: (state,action:PayloadAction<string>)=>{
      
    }
  },
});

export const { deleteShipment,initShipments} = shipmentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.todo.value)`
export const selectShipments = (state: RootState) => state.shipments.value;
export const selectStatus = (state:RootState) => state.shipments.status;




export default shipmentSlice.reducer;

