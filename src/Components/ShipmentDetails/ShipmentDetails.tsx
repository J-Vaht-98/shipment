import Shipment from '../../Models/IShipment'

interface Props{
    shipment:Shipment
}
function ShipmentDetails({shipment}:Props) {
    console.log("Shipment", shipment)
    return ( 
        <></>
     );
}

export default ShipmentDetails;