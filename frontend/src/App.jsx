import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Decoder from "./pages/decoder";
import ErrorPage from "./pages/errorPg";
import "./App.css";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      let preloader = document.getElementById("preloader");
      preloader.style.display = "none";
    }, 2500);
  }, []);

  return (
    <>
      {!loading ? (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/decoder" element={<Decoder />} />
              <Route
                path="*"
                element={
                  <ErrorPage
                    err={{
                      status: 404,
                      code: "ERR_BAD_ROUTE",
                      msg: "Page Not",
                    }}
                  />
                }
              />
            </Route>
          </Routes>
        </Router>
      ) : null}
    </>
  );
}

export default App;
