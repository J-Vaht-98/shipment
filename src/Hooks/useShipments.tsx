import { useEffect, useState } from "react";
import { API_URL } from '../constants'
import axios from "axios";
import Shipment from "../Models/IShipment";
import { useAppDispatch } from "../app/hooks";
import { initShipments } from "../app/shipmentSlice";
export default function useShipments(): [Shipment[], boolean, boolean] {
    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => {
                setShipments(res.data);
                dispatch(initShipments(res.data));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setShipments([]);
                setError(true);
            });
    }, [dispatch]);
    return [shipments, loading, error];
}
