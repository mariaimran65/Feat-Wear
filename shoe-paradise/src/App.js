import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Dasboard from "./Components/Dashboard/Dasboard";
import Footer from "./Components/Footer/Footer";
import ProductDetail from "./Components/Product Details/ProductDetail";
import Cart from "./Components/Shpping Cart/Cart";
import PendingOrders from "./Components/Orders/PendingOrders";
import AdminPanel from "./Components/Admin Panel/AdminPanel";
import Users from "./Components/signedUsers/SignedUsers";
import BrandProducts from "./Components/BrandProducts/BrandProducts";
import Adidas from "./Components/BrandProducts/Adidas";
import Nike from "./Components/BrandProducts/Nike";
import Service from "./Components/BrandProducts/Service";
import Bata from "./Components/BrandProducts/Bata";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("/check-token", {
        token: localStorage.getItem("someToken"),
      })
      .then((resp) => {
        if (resp.data) {
          dispatch({
            type: "USER_LOGGED_IN",
            payload: resp.data,
          });
        }
        // debugger;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dasboard></Dasboard>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/adidas" element={<Adidas></Adidas>}></Route>
          <Route path="/nike" element={<Nike></Nike>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/bata" element={<Bata></Bata>}></Route>

          <Route
            path="/BrandProducts"
            element={<BrandProducts></BrandProducts>}
          ></Route>
          <Route path="/adminpanel" element={<AdminPanel></AdminPanel>}></Route>
          <Route
            path="/pendingorders"
            element={<PendingOrders></PendingOrders>}
          ></Route>
          <Route
            path="/productdetail/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
