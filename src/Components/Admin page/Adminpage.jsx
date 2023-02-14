import React from "react";//importing react
import { useSelector } from "react-redux";//importing react redux
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"//importing bootstrap
import hotelOneImage from"../../images/thekatriyahotel.jpg"//importing image
import hotelTwoImage from"../../images/theparkhyderabad.jpg"//importing image
import hotelThreeImage from"../../images/theparkhyderabad.jpg" //importing image
import hotelFourImage from "../../images/lemontreehotel.jpg"//importing image
import { useNavigate } from "react-router";//importing react router component
function Adminpage(){//admin page functional component
    const handler =()=>{//handler
        alert("Are you sure to logout")//alert
        navigate("/Login")//navigate hook

    }
   const navigate=useNavigate()
    const noofrooms1=useSelector(state=>state.hotels.noofrooms1)//react hook to select particular value from store
    const noofrooms2=useSelector(state=>state.hotels.noofrooms2)//react hook to select particular value from store
    const noofrooms3=useSelector(state=>state.hotels.noofrooms3)//react hook to select particular value from store
    const noofrooms4=useSelector(state=>state.hotels.noofrooms4)//react hook to select particular value from store
    const Noofrooms11=({noofrooms1})=>{//arrow function to calculate the number of rooms booked
       return (10-noofrooms1)
        
    }
    const Noofrooms22=({noofrooms2})=>{//arrow function to calculate the number of rooms booked
        return (10-noofrooms2)
         
     }
     const Noofrooms33=({noofrooms3})=>{//arrow function to calculate the number of rooms booked
        return (10-noofrooms3)
         
     }
     const Noofrooms44=({noofrooms4})=>{//arrow function to calculate the number of rooms booked
        return (10-noofrooms4)
         
     }
    return(//front end code retuned for render
<>

<h1  className="sticky-top"style={{backgroundColor:"brown",width:"100%",color:"azure",textAlign:"center",position:"fixed",float:"inline-end",fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",textTransform: "uppercase",

fontStyle: "normal",fontSize:"large",height:"1.2cm",paddingTop:"10px",paddingLeft:"450px"}}>welcome to admin page<button style={{marginLeft:"360px",borderRadius:"80px"}} onClick={handler}>Logout</button></h1>
<div style={{marginTop:"50px",borderStyle:"solid",boxSizing:"content-box",marginLeft:"10px" ,paddingLeft:"10px"}}>
<table style={{}}>
        <tbody>
            <th ><label style={{marginTop:"0px",marginLeft:"500px",fontWeight:"bold"}}>Details of The Katriya Hotel</label></th><br></br>
            <tr>
                <td>
                <img style={{width:"400px",height:"300px",marginTop:"0px",marginLeft:"0px"}} src={hotelOneImage} alt="not found"/>
                </td>
                <td>
                <label>No of rooms availabe : {noofrooms1}</label><br></br>
<label>No of rooms booked : <Noofrooms11 noofrooms1={noofrooms1} /></label> {/*//above arrow function called */}
                </td>
            </tr>
        </tbody>
    </table><br></br>


</div><br></br>
<div style={{marginTop:"50px",borderStyle:"solid",boxSizing:"content-box",marginLeft:"10px" ,paddingLeft:"10px"}}>
    <table>
        <tbody>
            <th><label style={{marginTop:"0px",marginLeft:"500px",fontWeight:"bold"}}>Details of The Manohar Hotel</label></th><br></br>
            <tr>
                <td>
                <img style={{width:"400px",height:"300px",marginTop:"0px"}} src={hotelTwoImage} alt="not found"/>
                </td>
                <td>
                <label>No of rooms availabe: {noofrooms2}</label><br></br>
<label>No of rooms booked : <Noofrooms22 noofrooms2={noofrooms2} /></label> {/*//above arrow function called */}
                </td>
            </tr>
        </tbody>
    </table>


</div><br></br>
<div style={{marginTop:"50px",borderStyle:"solid",boxSizing:"content-box",marginLeft:"10px" ,paddingLeft:"10px"}}>
<table>
        <tbody>
            <th><label style={{marginTop:"0px",marginLeft:"500px",fontWeight:"bold"}}>Details of The Park Hyderabad</label></th><br></br>
                <tr>
                <td>
                <img style={{width:"400px",height:"300px",marginTop:"0px"}} src={hotelThreeImage} alt="not found"/>
                </td>
                <td>
                <label>No of rooms availabe : {noofrooms3}</label><br></br>
<label>No of rooms booked : <Noofrooms33 noofrooms3={noofrooms3} /></label> {/*//above arrow function called */}
                </td>
            </tr>
        </tbody>
    </table>


</div><br></br>
<div style={{marginTop:"50px",borderStyle:"solid",boxSizing:"content-box",marginLeft:"10px" ,paddingLeft:"10px"}}>
<table>
        <tbody>
        <th  ><label style={{marginTop:"0px",marginLeft:"500px",fontWeight:"bold"}}>Details of Lemon Tree Hotel</label></th><br></br>
            <tr>
                
                <td>
                <img style={{width:"400px",height:"300px",marginTop:"0px"}} src={hotelFourImage} alt="not found"/>
                </td>
                <td>
                <label>No of rooms availabe : {noofrooms4}</label><br></br>
                 <label>No of rooms booked : <Noofrooms44 noofrooms4={noofrooms4} /></label> {/*//above arrow function called */}
                </td>
            </tr>
        </tbody>
    </table>


</div><br></br>
</>
    )
}
export default Adminpage //default export