import useDummyData from "./Hooks/useDummyData";
import ShipmentTable from "./Components/ShipmentTable/ShipmentTable";
import './App.css'
import OrderDetailPanel from "./Components/Panels/ShipmentDetailPanel";
import { useAppSelector } from "./app/hooks";
import { selectActiveShipment } from "./app/shipmentSlice";
import useShipments from "./Hooks/useShipments";
import {Container} from "@mui/material";

function App() {
  // const [shipments,loading,error] = useDummyData(); //Uses local json file
  const [shipments,loading,error] = useShipments();
  const activeShipment = useAppSelector(selectActiveShipment)
  return (
    <Container maxWidth="xl" className="App" >
        {error && <h1>Something went wrong :(</h1>}
        {loading && !error && <h1>Loading...</h1>}
        {!loading && !error && <ShipmentTable />}
        {activeShipment && <OrderDetailPanel shipment={activeShipment}/>}
    </Container>
  );
}

export default App;
