
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Outlet} from "react-router-dom"

import './App.css'
import "./styles/global.css"



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>

  );
}

export default App;
