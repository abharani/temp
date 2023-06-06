import useAxios from "../hooks/useAxios";
import Coin from "./coin";
const Market = () => {

const { response} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
console.log(response);
  return (
  <section className="m-3 max-h-screen overflow-y-scroll scroll-mr-0  scroll-pb-12  overflow-hidden ">
     <h3 className=" text-xl font-bold ">Cryptocurrency by market cap</h3>
     <br/>
  {response && response.map(coin =><Coin key={coin.id} coin={coin} />)}
   </section>
  
    )
}

export default Market;