import React from 'react'//React import
import mainpage from '../../css/mainpage.module.css'//css for styling
import { useNavigate } from 'react-router'//react router import

function Mainpage (){//React functional component
   
           const navigate=useNavigate()//navigate hook
         
       return (//front end code
        <div className={mainpage.div} style={{marginTop:"0px"}}>

<p style={{ borderTop:"0.05cm",
    borderBottom:"0.05cm",
    borderLeft: "0px",
    borderRight: "0px",
    borderStyle: "solid",
    boxSizing: "content-box",fontSize:"xx-large" ,fontStyle:"bold",fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",color:"black" ,marginTop:"250px",marginLeft:"200px",width:"900px",textAlign:"center"}}>
           "With age, comes wisdom, with travel, comes understanding"
          </p>
        

         <div  className={mainpage.div1} style={{width:"400px",height: "160px"}}>
         
         <p style={{marginBottom:"5px", textAlign: "center",fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontStyle:"bold",fontSize:"xx-large"}}>
            SOUTH INDIA TOURISM  </p>
            <p style={{marginTop: "0px",textAlign: "center",fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontStyle: "bold",fontSize:"large"}}>
          Describes All the Capital Cities Present in <br></br> 
           South India with their Famous Places.
          </p>
          <p style={{textAlign:"center",paddingTop:"0cm", paddingRight:"8px"}}>
           <input style={{width: "2.2cm",height:"0.8cm", fontSize: "medium",borderRadius:"5px"}} type="button" value="login" onClick={()=>navigate('/Login')} />
           <input style={{width: "2.2cm",height:"0.8cm", fontSize: "medium",borderRadius:"5px"}}type="button" value="SignUp" onClick={()=>navigate('/Signup')}/>
          </p>
         </div> 
         </div>      
       )
}
export default Mainpage //default export