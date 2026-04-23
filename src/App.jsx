import NavBar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;