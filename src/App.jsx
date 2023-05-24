import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoHome from "./pages/CryptoHome";
import CryptoDetails from "./pages/cryptoDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoHome/>}/>
        <Route path="/coin/:id" element={<CryptoDetails />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
