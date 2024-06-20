import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between ">
        <div className="w-full block">
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

/*

endPoint = https://newsapi.org/v2/
*/
