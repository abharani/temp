import Market from "../Components/Market";
import NavBar from "../Components/NavBar";
import Portfolio from "../Components/Portfolio";
const CryptoHome = () => {
  return (
    <div>
      <NavBar />
      <div className=" bg-[#fafbff]   rounded-md mx-20 mt-6 px-8 pt-5 pb-2">
        <div className=" grid grid-cols-4 gap-3   ">
          {/* dividing homepagee into two sections */}
          <div className=" col-span-3 grid grid-rows-3 gap-3  ">

            {/* left Scetion */}
            <div className="grid grid-cols-6 gap-5 ">
              <div className=" col-span-1 bg-white shadow-sm rounded-md  w-20">
                <div> usd V </div>
              </div>
              <div className=" col-span-5 w-full bg-white shadow-sm rounded-md">
                searchbar
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-md">Chart</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white shadow-sm rounded-md">portfolio
                {/* <Portfolio /> */}
              </div>
              <div className="bg-white shadow-sm rounded-md "><p className="pr-24">Exchange</p></div>
            </div>
          </div>
          <div className=" bg-white shadow-sm rounded-md   ">
            {/* //sidebar section// */}
            Sidebar

            {/* <Market /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHome;
