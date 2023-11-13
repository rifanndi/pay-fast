import {} from'react'
import balikk from '../assets/balikk.svg'
import Fooodeter from '../components/fooder'
import { Link } from 'react-router-dom'; 

const Riwayat = () =>{
return(
        <>
<nav style={{ backgroundColor: '  rgb(54, 57, 230)', padding: '10px', width: '100%',height: '35px',position:'fixed',fontSize:'27px' ,fontFamily: 'Cabin', display:'flex', 
        color: 'aliceblue',}}>
                 <style>
                    
          @import
          url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,700&display=swap');
        </style>  
       
         
         
         <Link to="/" >
         <img src={balikk} alt="" style={{width:'29.5px' ,marginTop:'2px'}}/>
          </Link>
             
              <div>
                   <a style={{ top:'30px'}}>
         <b >Riwayat</b>
         </a>
              </div>
      </nav>
      <div className="foter" style={{marginTop:'87.6vh'}}>
<Fooodeter />
                  </div>
      

</>
)

}
export default Riwayat
