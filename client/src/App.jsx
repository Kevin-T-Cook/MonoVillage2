
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Auth from "./pages/Auth";
import Upload from "./components/Upload";

function App() {
  return (
    <>
    <Auth />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );

}

export default App;
