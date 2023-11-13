import React from "react";
import { Link } from "react-router-dom";

import home from "../assets/home.svg";
import bar from "../assets/bar.svg";
import user from "../assets/user.svg";
import walet from "../assets/walet.svg";
import paper from "../assets/paper.svg";
import "../components/css/foter.css";

const Footer = () => {
  return (
    <>
      <section className="WA">
        <div className="h" >
          <Link to="/" className="na">
            <img src={home} className="logo-react" alt="React logo" style={ {width:'28px', marginLeft:'4px'}}  /> Home
          </Link>
          <Link to="/Riwayat" className="">
            <img src={paper} className="logo-react" alt="React logo" style={ {width:'28px',marginLeft:'11px', fontSize:'0px'}} /> Riwayat
          </Link>
          <Link to="/BarcodeScanner" className="likaran">
            <img src={bar} className="logo-react1" alt="React logo" style={{}}/> <a  style={{color:'white'}}> Buy</a>
          </Link>
          <Link to="/Dompet" className="">
            <img src={walet} className="logo-react" alt="React logo" style={ {width:'28px',marginLeft:'9.6px'}}  /> Dompet
          </Link>
          <Link to="/User" className="na">
            <img src={user} className="logo-react" alt="React logo" style={ {width:'28px'}} /> User
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
