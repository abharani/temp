import Market from "../Components/Market";
import NavBar from "../Components/NavBar";
import Portfolio from "../Components/Portfolio";
const CryptoHome = () => {
  return (
    <div className="max-h-screen">
      <NavBar />
      <div className=" bg-[#fafbff]   rounded-md mx-20 mt-6 px-8 pt-5 pb-2">
        <div className=" grid grid-cols-4 gap-3   ">               {/* dividing homepagee into two sections */}
          <div className=" col-span-3  space-y-5  ">    {/* left Scetion */}

            <div className="grid max-h-fit grid-cols-12 gap-5 ">           {/*dropdown+searchbar goes here*/}
              <div className=" col-span-1 bg-white shadow-sm rounded-md border border-black w-20">
                <div> usd V </div>
              </div>
              <div className=" col-span-11 w-full border border-black  bg-white shadow-sm rounded-md">
                searchbar
              </div>
            </div>

            <div className="bg-white max-h-fit shadow-sm border border-black rounded-md">Chart</div>           {/* chart goes here */}


            <div className="grid max-h-fit grid-cols-2 gap-2">              {/*  Portfolio+exchange*/}
              <div className="bg-white border border-black shadow-sm  rounded-md">
                <Portfolio />
              </div>
              <div className="bg-white border border-black shadow-sm rounded-md "><p >Exchange</p></div>
            </div>
          </div>


          <div className=" bg-white border border-black shadow-sm rounded-md max-h-screen container ">            {/* //sidebar section// */}
          
            <Market />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHome;
