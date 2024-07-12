
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Payment from "./Pages/Deposit/Payment";
import ScrollToTop from "./Components/ScrollToTop";
import Verify from "./Pages/Verify/Verify";


const App = () => {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Verify/>} />
            <Route path="/:id" element={<Dashboard/>} />
            <Route path=":id/payment/:paymentname" element={<Payment/>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
