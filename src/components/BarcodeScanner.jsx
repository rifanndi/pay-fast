import React, { useRef, useState, useEffect } from 'react';
import { BrowserBarcodeReader } from '@zxing/library';
import { NavLink } from 'react-router-dom'; 
import App from '../App'
import '../components/css/qr.css';
import back from '../assets/back.svg'
import lampp from '../assets/lampp.svg'
import cartcheck from '../assets/cartcheck.svg'
const BarcodeScanner = () => {
  const videoRef = useRef(null);
  const boxRef = useRef(null); // Ref untuk elemen div kotak berkedip
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    const codeReader = new BrowserBarcodeReader();

    const startScanner = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        codeReader.decodeFromVideoElement(videoRef.current, (result, err) => {
          if (result) {
            setBarcode(result.text);
            // Dapatkan dimensi kotak berkedip
            const boxRect = videoRef.current.getBoundingClientRect();
            // Tetapkan posisi dan ukuran kotak berkedip
            boxRef.current.style.left = `${result.location.topLeft.x + boxRect.x}px`;
            boxRef.current.style.top = `${result.location.topLeft.y + boxRect.y}px`;
            boxRef.current.style.width = `${result.location.bottomRight.x - result.location.topLeft.x}px`;
            boxRef.current.style.height = `${result.location.bottomRight.y - result.location.topLeft.y}px`;
          }
          if (err) {
            console.error(err);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    startScanner();

    return () => {
      codeReader.reset();
    };
  }, []);

  return (
    <div>
      <nav style={{ backgroundColor: '  rgb(54, 57, 230)', padding: '10px', textAlign: 'center' ,width: '100%',height: '35px',position:'fixed',fontSize:'28px' ,fontFamily: 'Cabin', 
        color: 'aliceblue',}}>
                  <style>
                    
          @import
          url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,700&display=swap');
        </style><b>PayFast</b>
        
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  paddingTop: '35px', position:'fixed'}}>
      <style>
        fo
          @import
          url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,700&display=swap');
        </style><b style={{marginTop: '10%',marginBottom: '0%', fontSize: '27px',fontFamily: 'Cabin',}}>Barcode Scanner</b>
        
       <div
          class="line-wobble"
          ref={boxRef}
          style={{
            position: 'absolute',
            width: '60%',
            height: '8px',
            borderRadius: '30px',
            animation: 'flash',
            marginBottom: '0%',
            marginTop: '20%',
          }}
        ></div>
        <video
          ref={videoRef}
          style={{
           
            width: '80%',
            height: 'auto',
            border: '3px solid red',
            marginBottom: '0%',
            marginTop: '8%',
            borderRadius: '30px'
          }}
        ></video>
        {barcode && <p>Barcode: {barcode}</p>}

      </div>
     
      <div style={{ display:'flex', alignItems:'center',justifyContent:'space-around',gap:'8%',paddingTop:'88vh', }}>
       <button type="button">
        <img src={back} alt="" style={{ width:'50px',}}/>
       </button>
        
        <img src={lampp} alt="" style={{ width:'50px',}}/>

        
        
      </div>
    
    </div>
  );
}

export default BarcodeScanner
