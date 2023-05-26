import { currencyFormat } from '../utils';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "right",
            
            labels: {
                color: "black",
                paddingLeft: 25,
                pointStyleWidth: 18,
                usePointStyle: true,
   }
        }
    }
};

export default function Portfolio() {
    const [totalValue, setTotalValue] = useState("")
    const [data, setData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const Url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether%2Cethereum%2Cbitcoin%2Cbinancecoin%2Cusd-coin&order=market_cap_desc`
            const labelSet = [];
            const dataSet1 = [];
            await fetch(Url).then((data) => {
                const response = data.json()
                return response;
            }).then((response) => {
                for (const element of response) {
                    dataSet1.push(element.market_cap);
                    labelSet.push(element.name)
                }
                setData({
                    labels: labelSet,
                    datasets: [
                        {
                            label:dataSet1,
                            data: dataSet1,
                            backgroundColor: ["#50a3f0", "#f98e8e", "#eae31f", "#5ac8ae", "#861fea"],
                            borderColor: ["white"],
                            borderWidth: 0,
                        }
                    ]
                });
                setTotalValue(dataSet1.reduce((accumulator, currentValue) => accumulator + currentValue,0))
            }).catch((error) => {
                console.log(error);
            })
        }
        fetchData();
    }, [])


    return (
        <div className='m-4  mt-8  p-2'>
            <div className=" text-xl font-semibold  p-1 m-1">
                Portfolio
                <span className="text-gray-300 text-sm ml-24 ">Total Value </span>
                <span className="text-xs font-semibold ">{currencyFormat(totalValue)}</span>
            </div>
            <div className=" h-64 w-64 ">
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}