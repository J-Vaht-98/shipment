import Shipment from "../../Models/IShipment";
import { useAppDispatch } from "../../app/hooks";
import { closeShipment, editShipment } from "../../app/shipmentSlice";
import { useState } from "react";
import {
    Dialog,
    Box,
    DialogContent,
    DialogTitle,
    FormControl,
    Typography,
    Input,
    InputLabel,
    Button,
    DialogActions,
} from "@mui/material/";
interface Props {
    shipment: Shipment;
}
function ShipmentDetailPanel({ shipment }: Props) {
    const [currentShipment, setCurrentShipment] = useState(shipment);
    const dispatch = useAppDispatch();
    function handleClose(e: any) {
        dispatch(closeShipment());
    }
    function handleSave() {
        dispatch(editShipment(currentShipment));
        dispatch(closeShipment());
    }
    if (!shipment) return <h1>Something went wrong :(</h1>;
    return (
        <Dialog
            maxWidth="lg"
            fullWidth={true}
            open={true}
            onClose={(e) => handleClose(e)}>
            <DialogTitle
            sx={{
                pt:3,
                borderBottom:"1px solid black",
              }}
            
            >
                <Typography variant="body1">Shipment details:</Typography>
            </DialogTitle>
            <Box
                sx={{
                    display:"flex", 
                    flexDirection:"row",
                }}
            >
                <DialogContent>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Order no:</InputLabel>
                        <Input
                            value={currentShipment.orderNo}
                            onChange={(e) => {
                                e.preventDefault();
                                setCurrentShipment((currentShipment) => {
                                    const newState = { ...currentShipment };
                                    newState.orderNo = e.target.value;
                                    return newState;
                                });
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Delivery date:</InputLabel>
                        <Input
                            value={currentShipment.date}
                            onChange={(e) => {
                                e.preventDefault();
                                setCurrentShipment((currentShipment) => {
                                    const newState = { ...currentShipment };
                                    newState.date = e.target.value;
                                    return newState;
                                });
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Customer:</InputLabel>
                        <Input
                            value={currentShipment.customer}
                            onChange={(e) => {
                                e.preventDefault();
                                setCurrentShipment((currentShipment) => {
                                    const newState = { ...currentShipment };
                                    newState.customer = e.target.value;
                                    return newState;
                                });
                            }}
                        />
                    </FormControl>
                </DialogContent>
                <DialogContent>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Tracking no:</InputLabel>
                        <Input
                            value={currentShipment.trackingNo}
                            onChange={(e) => {
                                e.preventDefault();
                                setCurrentShipment((currentShipment) => {
                                    const newState = { ...currentShipment };
                                    newState.trackingNo = e.target.value;
                                    return newState;
                                });
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Status:</InputLabel>
                        <Input
                            value={currentShipment.status}
                            onChange={(e) => {
                                e.preventDefault();
                                setCurrentShipment((currentShipment) => {
                                    const newState = { ...currentShipment };
                                    newState.status = e.target.value;
                                    return newState;
                                });
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Consignee:</InputLabel>
                        <Input
                            value={currentShipment.consignee}
                            onChange={(e) => {
                                e.preventDefault();
                                setCurrentShipment((currentShipment) => {
                                    const newState = { ...currentShipment };
                                    newState.consignee = e.target.value;
                                    return newState;
                                });
                            }}
                        />
                    </FormControl>
                </DialogContent>
            </Box>
                <DialogActions
                 sx={{
                    p:2,
                    pr:5,
                    borderTop:"1px solid black",
                 }}
                >
                    <Button variant="outlined" onClick={() => handleSave()}>Save</Button>
                </DialogActions>
            
        </Dialog>
    );
}

export default ShipmentDetailPanel;
