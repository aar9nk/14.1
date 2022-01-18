import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import Aaron from "./component/Aaron";
import SideBar from "./component/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route element={<SideBar />}>
            <Route path='about' element={<About />} />
            <Route path='aaron' element={<Aaron />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
