import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import Shipment from "../Models/IShipment";

export interface ShipmentState {
    value: Shipment[];
    status: "done" | "loading" | "failed";
    activeShipment: null | undefined | Shipment;
}

const initialState: ShipmentState = {
    value: [],
    status: "loading",
    activeShipment: null,
};

export const shipmentSlice = createSlice({
    name: "shipment",
    initialState,
    reducers: {
        deleteShipment: (state, action: PayloadAction<Shipment>) => {
            state.value = state.value.filter(
                (shipment) => shipment.orderNo !== action.payload.orderNo
            );
        },
        initShipments: (state, action: PayloadAction<Shipment[]>) => {
            state.value = action.payload;
            if (action.payload.length > 0) {
                state.status = "done";
            }
        },
        openShipment: (state, action: PayloadAction<Shipment>) => {
            state.activeShipment = action.payload;
        },
        closeShipment: (state) => {
            state.activeShipment = null;
        },
        editShipment: (state, action: PayloadAction<Shipment>) => {
          const i = state.value.findIndex(shipment => shipment.orderNo === state.activeShipment?.orderNo)
          if(i < 0) return
            state.value[i] = action.payload
        },
    },
});

export const { deleteShipment, initShipments, openShipment, closeShipment,editShipment } =
    shipmentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.todo.value)`
export const selectShipments = (state: RootState) => state.shipments.value;
export const selectStatus = (state: RootState) => state.shipments.status;
export const selectActiveShipment = (state: RootState) =>
    state.shipments.activeShipment;

export default shipmentSlice.reducer;
