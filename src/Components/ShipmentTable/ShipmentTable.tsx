import { useAppSelector } from "../../app/hooks";
import { selectShipments } from "./hooks/shipmentSlice";
import ShipmentTableRow from "./ShipmentTableRow";
import Shipment from  "../../Models/IShipment"
function ShipmentTable() {
    const data = useAppSelector(selectShipments)
    const headers = [
        "ORDER NO.",
        "DELIVERY DATE",
        "CUSTOMER",
        "TRACKING NO.",
        "STATUS",
        "COSIGNEE",
    ];
    return (
        <table className="shipment-table">
            <thead>
                <tr>
                    {headers.map((header: string,i:Number) => {
                        return <th key={`${i}th`} >{header}</th>;
                    })}
                    
                    {/* Empty headers for the details and delete buttons
                        makes for easier CSS*/}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((shipment: Shipment,i:Number) => {
                    return <ShipmentTableRow shipment={shipment} key={`${i}tr`} />;
                })}
            </tbody>
        </table>
    );
}

export default ShipmentTable;
