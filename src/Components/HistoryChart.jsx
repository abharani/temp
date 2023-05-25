import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";

const HistoryChart =()=>{
    const {id}=useParams();
    const{response}=useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);

    const coinCharData =response.prices.map(value=>({x: value[0],
    y: value[0].toFixed (2)}));
    console.log(coinCharData);
    return(
        <div>HistoryChart</div>
    )}
    export default HistoryChart
