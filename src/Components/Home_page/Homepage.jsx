import React from 'react'
import homepage from '../../css/homepage.module.css'
import { NavLink } from 'react-router-dom'
import vizagImage from "../../images/vizag.jpg"
import homePageImage from "../../images/homepage.jpg"
import bengaluruImage from "../../images/bengaluruhome.jpg"
import kochiImage from "../../images/kochihome.jpg"
import chennaiImage from "../../images/chennaihome.jpg"
function Homepage(){
     const handler=()=>{ // generating alert message while onClick by user
        alert('Are you sure to logout')
     }
    return(//front end code
<div className={homepage.body}>
<a id="one"></a>
<nav className={`${homepage.four}  navbar-secondary sticky-top`} style={{color:"azure",position: "fixed",float:"inline-end", width: "100%",marginTop: "0px",marginLeft: "0px",paddingLeft: "0px", marginBottom: "0px",height:"1.2cm",top:"0px"}}>
<ul style={{marginTop:"0px", paddingLeft:"15px",textAlign: "left",listStyle: "none", marginBottom: "0px",paddingBottom: "0px"}}>
<li style={{textAlign: "center"}}>
Welcome To South India  Tourism Page 
</li>
</ul>
<nav style={{backgroundColor:"lightgrey",listStyle: "none",width:"4.5cm",height: "20cm",marginTop:"0.1cm", paddingLeft: "0.3cm"}}><br></br>

   <li style={{textDecoration: "none",textAlign: "left"}}>
    <a  style={{textDecoration: "none"}}href="#three">Hyderabad</a>
   </li> <br></br>
   <li style={{textAlign: "left",textDecoration: "none"}}>
    <a  style={{textDecoration: "none"}}href="#four"> Visakhapatnam</a>
   </li> <br></br>
   <li style={{textAlign: "left",textDecoration: "none"}}>
    <a  style={{textDecoration: "none"}}href="#five">Bengaluru</a>
   </li> <br></br>
   <li style={{textAlign: "left",textDecoration: "none"}}>
    <a  style={{textDecoration: "none"}}href="#six">Kochi</a>
   </li> <br></br>
   <li style={{textAlign: "left",textDecoration: "none"}}>
    <a  style={{textDecoration: "none"}}href="#seven">Chennai</a>
   </li> <br></br>
   <li style={{textAlign: "left",textDecoration: "none"}}>
    <a  style={{textDecoration: "none"}}href="#one">Top</a>
   </li><br></br>
   <li style={{textAlign: "left",textDecoration: "none"}}>
   
    <NavLink style={{textDecoration:" none"}} to={'/'} onClick={handler}>Logout</NavLink> 
   </li> 
</nav>
    
</nav>
<a id="three"></a>
<img  style={{marginTop:"2.2cm ",width:"800px",height:"220px", marginLeft:"5cm",paddingLeft:"6.5cm" }}src={homePageImage}alt="not found"/>
<div className={homepage.two} style={{marginLeft: "5cm",marginTop: "1cm",marginRight:"0.08cm"}} >

<table cellspacing="10cm" >
<tr>
    <td className={homepage.one}>
        <p style={{paddingTop: "0.05cm",marginTop:"0px",textAlign: "center ",marginBottom:"0px"}}>HYDERABAD</p>
        <img style={{width: "200px",height:"200px"}}src="https://media-cdn.tripadvisor.com/media/photo-s/01/85/33/7e/charminar-the-brand-of.jpg" alt="image not found"/>
        
    </td>
    <td style={{paddingLeft:"1.5cm ",textAlign:"justify",paddingRight:"10px"}}>
        Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale 
        restaurants and shops.Its historic sites include Golconda Fort, a former diamond-trading center that was once 
        the Qutb Shahi dynastic capital. 
        The Pearl City, Hyderabad with its unmatched blend of history and modernity, hypnotizes everyone, whoever sets his/her foot in this beautiful city of Nizams. With a  history as old as 400 years  and the status of metropolitan city, Hyderabad promises a unique refreshing experience to all.
   <br></br>
        <NavLink  style={{color:"brown",fontWeight:"bold"}} to={'/Hyderabad'}>Click here to explore</NavLink>
    </td>
</tr> <a id="four"></a>
</table> 
</div>

<div className={homepage.two} style={{marginLeft: "5cm",marginTop:"1cm",marginRight:"0.08cm"}}>
<table cellspacing="10cm" >
<tr>
<td className={homepage.one}>
    <p style={{paddingTop: "0.05cm",marginTop:"0px",textAlign: "center" ,marginBottom:"0px"}}>VISAKHAPATNAM</p>
    <img style={{width: "200px",height:"200px"}} src={vizagImage} alt="iamge not found"/>
    
</td>
<td style={{paddingLeft:"1.5cm ",textAlign: "justify",paddingRight:"10px"}}>
    Here is nothing like escaping to the seas from our busy, chaotic city lives. The feel of fresh air caressing our hair and warm waves splashing against our feet is one of the ideal forms of vacation. This exact dream like holiday destination can be yours in Visakhapatnam, also known as Vizag. A port city, it is known for its variety of industries, but beyond grey, concrete buildings are beautiful beaches, temples, caves and valleys.

    The city is perpetually thronging with tourists, every one escaping to a few days of freedom and relief from hectic life. Imagine being able to visit a place that is nothing short of a treasure land.
    <br></br>
    <NavLink style={{color:"brown",fontWeight:"bold"}} to={'/Vizag'}>Click here to explore</NavLink>
</td>
</tr>
</table>
</div>
<a id="five"></a>
<div className={homepage.two} style={{marginLeft: "5cm",marginTop: "1cm",marginRight:"0.08cm"}}>
<table cellspacing="10cm" >
<tr>
    <td className={homepage.one}>
        <p style={{paddingTop:" 0.05cm",marginTop:"0px",textAlign: "center ",marginBottom:"0px"}}>BENGALURU </p>
       <img style={{width: "200px",height:"200px"}}src={bengaluruImage} alt="iamge not found"/>
       
    </td>
    <td style={{paddingLeft:"1.5cm ",textAlign:"justify",paddingRight:"10px"}}>
        Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its  
        parks and nightlife.By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore   
        Palace,modeled after England’s Windsor  Castle,and Tipu Sultan’s Summer Palace, an 18th-century teak structure. 
        <br></br>
        <NavLink style={{color:"brown",fontWeight:"bold"}} to={'/Banglore'}>Click here to explore</NavLink> 
    </td>
</tr>
</table>
</div>
<a id="six"></a>
<div className={homepage.two} style={{marginLeft: "5cm",marginTop: "1cm",marginRight:"0.08cm"}}>
<table cellspacing="10cm" >
<tr>
    <td className={homepage.one}>
        <p style={{paddingTop: "0.05cm",marginTop:"0px",textAlign: "center ",marginBottom:"0px"}}>KOCHI </p>
       <img style={{width: "200px",height:"200px"}}src={kochiImage} alt="iamge not found"/>
       
    </td>
    <td style={{paddingLeft : "1.5cm ",textAlign:"justify",paddingRight:"10px"}}>
        Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, when a flood carved  out its harbor 
        and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial  
        bungalows and diverse houses of worship. Cantilevered Chinese fishing nets,typical of Kochi, have been in use for centuries.
          <br></br> 
        <NavLink style={{color:"brown",fontWeight:"bold"}} to={'/Kochi'}>Click here to explore</NavLink>
    </td>
</tr>
</table>
</div>
<a id="seven"></a>
<div className={homepage.two} style={{marginLeft: "5cm",marginTop: "1cm",marginRight:"0.08cm",marginBottom: "0px"}}>
<table cellspacing="10cm" >
<tr>
    <td class={homepage.one}>
        <p style={{paddingTop: "0.05cm",marginTop:"0px",textAlign: "center",marginBottom:"0px"}}>CHENNAI</p>
        <img style={{width: "200px",height:"200px"}}src={chennaiImage} alt="iamge not found"/>
       
    </td>
    <td style={{paddingLeft:"1.5cm" ,textAlign:"justify",paddingRight:"10px"}}>
        Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now 
        a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. 
        Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century 
         Anglican church.<br></br>
         <NavLink style={{color:"brown",fontWeight:"bold"}} to={"/Chennai"}>Click here to explore</NavLink>
    </td>
</tr>
</table>
</div><br></br>
<footer style={{marginLeft:"5.5cm",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
Contact me by react.team@gmail.com<br></br>
Copyright © React Team.
</footer><br></br>
</div> 
)
}export default Homepage // default export
