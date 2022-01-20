import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Installation from "./pages/Installation";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/getting-started" element={<GettingStarted />} />
        </Route>
      </Route>
        <Route path='/resources' element={<Resources />}/>
    </Routes>
  );
}

export default App;
