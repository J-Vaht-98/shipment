import Shipment from "../../Models/IShipment";
import { DeleteButton, DetailsButton } from "./ShipmentTableButton";
interface Props{
    shipment:Shipment
}
function ShipmentTableRow({shipment}:Props) {
    return ( 
        <tr>
            <td>{shipment.orderNo}</td>
            <td>{shipment.date}</td>
            <td>{shipment.customer}</td>
            <td>{shipment.trackingNo}</td>
            <td>{shipment.status}</td>
            <td>{shipment.consignee}</td>
            <td><DetailsButton onClick={()=>alert(shipment.orderNo)}/></td>
            <td><DeleteButton/></td>
        </tr>
     );
}

export default ShipmentTableRow;