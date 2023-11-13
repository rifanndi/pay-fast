import { } from "react"

import kirim from "../assets/kirim.svg"
import terima from "../assets/terima.svg"
import "../components/css/fitur.css"
 const Fitur = () =>{
        return(
                <div className="box1">
                        <div className="box2">
                                <div className="box-utas">
                                <a className="menu"><img className="notifikasi-logo" src={kirim} alt="" style={{width:'32px',marginLeft:'1px'}} />Kirim</a>
                                <a  className="menu"><img className="notifikasi-logo" src={terima} alt="" style={{width:'32px',marginLeft:'6px'}}/>Terima</a>
                                </div> 
                        </div>
                </div>

        )
}
export default Fitur 