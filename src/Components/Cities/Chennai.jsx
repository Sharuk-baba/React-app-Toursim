
import React from 'react'//import react
import chennai from '../../css/chennai.module.css'//css for styling
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"//bootstrap
import { NavLink } from 'react-router-dom'; //react router import
import Carousel from 'react-bootstrap/Carousel'; //carousel
import chennaiImage from '../../images/chennai.jpg'
import chennaiMueImg from '../../images/muesumchennai.jpg'
import govmue2 from '../../images/governmentmuesm2.jpeg'
import marinaBeachChennai from '../../images/marinabeach.jpg'
import marinaChennai1 from '../../images/marinabeach2.jpg'
import marinaChennai2 from '../../images/marinabeach3.jpg'
import govMueImg from '../../images/governmentmueseum3.jpg'
import marundeeshwara from '../../images/MarundeeswararTemple.jpg'
import marundeeshwara1 from '../../images/marundeeswarartemple2.jpg'
import marundeeshwara2 from '../../images/marundeeswarartemple3.jpg'
import anzoo from '../../images/annazoo.png'
import anzoo1 from '../../images/annazoo2.jpg'
import anzoo2 from '../../images/annazoo3.jpg'
import kollihill from '../../images/KOLLI-HILLS.jpg'
import kollihill2 from '../../images/kolli-hills2.jpg'
import kollihill3 from '../../images/kolli-hills3.jpg'
function Chennai() {//react functional component
  return (//front end code

    <div className={chennai.body}>
        
           
            <a id="one"></a>
                <nav className={`${chennai.one}   navbar-secondary sticky-top`} style={{color:"azure",position: "fixed",float:"inline-end", width: "100%",marginTop: "0px",marginLeft: "0px",paddingLeft: "0px", marginBottom: "0px",height:"1.2cm" }}><ul style={{marginTop:"0px", paddingLeft:"15px",textAlign: "left",listStyle: "none", marginBottom: "0px",paddingBottom: "0px" }}>
                <li style={{textAlign: "center"}}>
            Welcome To Chennai Tourism Page 
        </li>
        </ul>
          <nav style={{backgroundColor:"lightgrey",listStyle: "none",width:"5cm",height:"20cm",marginTop:"0.08cm", paddingLeft: "0.3cm"}}><br></br>
            <li className="active"style={{textDecoration: "none",textAlign: "left"}}>
        <NavLink  style={{textDecoration: "none"}} to={'/Homepage'}>Home</NavLink> 
       </li> <br></br>
       <li style={{textDecoration: "none",textAlign: "left"}}>
        <a  style={{textDecoration: "none"}} href="#three">Marina Beach</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}}href="#four">Government Museum</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}}href="#five">Marundeeswarar Temple</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}}href="#six">Arignar Anna zoo</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}}href="#seven">Kolli Hills</a>
       </li> <br></br>
       <li style={{textAlign: "left",textDecoration: "none"}}>
        <a  style={{textDecoration: "none"}}href="#one">Top</a>
       </li> 
    </nav>
        
    </nav>
    
    <div style={{marginLeft: "5.5cm",marginRight:"5px"}} >
        <img   style={{ paddingTop: "2cm",width:"100%",height:"350px"}}src={chennaiImage} alt="loading"/>
        <a id="three"></a>
        <p title="one" style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify"}}>
        Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church.<br></br>
        Being one of the biggest economic and educational centres of South India, Chennai has become one of the top places for IT firms and many other businesses to flourish.We’re sure that you too must have visited this ever-hustling city at least once for official work or are going to in near future! Have ever thought of exploring Chennai and the beautiful monuments it has? Read on to know about top 5 Chennai tourist places on your next business trip to jazz up your mood.
        </p>
        <p className={chennai.two} style={{color: "brown",marginBottom: "5px"}} >
            1.Marina Beach
        </p>
        <table>
            <tbody>
            <tr>
                
            <td  >
               <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={marinaBeachChennai}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={marinaChennai1}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={marinaChennai2}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
               </td> 
               <td style={{  fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
                Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in India with almost 30,000 visitors a day. <br></br>
                With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.<br></br>
                
                </td>
            </tr>
            </tbody>
        </table>
        <a id="four"></a>
        <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle:" normal", textAlign: "justify"}}>
         The Marina Beach has an interesting history attached to it. Before the Madras Harbour was built, what the beach was nothing more than a strip of mud infested with mudskippers. The beach was formed a s a result of regular sand deposits towards the present day road until 1881, when the harbour was built.
       The pristine beauty of the Marina beach was first noticed by Mountstuart Elphinstone Grant Duff, who was the governor of Madras and he commissioned the building of a boulevard along the stretch of sand. From 1881 to 1886, the beach was diligently worked upon and in 1884 it was christened the Madras Marina by Elphinstone himself. A number of structures were added to the Marina beach's coastline from the 19th century onwards.
        </p>
        <p className={chennai.two} style={{color: "brown",marginBottom: "5px"}} >
            2.Government Museum
        </p>
<table>
<tbody>
    <tr>
        <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal",textAlign: "justify",paddingRight:"0.3cm"}}>
        Government Museum was established in 1851 and is the second oldest museum in the country after the Indian Museum in Kolkata. Situated in Egmore suburb of Chennai, it is built in the Indo-Sarcenic style and houses a rich collection of the works of Raja Ravi Varma.

        </td>
        <td  >
               <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={chennaiMueImg}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={govmue2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={govMueImg}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
               </td> 
    </tr>
    </tbody>
</table>
<p className={chennai.two} style={{color: "brown",marginBottom: "5px"}} >
    3.Marundeeswarar Temple
</p>
<table>
    <tbody>
    <tr>
    <td  >
               <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={marundeeshwara}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={marundeeshwara1}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={marundeeshwara2}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
               </td> 
        <td  style={{  fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal",textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form of Marundeeswar or Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must visit for anyone visiting Chennai or nearby cities.<br></br>
Glorified in the 7th-8th century by Nayanars (Saivite Saints), Tirugnana Sambandar, and Appar, the temple was expanded by the Chola Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been a place of worship especially for people with diseases and those facing various problems with their health. The prasadam here is a mixture of sacred ash, water, and milk which is believed to cure any ailments. One must visit the temple to encounter the miraculous power it is said to have.Amongst the many legends associated with the temple, one of them explains why Lord Marundeeswarar is known as he is because he is said to 

        </td>
    </tr>
    </tbody>
</table>
<a id="six"></a>
<p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify "}}>
        have taught the great Sage Agastya about a magical medicine. The temple is also known for its one and a half ft. self-manifested Shivalinga. It also contains the statues of Lord Vinayaka and Lord Muruga. 
      Furthermore, it hosts many festivals such as Shivrathri, Skanda Sashti, and Vinayaka Chaturti. Hence, the temple even has a festive aura all around the year. Owing to its historical significance, this temple is a serene and peaceful place to be when in or around Chennai.
        </p>
        <p className={chennai.two} style={{color: "brown",marginBottom: "5px"}} >
            4.Arignar Anna Zoological Park
        </p>
        <table>
            <tbody>
            <tr>
                <td style={{   fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontStyle: "normal", textAlign: "justify",paddingRight:"0.3cm"}}>
          One of the most popular picnic spots in Vandalur, the Arignar Zoological Park is an amazing place to discover the flora and fauna of the region.  A favourite weekend spot with both children and adults alike, the Arignar Zoo is situated at a distance of 32 kilometres from Chennai city.

             It is the largest zoo of its kind in South East Asia and is sprawled over an area of 1260 acres. In addition to having an extensive collection of endemic and exotic animals, visitors can experience the wild first hand with a trip to safari parks where lions and deer can be easily spotted.<br></br>
            Housing as many as 138 different species of organisms, this destination is every nature lover's paradise. Arinagar Anna Zoological Park is home to a variety of animals such as Himalayan brown bear, lion, tiger, elephant and Indian civit cat.

           The zoo also has a reptile house which houses various species of reptiles including the king cobra, python, viper any much more. In addition to this, they have a small built-in Jurassic park which just adds on.
                </td>
                <td  >
               <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={anzoo}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={anzoo1}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={anzoo2}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
               </td> 
                <a id="seven"></a>
            </tr>
            </tbody>
        </table>
        <p className={chennai.two} style={{color: "brown",marginBottom: "5px"}} >
            5.Kolli Hills
        </p>
        <table>
            <tbody>
            <tr>
            <td  >
               <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={kollihill}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kollihill2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={kollihill3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
               </td> 
                <td style={{  fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
With an ominous name which means ‘Mountain of Death’, Kolli Hills or Kolli Malai are a mountain range located in the Namakkal district of Tamil Nadu. It is relatively untouched by commercial tourism and therefore has retained most of its natural magnificence. 

The mountains are famous for not only their natural beauty but also have religious significance because of the Arappaleshwar Temple which is dedicated to Lord Shiva. The peak is accessible via road as well and the road leading up to it is winding with several twists and turns.<br></br>
The trek begins at Puliancholai. Cultivated flat fields end at Puliancholai and forest territory begins beyond this point. The river bed is rocky, flat and wide and the trail goes right next to it. Walk on the along the river until you reach a stage where the river crosses points. The crossings at this stage are easy and you have to simply jump from one rock to another.  <br></br>             
</td>
            </tr>
            </tbody>
        </table>
        <p style={{   fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify"}}>
        There is an entry fee of Rs.10 per head and the last entry time is 3 p.m. At the base is a 10 ft wide pool which has a variable depth of 3ft to 6 ft. Wade/swim through the water holding on to the fixed ropes and get to the base of the water fall. 
        The first one hour of the trail runs along the river until it forks right and leaves the river behind. Continue walking down this trail. The vegetation becomes thicker and you enter tall shrubs and trees. The trail is gradually begins to ascend for the next 30 minutes.

        In the next half an hour you come to a clearing from where you can see the Raasipuram town below. This is an indicator of half the trail being completed. From the clearing the trail moves to the right and the ridge line which is your destination is seen. Follow the trail until you reach a few point in the next 20 minutes. Three fourths of the climb has been completed.<br></br>
        The last stretch lasts for about thirty minutes and you are required to walk along the ridge. Walk down the trail through the paddy fields. Cross a few houses and take the foot trail which descends into another stream. Cross the stream and in 10 minutes you can see the temple at Kolli Malai. The temple marks the end of the trek.

The trek to Koli Hills is not said to be complete until a visit to the Akash Ganga Falls. The falls are located 1070 steps below.
        </p>
        </div><br></br>
        <footer style={{marginLeft:"5.5cm", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }}>
          Contact me by react.team@gmail.com<br></br>
    Copyright © React Team.

        </footer><br></br>

    </div>
  )
}

export default Chennai //default export
