import { } from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from './pages/home';
import BarcodeScanner from "./pages/BarcodeScanner";
import Riwayat from "./pages/riwayat";
import Dompet from "./pages/Dompet";
import User from "./pages/User";
import Notif from "./pages/Notifi";



const App = () =>  {

return(
  <>
 <Router>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/BarcodeScanner" element= {<BarcodeScanner/>}/>
    <Route path="/Riwayat" element= {<Riwayat/>}/>
    <Route path="/Dompet" element= {<Dompet/>}/>
    <Route path="/User" element= {<User/>}/>
    <Route path="/Notif" element= {<Notif/>}/>
    
  </Routes>
 </Router>
  </>
)
}
export default App