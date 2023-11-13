import {} from "react";
import notifikassi from "../assets/notifikassi.svg";
import "../components/CSS/Navbar.css";
import { Link } from "react-router-dom";
/*navhome*/
const Navbarhome = () => {
  return (
    <>
      {" "}
      <div className="Navhome">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,700&display=swap');
        </style>
        <div className="logo">
          <b>PayFast</b>{" "}
        </div>
        <Link to="/Notif">
        <img className="notifikasi-logo" src={notifikassi} alt="" style={{width:'28px'}}/>
        </Link>
       
      </div>
    </>
  );
};
export default Navbarhome;
/* navhome end*/
