import {} from "react";
import shoppingMerah from "../assets/shoppingMerah.svg";
import phone from "../assets/phone.svg";
import water from "../assets/water.svg";
import light from "../assets/light.svg";
import bookm from "../assets/bookm.svg";
import coins from "../assets/coins.svg";
import gamemerah from "../assets/gamemerah.svg";
import all from "../assets/all.svg";
import kirim from "../assets/kirim.svg";
import terima from "../assets/terima.svg";
import "../components/css/beranda.css";

const Boxberanda = () => {
  return (
    <div className="box-luar">
      <div className="box-dalam">
        <div className="box-atas">
          <a className="menu" style={{marginLeft:'10px'}}>
            <img className="notifikasi-logo" src={shoppingMerah} alt="" style={{marginLeft:'11px'}} />
            Keranjang{" "}
          </a>
          <a className="menu">
            <img className="notifikasi-logo" src={phone} alt="" />
            Pulsa
          </a>
          <a className="menu">
            <img className="notifikasi-logo" src={coins} alt="" />
            Poin
          </a>
          <a className="menu" style={{marginRight:'10px'}}>
            <img className="notifikasi-logo" src={light} alt="" />
            Listrik
          </a>
        </div>
        <div className="box-bawah">
          <a className="menu">
            <img className="notifikasi-logo" src={gamemerah} alt="" /> game
          </a>
          <a className="menu">
            <img className="notifikasi-logo" src={bookm} alt="" style={{marginLeft:'5px'}} />
            Catatan
          </a>
          <a className="menu">
            <img className="notifikasi-logo" src={water} alt="" />
            pdam
          </a>
          <a className="menu">
            <img className="notifikasi-logo" src={all} alt="" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Boxberanda;
