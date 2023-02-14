import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from "react-router";
import {useState} from 'react'
import Bookhotel1 from "../../redux/hyderabadhotels/hyderabadActions/Hyderabadactions1";
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"
import hyderabadhotel1 from '../../css/hyderabadhotel1.module.css'
import CarouselImageOne from "../../images/thekatriyahotel.jpg"
import CarouselImageTwo from "../../images/thekatriyahotel1.webp"
import CarouselImageThree from "../../images/thekatriyahotel2.webp"
import CarouselImageFour from "../../images/thekatriyahotel3.webp"
function Hyderabadhotels1(){
  const navigate=useNavigate()// use to navigate to other components
  const noOfRooms1=useSelector(state=>state.hotels.noofrooms1)// to display no of rooms from redux store
  const dispatchAction=useDispatch()// to dispatch action when button onClick
  const [number,setNumber]=useState(1)

  const PriceCalculator=()=>{return (number*1000) }
  
  const handler=()=>{// to generate alert message by comparing no of rooms available and rooms booked by user
    if (noOfRooms1>=number)
    {
      dispatchAction(Bookhotel1(number))
      alert(`Successfully Booked ${number} Rooms`)//alert
    }
    else{
      alert("You have Entered more Number of Rooms than Available")//alert
    }
  }
   
    return(//front end code
        <div  className="containers" >
          
            <h1  className="sticky-top"style={{backgroundColor:"brown",width:"100%",color:"azure",textAlign:"center",position:"fixed",float:"inline-end",fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",textTransform: "uppercase",

fontStyle: "normal",fontSize:"large",height:"1.2cm",paddingTop:"10px"}} >The Katriya Hotel</h1><br></br>
            <Carousel  style={{  width:"100%",
            height:"400px",marginTop:"40px",marginLeft:"0px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"100%",
               height:"400px"}}
                src={CarouselImageOne}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"100%",
               height:"400px"}}
                src={CarouselImageTwo}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"100%",
               height:"400px"}}
                src={CarouselImageThree}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"100%",
               height:"400px"}}
                src={CarouselImageFour}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel><br></br>
          <div style={{borderStyle:"solid",backgroundColor:"lightsteelblue",borderColor:"black",boxSizing:"content-box",marginLeft:"10px",marginRight:"10px"}}>
          <p style={{color:"brown",textTransform:" uppercase",
    fontWeight:"bolder",textAlign:"center",
    fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
          Amenities and facilities
          </p>
         
          <table  >
            <tbody  >
                <tr >
                    <td  style={{height:"100px",width:"220px",top:"0px",marginTop:"0px",marginRight:"0px"}}>
                        <div style={{marginTop:"0px",paddingBottom:"550px",marginLeft:"10px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
                   <li style={{listStyle:"none",marginLeft:"20px",marginRight:"20px",fontWeight:"bold",marginTop:"20px",top:"20px",paddingTop:"0px"}}>Languages spoken:</li> 
                      <li style={{marginLeft:"50px"}}>English </li>
                        <li style={{marginLeft:"50px"}}>Hindi</li> 
                        </div>
                    </td>
                    <td style={{top:"0px",marginTop:"0px",marginLeft:"0px"}}>
                    <div style={{marginTop:"0px",paddingBottom:"550px",marginLeft:"0px"}}>
                     <li style={{listStyle:"none",marginLeft:"30px",marginRight:"30px",fontWeight:"bold",marginTop:"20px",top:"20px",paddingTop:"0px"}}>Internet access:</li>
                      <li> Free Wi-Fi in all rooms! </li>
                         <li>Wi-Fi in public areas</li>
                         </div>
                    </td>
                    <td style={{top:"0px",marginTop:"0px"}}>
                        <div style={{paddingBottom:"430px",marginLeft:"20px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
<li style={{listStyle:"none",marginLeft:"20px",marginRight:"30px",fontWeight:"bold",marginTop:"20px",top:"20px",paddingTop:"0px"}}>Things to do, ways to relax:</li>
<li style={{marginLeft:"30px"}}>Garden</li>
<li style={{marginLeft:"30px"}}>Massage</li>
<li style={{marginLeft:"30px"}}>Sauna</li>
<li style={{marginLeft:"30px"}}>Spa</li>
<li style={{marginLeft:"30px"}}>Swimming pool [outdoor]</li>
<li style={{marginLeft:"30px"}}>Ticket services </li>
<li style={{marginLeft:"30px"}}>Tours</li>
</div>
                    </td>
                    <td style={{top:"0px",marginTop:"0px"}}>
                        <div style={{paddingBottom:"235px",marginLeft:"30px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
                        <li style={{listStyle:"none",marginLeft:"20px",marginRight:"30px",fontWeight:"bold",marginTop:"20px",top:"20px",paddingTop:"0px"}}>Cleanliness and safety:</li>
<li>Cashless payment service</li>
<li>Daily disinfection in common areas</li>
<li>Face coverings on staff</li>
<li>First aid kit</li>
<li>Free face masks</li>
<li>Hand sanitizer</li>
<li>Hot water linen and laundry washing</li>
<li>Individually-wrapped food options</li>
<li>Physical distancing of at least 1 meter</li>
<li>Professional-grade sanitizing services</li>
<li>Protective screens in common areas</li>
<li>Rooms sanitized between stays</li>
<li>Safe dining setup</li>
<li>Sanitized kitchen and tableware items</li>
<li>Sterilizing equipment</li>
</div>
                    </td>
                </tr>
            </tbody>
          </table>
          </div>
          <div style={{borderStyle:"solid",backgroundColor:"lightsteelblue",borderColor:"black",boxSizing:"content-box",height:"450px",marginTop:"20px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginLeft:"10px",marginRight:"10px"}}>
          <p style={{color:"brown",textTransform:" uppercase",
    fontWeight:"bolder",textAlign:"center",
    fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
          Location
          </p>
          <p style={{textAlign:"center",fontWeight:"bold"}}>
          No-8,Raj Bhavan Road,Somajiguda, Hyderabad. India., Banjara Hills, Hyderabad, India, 500082
          </p>
          <p style={{textAlign:"center",fontWeight:"bold"}}>What's nearby</p>
          <table>
            <tbody>
<tr>
            <td>
                <div style={{marginLeft:"250px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
          <li style={{listStyle:"none",marginLeft:"50px",marginRight:"20px",fontWeight:"bold",marginTop:"20px",top:"20px",paddingTop:"0px"}}>
          Popular landmarks</li>
<li>Buddha Statue-
1.9 km
</li>
<li>
Birla Mandir-
2.3 km
</li>
<li>
Golconda Fort-
3.8 km
</li>
<li>
Salar Jung Museum-
6.3 km
</li>
<li>
Charminar-
7.2 km
</li>
<li>
Chowmahalla Palace-
7.3 km
</li>
<li>
Shilparamam Cultural Society-
9.3 km
</li>
<li>
Nehru Zoological Park-
13.1 km
</li>
<li>
Chilkur Balaji Temple-
18.6 km
</li>
<li>
Ramoji Film City-
29.6 km
</li>
</div>
</td>
<td >
    <div style={{marginLeft:"200px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
    <li style={{listStyle:"none",marginLeft:"60px",marginRight:"20px",fontWeight:"bold",marginTop:"20px",top:"20px",paddingTop:"0px"}}>Nearby landmarks</li>

<li>
Standard Chartered Bank-
220 m
</li>

<li>
Maa Ent Institute-
260 m
    </li>
    <li>
    Yashoda Super Speciality Hospitals-
280 m
    </li>
<li>
HDFC Bank-
290 m
</li>
<li>
Matrika Hospital-
320 m
</li>
<li>
The Deccan Hospital-
330 m
</li>
<li>Anu Test Tube Centre-
340 m</li>
<li>
Yashoda Hospital Block-B-
360 m
</li>
<li>
ZOI Hospital-
400 m
</li>
<li>Deccan Heart Institute-
420 m
          </li>
          </div>
          </td>
          </tr>
          </tbody>
          </table>

          </div >
          <div>
          <p style={{fontWeight:"bolder",textAlign:"center",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}> No of Rooms Available: {noOfRooms1}</p>
          <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",textAlign:"center",fontWeight:"bold"}}>Enter the Number of Rooms to Book: <input style={{marginLeft:"20px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} type='text' value={number}onChange={(event)=> setNumber(event.target.value)}/></p> 
          <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",textAlign:"center",fontWeight:"bold"}}>Price of {number} room(s) : ₹<PriceCalculator/> </p>
          <button style={{width:"200px",marginTop:"10px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginLeft:"300px",marginBottom:"20px"}} onClick={handler}>Book {number} Rooms</button>

           <button style={{width:"200px",marginTop:"10px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginLeft:"5px",marginBottom:"20px"}} onClick={()=>navigate("/Hotel1reviewpage")}>Review </button> 

           <button style={{width:"200px",marginTop:"10px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginLeft:"5px",marginBottom:"20px"}} onClick={()=>navigate("/Hyderabad")}>Back </button> 
      </div>
        </div>
    )
}
export default Hyderabadhotels1 //default export