import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import CreateProduct from "./components/CreateProduct";
import MainPage from "./routes/MainPage";
import { CartProvider } from "react-use-cart";
// import { useStateValue } from "./context/StateProvider";
// import { AllWatchItems } from "./utils/firebaseFunction";
// import { actionType } from "./context/reducer";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import MobileHeader from "./components/MobileHeader";
// import SpringWinter from "./components/SpringWinter";
const App = () => {
  // const [{ watchItems }, dispatch] = useStateValue();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await AllWatchItems().then((data) => {
  //       dispatch({
  //         type: actionType.SET_WATCH_ITEMS,
  //         watchItems: data,
  //       });
  //     });
  //   };
  //   fetchData();
  // }, []);
  return (
    <CartProvider>
      <AnimatePresence>
        <Router>
          <div className='bg'>
            {/* <NavBar /> */}
            <Routes>
              <Route path='/' element={<MainPage />} />
            </Routes>
          </div>
          <Routes>
            <Route
              path='/createProducts'
              element={
                <>
                  {" "}
                  <NavBar /> <CreateProduct />{" "}
                </>
              }
            />
          </Routes>
          {/* <SpringWinter />
          <Footer />
          <MobileHeader /> */}
        </Router>
      </AnimatePresence>
    </CartProvider>
  );
};

export default App;
