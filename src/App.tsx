import useDummyData from "./Components/ShipmentTable/hooks/useDummyData";
import ShipmentTable from "./Components/ShipmentTable/ShipmentTable";
import './App.css'

function App() {
  useDummyData();
  return (
    <div className="App">
        <ShipmentTable/>
    </div>
  );
}

export default App;
