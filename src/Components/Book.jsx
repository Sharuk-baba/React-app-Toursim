import React from "react";//import react
import { useState } from "react";//import use State hook
import { useSelector} from 'react-redux'//React redux import
import { useNavigate } from "react-router";//react router import
import hotelOneImage from "../images/thekatriyahotel.jpg" //image import
import hotelTwoImage from "../images/themanoharhotel1.webp" //image import
import hotelThreeImage from "../images/theparkhyderabad.jpg" //image import
import hotelFourImage from "../images/lemontreehotel.jpg" //image import
import book from "../css/book.module.css"
import './Modals/Modal2'//Modal import
import Modal from "./Modals/Modal2";//Modal import
import Contact from "./ContactUs_form/ContactUs";//contactus component import

const BUTTON_WRAPPER_STYLES = {//embedded styling css
  position: 'relative',
  zIndex: 1
}

function Book({handler}){
  const [isOpen, setIsOpen] = useState(false) // state which stores boolean
  const [isDisable1,setisDisable1]=useState(false)
  const [isDisable2,setisDisable2]=useState(false)
  const [isDisable3,setisDisable3]=useState(false)
  const [isDisable4,setisDisable4]=useState(false)
  const noofrooms1=useSelector(state=>state.hotels.noofrooms1) // storing the data from store to variable
  const noofrooms2=useSelector(state=>state.hotels.noofrooms2) // storing the data from store to variable
  const noofrooms3=useSelector(state=>state.hotels.noofrooms3) // storing the data from store to variable
  const noofrooms4=useSelector(state=>state.hotels.noofrooms4) // storing the data from store to variable
  const Message1=()=>{ // conditonal rendering according to no of rooms available
     if (noofrooms1<=3 && noofrooms1>0){return <p style={{color:"red",marginBottom:"0px",fontWeight:"bold"}}>Hurry up !.....</p>} else if (noofrooms1>3){return<p style={{color:"green",marginBottom:"0px"}}>Rooms Available</p>}else {return <p style={{color:"darkred",marginBottom:"0px"}}>Booking Closed</p>}}
  const Message2=()=>{ if (noofrooms2<=3 && noofrooms2>0){return <p style={{color:"red",marginBottom:"0px",fontWeight:"bold"}}>Hurry up !.....</p>}  else if (noofrooms2>3){return<p style={{color:"green",marginBottom:"0px"}}>Rooms Available</p>}else {return <p style={{color:"darkred",marginBottom:"0px"}}>Booking Closed</p>}}
  const Message3=()=>{ if (noofrooms3<=3 && noofrooms3>0){return <p style={{color:"red",marginBottom:"0px",fontWeight:"bold"}}>Hurry up !.....</p>}  else if (noofrooms3>3){return<p style={{color:"green",marginBottom:"0px"}}>Rooms Available</p>}else {return <p style={{color:"darkred",marginBottom:"0px"}}>Booking Closed</p>}}
  const Message4=()=>{ if (noofrooms4<=3 && noofrooms4>0){return <p style={{color:"red",marginBottom:"0px",fontWeight:"bold"}}>Hurry up !.....</p>}  else if (noofrooms4>3){return<p style={{color:"green",marginBottom:"0px"}}>Rooms Available</p>}else {return <p style={{color:"darkred",marginBottom:"0px"}}>Booking Closed</p>}}
    const navigate=useNavigate()
    const[hotelname,sethotelname]=useState('') // state to store data
    const Handler=(event)=>{ // function to set hotel name
      sethotelname(event.target.value)
    }
    const handler1=(()=>{
      if (noofrooms1 ===0)
      {
        setisDisable1(true)
      }
      else{
        navigate('/Hyderabadhotels1')
      }
    })
    const handler2=(()=>{
      if (noofrooms2 ===0)
      {
        setisDisable2(true)
      }
      else{
        navigate('/Hyderabadhotels2')
      }
    })
    const handler3=(()=>{
      if (noofrooms3 ===0)
      {
        setisDisable3(true)
      }
      else{
        navigate('/Hyderabadhotels3')
      }
    })
    const handler4=(()=>{
      if (noofrooms4 ===0)
      {
        setisDisable4(true)
      }
      else{
        navigate('/Hyderabadhotels4')
      }
    })
    const hotels=[ 
      // object data consist of name,image,and button to navigate   
       { name:"The Katriya Hotel",image:<img style={{width:"25rem",height:"18.75rem",marginTop:"0.625rem"}} src={hotelOneImage} alt="not found"/>,button:<button style={{marginTop:"1.25rem",width:"7rem",fontWeight:"bold",fontSize:"1rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}} disabled={isDisable1} onClick={handler1}>Book now</button>,message:<Message1/>,price:`Price - ₹1000 Per Day `},
       {name:"The Manohar Hotel",image:<img style={{width:"25rem",height:"18.75rem",marginTop:"0.625rem"}}src={hotelTwoImage} alt="not found"/>,button:<button style={{marginTop:"1.25rem",width:"7rem",fontWeight:"bold",fontSize:"1rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}} disabled={isDisable2} onClick={handler2}>Book now</button>,message:<Message2/>,price:`Price - ₹1500 Per Day ` },
       {name:'The Park Hyderabad',image:<img style={{width:"25rem",height:"18.75rem",marginTop:"0.625rem"}} src={hotelThreeImage} alt="not found"/>,button:<button style={{marginTop:"1.25rem",width:"6.25rem",fontWeight:"bold",fontSize:"1rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}} disabled={isDisable3} onClick={handler3}>Book now</button>,message:<Message3/>,price:`Price - ₹2000 Per Day ` },
       {name:'Lemon Tree Hotel',image:<img style={{width:"25rem",height:"18.75rem",marginTop:"0.625rem"}} src={hotelFourImage} alt="not found"/>,button:<button style={{marginTop:"1.25rem",width:"6.25rem",fontWeight:"bold",fontSize:"1rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}} disabled={isDisable4} onClick={handler4}>Book now</button>,message:<Message4/>,price:`Price - ₹3000 Per Day ` }]//hotels list

    
  
    return(//front end code
      
        <div   classNmae="container"style={{textAlign:"center",backgroundColor:"white",height:"100%"}} >
    
          <h1  className="sticky-top"style={{backgroundColor:"brown",textAlign:"center",width:"100%",color:"azure",position:"fixed",float:"inline-end",fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",textTransform: "uppercase",

fontStyle: "normal",fontSize:"1.25rem",height:"2.5rem",paddingTop:"0.625rem"}}>Hotels in Hyderabad</h1><br></br>
        <p style={{marginTop:"1.875rem",fontWeight:"bolder"}}>Search here for Hotels</p>
        <input style={{color:"black",backgroundColor:"white",width:"43.75rem",borderColor:"black",borderStyle:"solid",paddingLeft:"16.875rem"}} type='text' required='required' placeholder="enter hotel name to search" value={hotelname} onChange={Handler}/>
        <br></br>
        { hotels.filter(hotel=>{ // to filter data and display according to the user search
    if (hotelname==="") 
    {
        return hotel
    }
    else if (hotel.name.toLowerCase().includes(hotelname.toLowerCase()))
    {
      return hotel 
    }
}).map(hotel=>{// to display the data by user search
return(<div  classNmae="container" style={{marginLeft:"1.25rem"}}><br></br>
<p style={{borderStyle:"solid",boxSizing:"content-box",backgroundColor:"burlywood",width:"31.25rem",marginLeft:"22.5rem",height:"28.125rem",fontWeight:"bold"}}key={hotel.name}>{hotel.message}{hotel.name}<br></br>{hotel.image}<br></br>{hotel.price}<br></br>{hotel.button}</p>

</div>
)})}
      <button  style={{marginTop:"0.625rem",width:"6.25rem",fontWeight:"bold",fontSize:"1rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}} onClick={handler}>Back</button>
      < button style={{marginTop:"0.625rem",width:"7rem",fontWeight:"bold",fontSize:"1rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}} onClick={() => setIsOpen(true)} >Contact us</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
             <Contact/>     
      </Modal>
       <p style={{backgroundColor:"white",height:"30px"}}></p>
        </div>
    )
}
export default Book //default export 