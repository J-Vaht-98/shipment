import { useEffect, useState } from "react";
import { API_URL } from '../constants'
import axios from "axios";
import Shipment from "../Models/IShipment";
import { useAppDispatch } from "../app/hooks";
import { initShipments } from "../app/shipmentSlice";
import { data } from "../shipments";
export default function useDummyData(): [Shipment[],boolean,boolean] {
    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const timeout = setTimeout(()=>{
            dispatch(initShipments(data))
            setLoading(false)
            return data
        },1000)
        return ()=> clearTimeout(timeout)
    }, []);
    return [shipments,loading,error];
}
