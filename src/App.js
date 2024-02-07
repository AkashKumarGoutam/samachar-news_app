import Navbar from "./Components/Navbar";
import { Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchData from "./Components/FetchData";
import SearchPage from "./Pages/SearchPage";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="general" element={<FetchData ele="general"/>}/>
      <Route path="business" element={<FetchData ele="business"/>}/>
      <Route path="entertainment" element={<FetchData ele="entertainment"/>}/>
      <Route path="health" element={<FetchData ele="health"/>}/>
      <Route path="science" element={<FetchData ele="science"/>}/>
      <Route path="sports" element={<FetchData ele="sports"/>}/>
      <Route path="technology" element={<FetchData ele="technology"/>}/>
      <Route path="/SearchPage" element={<SearchPage/>}/>
    </Routes>
    </>
  );
}

export default App;
