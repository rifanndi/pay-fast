import { } from "react";
import Navbarhome from "../components/Navbar"
import Fitur from "../components/fitur"
import Kontener from "../components/Promo";
import Fooodeter from "../components/fooder";
import Boxberanda from "../components/Beranda";
import "./App.css"



const  Home = () =>  {
return (
        <div className="app">
          <div className="Navbarhome">
<Navbarhome  />
          </div>
        <div className="fitur">
          <Fitur/>
        </div>
                <div className="beranda">
  
               <Boxberanda/>
                </div>
               
                 <div className="promo">
                <h2 className="f" style={{marginBottom:'10px', marginLeft:'20px'}}>  <b> Diskon Special </b></h2>
                <Kontener /> 
                </div>
                  <div className="foter">
<Fooodeter />
                  </div>
                 
         </div>
  )
}
export default Home