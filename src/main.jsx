import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DashBoard from "./pages/DashBoard";
import ArticlePage from "./pages/ArticlePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="article/:articleId" element={<ArticlePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
