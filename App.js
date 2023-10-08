import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Sign_up/Signup";
import Signin from "./pages/Sign_in/Signin.jsx";
import AdminDash from './pages/AdminDashboard/AdminDash';
import PendingOrders from "./pages/AdminDashboard/PendingOrders";
import ConfirmedOrders from "./pages/AdminDashboard/ConfirmedOrders";
import DispatchedOrders from "./pages/AdminDashboard/DispatchedOrders";
import SellerDash from "./pages/SupplierDashboard/SellerDash";
//import ItemManagement from "./pages/SupplierDashboard/ItemManagement";
import AddItemForm from "./pages/SupplierDashboard/AddItemForm";
import UpdateItemForm from "./pages/SupplierDashboard/UpdateItemForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
        <Route path="/seller" element={<SellerDash/>} />
          {/* <Route path="/itemmanagement" element={<ItemManagement/>} /> */}
          <Route path="/additem" element={<AddItemForm/>} />  
          <Route path="/updateitem" element={<UpdateItemForm/>} />  

          <Route path="/supplier" element={<AdminDash />} />
          <Route path="/pending" element={<PendingOrders />} />
          <Route path="/confirmed" element={<ConfirmedOrders />} />
          <Route path="/dispatched" element={<DispatchedOrders />} />
         

        </Routes>
    </div>
  );
}

export default App;