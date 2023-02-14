
import React from 'react'//React import
import kochi from '../../css/kochi.module.css'//css for styling
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css" //boostrap
import { NavLink } from 'react-router-dom'; //react router import
import Carousel from 'react-bootstrap/Carousel'; //carousel
import kochiImage from "../../images/kochi3.webp"
import kochiCarouselImageKathak1 from "../../images/kathak1.jpg"
import kochiCarouselImageKathak2 from "../../images/kathak2.jpg"
import kochiCarouselImageKathak3 from "../../images/kathak3.jpg"
import kochiCarouselImagePalace1 from "../../images/mattacherrypalace1.jpg"
import kochiCarouselImagePalace2 from "../../images/mattacherrypalace2.jpg"
import kochiCarouselImagePalace3 from "../../images/mattacherrypalace3.jpg"
import kochiCarouselImageBeach1 from "../../images/cheraibeach1.jpg"
import kochiCarouselImageBeach2 from "../../images/cheraibeach2.jpg"
import kochiCarouselImageBeach3 from "../../images/cheraibeach3.jpg"
import kochiCarouselImageDrive1 from "../../images/marinedrive1.jpg"
import kochiCarouselImageDrive2 from "../../images/marinedrive2.jpg"
import kochiCarouselImageDrive3 from "../../images/marinedrive3.jpg"
import kochiCarouselImageWillingdon1 from "../../images/willingdon1.jpg"
import kochiCarouselImageWillingdon2 from "../../images/willingdon2.jpg"
import kochiCarouselImageWillingdon3 from "../../images/willingdon3.jpg"

function Kochi(){//React Functional component
    return(//Front end code


        <div className={kochi.body}>
        <div id="menu" className="containers ">
              <a id="one"></a>
               <nav
               className={ `navbar-secondary sticky-top ${kochi.one}`} 
                style={{color:"azure" ,position: "fixed" ,float:"inline-end" , width: "100%" ,marginTop: "0px" ,marginLeft: "0px", paddingLeft: "0px" , marginBottom: "0px" ,height:"1.2cm "}}>
                    <ul style={{marginTop:"0px" , paddingLeft:"15px" ,textAlign: "left" ,listStyle: "none" , marginBottom: "0px" ,paddingBottom: "0px"}}>
<li style={{textAlign: "center"}}>
    Welcome To Kochi Tourism Page 
</li>
</ul>
  <nav style={{backgroundColor:"lightgrey" ,listStyle: "none" ,width:"5.2cm" ,height: "20cm" ,marginTop:"0.08cm" , paddingLeft: "0.3cm"}}><br></br>
    <li className="active"style={{textDecoration: "none" ,textAlign: "left"}}>
        <NavLink style={{textDecoration: "none"}} to={'/Homepage'}>Home</NavLink>
       </li> <br></br>
       <li style={{textDecoration: "none",textAlign: "left"}}>
        <a  style={{textDecoration: "none"}} href="#three">Kathakali Centre</a>
       </li><br></br>
       <li style={{textAlign: "left", textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}} href="#four">Mattancherry Palace</a>
       </li> <br></br>
       <li style={{textAlign: "left" ,textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}} href="#five">Cherai Beach</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none" }} href="#six">Marine Drive</a>
       </li> <br></br>
       <li style={{textAlign: "left" , textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}} href="#seven">Willingdon Island</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}} href="#one">Top</a>
       </li> 
    </nav>
        
</nav>
    <div style={{marginLeft: "5.5cm" ,marginRight:"5px"}} >
        <img   style= {{paddingTop: "2cm" ,width:"100%" ,height:"350px"}} src={kochiImage} alt=""/>
        
        <p  title="one" style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify"}}> 
       Kochi , also known as Cochin  (the official name until 1996) is a major port city on the Malabar Coast of India bordering the Laccadive Sea, which is a part of the Arabian Sea. It is part of the district of Ernakulam in the state of Kerala and is commonly referred to as Ernakulam. Kochi is the most densely populated city in Kerala. As of 2011, it has a corporation limit population of 677,381 within an area of 94.88 km2 and a total urban population of more than of 2.1 million within an area of 440 km2, making it the largest and the most populous metropolitan area in Kerala. Kochi city is also part of the Greater Cochin region and is classified as a Tier-II city by the Government of India. The civic body that governs the city is the Kochi Municipal Corporation, which was constituted in the year 1967, and the statutory bodies that oversee its development are the Greater Cochin Development Authority (GCDA) and the Goshree Islands Development Authority (GIDA). The current metropolitan limits of Kochi include the mainland Ernakulam, Fort Kochi, the suburbs of Edapally, Kalamassery, Aluva and Kakkanad to the northeast; Tripunithura to the southeast; and a group of islands closely scattered in the Vembanad Lake.

       Called the "Queen of the Arabian Sea", Kochi was an important spice trading centre on the west coast of India from the 14th century onward, and maintained a trade network with Arab merchants from the pre-Islamic era.
       <a id="three"></a>
       </p>
        <p className={kochi.two} style={{color: "brown",marginBottom: "5px"}} >
           1.Kerala Kathakali Centre
        </p>
        <table>
            <tbody>
            <tr>
            <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={kochiCarouselImageKathak1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageKathak2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageKathak3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
                <td style= {{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",              
                  fontStyle: "normal", textAlign: "justify",marginBottom: "0px",paddingLeft:"0.3cm"}}>
Kerala Kathakali Centre at Fort Cochin has seen many dance performances! The amount of effort put in by the dancers is commendable. It is usually rife with locals and foreign tourists who come to enjoy the dance show. It also has morning meditation shows which one can take part in. The architecture of the Kerala Kathakali Centre is something special. The centre’s interiors follow the Malabar style of architecture and are mostly made up of beautiful wood carvings which gives the place a very traditional, yet appealing look.<br></br>
Apart from Kathakali, the centre is also known to for its short-term as well as long-term courses in dance styles such as Bharatnatyam, Kuchipudi and Mohinattam. It also has courses in Kalaripayattu, Classical music (both Carnatic as well as Hindustani), Percussion instruments such as Drums, Tabla, Madalam, String instruments such as Violin, Veena and Sitar and the flute.
                </td><a id="four"></a>
            </tr>
            </tbody>
        </table>
        <p className={kochi.two}  style={{color: "brown",marginBottom: "5px"}}>
            2.Mattancherry Palace
        </p>
        <table>
            <tbody>
            <tr>
                <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontStyle: "normal", textAlign: "justify", paddingRight:"0.3cm"}}>
                   Popularly known as the Dutch Palace, the Mattancherry Palace is a Portuguese palace in Mattancherry, Kochi, in the state of Kerala. Mattancherry Palace is now a museum displaying paraphernalia belonging to the rajas of Kochi. Visit this destination to learn about the fascinating history of Kerala through the medium of irreplaceable artefacts and embellishments.<br></br>
                   The grandeur of Mattancherry Palace lies in its simplicity and it is built in the typical Kerala style mansions reserved for the nobility. The four separate wings of the Mattancherry Palace surround a central courtyard which has a temple as well. It features murals depicting portraits and exhibits of the Rajas of Kochi. They have been painted in warm colours using the tempera technique and consists of a portrait gallery of the Cochin Rajas and beautiful mythological murals.
                </td>
                <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={kochiCarouselImagePalace1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImagePalace2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImagePalace3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
                 <a id="five"></a>
            </tr>
            </tbody>
        </table>
        <p className={kochi.two}  style={{color: "brown",marginBottom: "5px"}}>
            3.Cherai Beach
        </p>
        <table>
            <tbody>
            <tr>
            <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={kochiCarouselImageBeach1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageBeach2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageBeach3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>

                <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontStyle: "normal", textAlign: "justify",paddingLeft:"0.3cm"}}>
Cherai Beach, which is one of the best-voted beaches of the state, is situated at a distance of 30 km from Kochi city. Its strategic location on the northern end of the Vypin Island in Kochi makes it a perfect merging point of the sea and backwaters. The surrounding greenery and the seashells present in different shapes and Chinese fishing nets add to the beauty of the sea. Its coastline alone runs for about 15 km and plays a distinguishing factor from all the other beaches.<br></br>
Also known as the 'Princess of the Arabian Sea' it is a perfect spot for relaxation having a picturesque view and beachfront combined. One can also witness high mask lamps with beautiful lights which illuminate the way and makes the walkway edges worth visiting and an absolute pleasure to be at during the night.<br></br>
                </td>
            </tr>
            </tbody>
        </table>
        <a id="six"></a>
        <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify"}}>
         There is a park for the kids as well alongside the beach where kids can play and spend a lovely time with their families and friends. Visitors can hire speedboats as well as water-scooters on rent which double the fun. One can also find accommodation easily since there are several hotels and resorts around the area at a reasonable cost.
    </p>
    <p className={kochi.two} style={{color: "brown", marginBottom: "5px"}}>
        4.Marine Drive
    </p>
    <table>
        <tbody>
        <tr>
            <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify", paddingRight:"0.3cm"}}>
            Overlooking the serene backwaters of Kerala is Marine Drive, one of the most popular hangout spots in the city of Kochi. It is a picturesque promenade with a walkway of about three kilometres and is a fantastic place to spend some time leisurely, either in the company of loved ones or even some alone time.<br></br>
            Boulevard of Marine Drive stretches from Jankar Jetty in the north to the Ernakulam Boat Jetty in the south. Important landmarks nearby include The Marine Walkway, The Rainbow Bridge, The Houseboat Bridge, The China Net Bridge and GCDA Shopping Complex. So if you are looking to discover the very essence of what Kochi is all about, Marine Drive is just the place for you. 

            </td>
            <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={kochiCarouselImageDrive1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageDrive2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageDrive3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
            <a id="seven"></a>
        </tr>
        </tbody>
    </table>
    <p className={kochi.two} style={{color: "brown",marginBottom: "5px"}}>
        5.Willingdon Island
    </p>
    <table>
        <tbody>
        <tr>
        <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={kochiCarouselImageWillingdon1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageWillingdon2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kochiCarouselImageWillingdon3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
            
            <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify",paddingLeft:"0.3cm"}}>
            The Willingdon Island is one of the largest human-made islands in India which is named after Lord Willingdon, the British Viceroy of India. This beautiful island provides various links between Kochi port and other national and international ports. Furthermore, the island is home to some of the lavish hotels and commercial and industrial buildings of the district. It is between Ernakulum Jetty and Kochi Port and the ferry costs around INR 6.<br></br>
            There is a bridge that connects the mainland of Kochi to Wellington Island. This human-made island also serves as the headquarter for the southern naval command of India. Created by Sir Robert Bristow, a visionary harbour engineer, the island is significant as it is the habitat for the Port of Kochi, the Kochi Naval Base of the Indian Navy and Central Institute of Fisheries Technology. Apart from commercial purposes, the island has a museum and natural habitat to explore.

            </td>
        </tr>
        </tbody>
    </table>
    </div><br></br>
    <footer style={{marginLeft:"5.5cm", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
    Contact me by react.team@gmail.com<br></br>
    Copyright © React Team.
    </footer><br></br>

        </div>
    </div>
    )
}
export default Kochi // default export
