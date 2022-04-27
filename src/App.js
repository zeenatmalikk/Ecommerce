import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Client/Component/Navbar/Navbar";
import Home from "./Client/Component/Home";
import ProductList from "./Client/Pages/ProductList/ProductList";
import Singleproduct from "./Client/Pages/SingleProduct/Singleproduct";
import Register from "./Client/Pages/Register/Register";
import Login from "./Client/Pages/Login/Login";
import { useSelector } from "react-redux";
import CartNew from "./Client/Pages/Cart/CartNew";

function App() {
  const user = useSelector((state)=>state.user.currentUser);
  console.log("userrr",user);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products/:category" element={<ProductList />}></Route>
          <Route path="product/:id" element={<Singleproduct />}></Route>

          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          ></Route>
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route path="/cart" element={<CartNew />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
