import { } from "react"
import "../components/css/fitur.css"
import kirim from "../assets/kirim.svg"
import terima from "../assets/terima.svg"
 const Fitur = () =>{
        return(
                <div className="box12">
                        <div className="box12">
                                <div className="box-atas">
                                <a href="" className="menu"><img className="notifikasi-logo" src={kirim} alt=""  style={{width:'28px'}}/>Kirim</a>
                                <a href="" className="menu"><img className="notifikasi-logo" src={terima} alt="" style={{width:'28px'}}/>Terima</a>
                                </div> 
                        </div>
                </div>

        )
}
export default Fitur 