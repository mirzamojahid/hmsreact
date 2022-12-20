import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import FAG from "../src/pages/FAG";
import HallFacilities from "../src/pages/HallFacilities";
import RoomFacilities from "../src/pages/RoomFacilities";
import Error404 from "./pages/404";
import NavBar from '../src/Navbar'
import { RequireToken } from "./Auth";
import './App.css';
import Booking from "./pages/Booking";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
<NavBar></NavBar>
       
     <Routes>
        <Route path="/"  element={
        <RequireToken>
<Home></Home>
      
        </RequireToken>
        
      
      }/>
        <Route path="/login"  element={<Login></Login>}/>
        <Route path="/register"  element={<Register></Register>}/>
        <Route path="/booking"  element={<Booking></Booking>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/fag" element={<FAG></FAG>}/>
        <Route path="/hallfacilities" element={<HallFacilities></HallFacilities>}/>
        <Route path="/roomfacilities" element={<RoomFacilities></RoomFacilities>}/>
        <Route path="*" element={<Error404></Error404>}/>
      </Routes>
    </Router>
  );
}

export default App;
