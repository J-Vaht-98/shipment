import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import Shipment from "../../Models/IShipment";
import OrderDetailPanel from "../Panels/ShipmentDetailPanel";
import { DeleteButton, DetailsButton } from "./ShipmentTableButton";
import {deleteShipment, openShipment} from "../../app/shipmentSlice";
interface Props{
    shipment:Shipment
}

function ShipmentTableRow({shipment}:Props) {
        
    const dispatch = useAppDispatch() 
    function handleDetailClick(){
        dispatch(openShipment(shipment))
    }
    function handleDeleteClick(){
        dispatch(deleteShipment(shipment))
    }
    return ( 
        <tr>
            <td>{shipment.orderNo}</td>
            <td>{shipment.date}</td>
            <td>{shipment.customer}</td>
            <td>{shipment.trackingNo}</td>
            <td>{shipment.status}</td>
            <td>{shipment.consignee}</td>
            <td><DetailsButton onClick={()=>handleDetailClick()}/></td>
            <td><DeleteButton onClick={()=>handleDeleteClick()}/></td>
        </tr>
     );
}

export default ShipmentTableRow;