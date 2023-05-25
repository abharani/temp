import React from 'react'
import useAxios from "../hooks/useAxios";
import PieChart from './piechart';

const Portfolio = () => {
    const { response} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en')
console.log (response);
  return (
    <div className=''>
    <div className=''>
    <h3 className=" text-2xl left-2 bg-fixed">Portfolio</h3>
    <div className=' text-gray-500 right-2'>Total Value<span className='text-black'>$1000</span></div>
    {response && response.map(coins =><PieChart key={coins.id} coins={coins} />)}
  
    </div></div>
  )
}

export default Portfolio
