import React from 'react'
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import hyderabad from '../../css/hyderabad.module.css'
import hyderabadImage from "../../images/hyderabad.jpg"
import TouristChat from "./../TouristChat/Client/TouristChat"
import hyderabadCarouselImageCharminar1 from "../../images/charminar.jpg"
import hyderabadCarouselImageCharminar2 from "../../images/charminar2.jpg"
import hyderabadCarouselImageCharminar3 from "../../images/charminar3.jpg"
import hyderabadCarouselImageGolconda1 from "../../images/golconda.jpg"
import hyderabadCarouselImageGolconda2 from "../../images/golconda2.jpg"
import hyderabadCarouselImageGolconda3 from "../../images/golconda3.jpg"
import hyderabadCarouselImageRamojifilm1 from "../../images/ramojifilmcity.jpg"
import hyderabadCarouselImageRamojifilm2 from "../../images/ramojifilmcity2.jpg"
import hyderabadCarouselImageRamojifilm3 from "../../images/ramojifilmcity3.jpeg"
import hyderabadCarouselImageNtrgardens1 from "../../images/ntrgardens.jpg"
import hyderabadCarouselImageNtrgardens2 from "../../images/ntrgardens2.jpg"
import hyderabadCarouselImageNtrgardens3 from "../../images/ntrgardenss2.jpg"
import Book from './../Book';
import Modal from './../Modals/Modal.js'
import Weather from './../Weather';
import Modal3 from '../Modals/Modal3';
import Comment from './../comments/Comment';
import Modal1 from '../Modals/Modals1';
import Music from '../MusicPlayer/Music';
import Modal4 from '../Modals/Modal4';

const BUTTON_WRAPPER_STYLES = {  
  position: 'relative',
  zIndex: 1
}

function Hyderabad() {//React functional component

  const [isOpen, setIsOpen] = useState(false) // state which stores boolean
  const [isOpened, setisOpened] = useState(false) // state which stores boolean
  const [isOpen1, setIsOpen1] = useState(false) // state which stores boolean
  const [isOpen2, setIsOpen2] = useState(false) //usestate for setting the value to variable
  const [isOpen3, setIsOpen3] = useState(false) //usestate for setting the value to variable
  
  const handler = () => { // function to set state 
    setisOpened(!isOpened)
  }


  return (//front end code

    <div id="menu" className="containers " >
      {isOpened ? <Book handler={handler} /> :  //Conditional rendering between Book component and Hyderabad component 
        <>
          <a id="one"></a>
          <nav
            className={`navbar-secondary sticky-top ${hyderabad.one}`}
            style={{
              color: "azure", position: "fixed", float: "inline-end", width: "100%", marginLeft: " 0px", paddingLeft: " 0px", marginBottom: " 0px", height: "3rem"

            }}>
            <ul style={{  paddingLeft: "15px", textAlign: "left", listStyle: "none", marginBottom: "0px", paddingBottom: " 0px" }} >
              <li style={{ textAlign: "center" }}>
                Welcome To Hyderabad Tourism Page
              </li>
            </ul>
            <nav style={{ backgroundColor: "lightgrey", listStyle: "none", width: "11.25rem", height: " 300rem", marginTop: "1.5625rem", paddingLeft: "0.5rem" ,marginBottom: "0.8rem"}}>
              <li className="active" style={{ textDecoration: "none", textAlign: "left" }}>
                {/* <a style={{textDecoration:" none"}} href="C:\Users\jeeva\OneDrive\Desktop\UI\homepage.html">Home</a> */}
                <NavLink style={{ textDecoration: " none" }} to={'/Homepage'}>Home</NavLink> 
              </li> <br></br>
              <li style={{ textDecoration: "none", textAlign: "left" }}>
                <a style={{ textDecoration: "none" }} href="#three">Charminar</a>
              </li><br></br>
              <li style={{ textAlign: "left", textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }} href="#four"> Golconda Fort</a>
              </li><br></br>
              <li style={{ textAlign: "left", textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }} href="#five">Ramoji Film City</a>
              </li> <br></br>

              <li style={{ textAlign: "left", textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }} href="#six">NTR Gardens</a>
              </li> <br></br>
              <li style={{ textAlign: "left", textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }} href="#one">Top</a>
              </li><br></br>
              <li style={{ textAlign: "left" }}>
                <button style={{ textAlign: "center", width: "7.5rem",height:"2rem", borderStyle: "solid"  ,fontSize:"1rem",padding:"0rem"}} onClick={handler}>Book Now</button>
              </li>
              <br></br>
              <li style={{ textAlign: "left" }}>
                
                    <button  style={{ textAlign: "center",width: "7.5rem",fontSize:"1rem", borderStyle: "solid",height:"2rem" ,padding:"0rem"}}onClick={() => setIsOpen(true)} className={hyderabad.weatherbtn}>Check Weather</button>

                    <Modal open={isOpen} onClose={() => setIsOpen(false)}> 
                      <Weather /> 
                    </Modal>
                 
               
              </li>
              <br></br>
              <li style={{ textAlign: "left" }}>
                
                  
                    <button   style={{ textAlign: "center",width: "7.5rem",fontSize:"1rem", borderStyle: "solid",height:"2rem",padding:"0rem" }}onClick={() => setIsOpen1(true)} className={hyderabad.cmtbtn}>Comments</button>

                    <Modal3 open={isOpen1} onClose={() => setIsOpen1(false)}> 
                        <Comment/> 
                    </Modal3>
                
               
              </li> <br></br>
              <li style={{ textAlign: "left" }}>
               
         
                    <button  style={{ textAlign: "center",width: "7.5rem",fontSize:"1rem", borderStyle: "solid",height:"2rem",padding:"0rem" }} onClick={() => setIsOpen2(true)} className={hyderabad.cmtbtn}>Tourist Chat</button>

                    <Modal1 open={isOpen2} onClose={() => setIsOpen2(false)}>
                        <TouristChat/>
                    </Modal1>
                  
              </li><br></br>
              <li style={{ textAlign: "left", textDecoration: "none" }}>
              <button style={{ textAlign: "center", width: "7.5rem",height:"2rem", borderStyle: "solid" ,fontSize:"1rem",padding:"0rem"}}>< a style={{ textDecoration: "none" }} href="#seven">Music Player</a></button>
                  </li>
              
            </nav>

          </nav>


          <div style={{ marginLeft: "11.875rem", marginTop: "3.125rem", marginRight: "0.08cm", backgroundColour: "white" }} >
            <table  >
              <tbody>
                <tr >
                  <td >
                    <img style={{ width: "100%", height: "28.125rem" }} src={hyderabadImage} alt="image not found" />
                  </td>
                </tr>
                <tr>
                  <td title="one" style={{
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontStyle: " normal", textAlign: "justify", color: "black"
                  }}>
                    The Pearl City, Hyderabad with its unmatched blend of history and modernity, hypnotizes everyone, whoever sets his/her foot in this beautiful city of Nizams. With a  history as old as 400 years  and the status of metropolitan city, Hyderabad promises a unique refreshing experience to all.

                    From historical monuments to natural getaways to mouth-watering world famous cuisine to appealing shopping places and thrilling entertainment parks, this city has it all to keep you glued.

                    There are many tourism places to visit in Hyderabad, from families, young group of friends, children to senior citizens, everyone will find something of their interest in Hyderabad.

                    This city is a place worth visiting at least once in a lifetime. In fact, it is impossible for anyone to soak in the multifarious charms which the city has to offer in a limited time span.

                    Located on the banks of the Musi River, the city of Hyderabad was established in 1591 CE by Muhammad Quli Qutb Shahies. The city is noted for its unique culture, a lineage which can be traced back to the Asaf Jahi rulers, who were great patrons of literature, art,architecture, culture, jewelry collection and rich food.

                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontStyle: "normal", textAlign: "justify"
            }}>
              The moment you emerge from the Hyderabad airport, the city that immediately hits the eye is a sprawling metropolis of shopping malls, flyovers and office buildings with glass facades. And you are left wondering, where did the largest princely state of the Nawabs vanish?

              The city of Hyderabad depicts an interesting confluence of the traditional and the modern, the past and the present. So, don't feel betrayed by these inventions, synonymous of modernity as alongside the metropolis Hyderabad, also exists the Old City with an altogether unique charm of its own.

              Hyderabad can be divided into the historic city established by Muhammad Quli Qutb Shah on the southern side of the Musi River that forms the Old City, while the New City encompasses the urbanised area on the northern banks.

              The Old City is composed of a maze of disorienting alleyways that expand outward from the Charminar. Most of the historical attractions are situated in the old city. Here is a list of the most popular tourist spots in Hyderabad; the ones which you mustn’t not miss:
              <a id="three"></a>
            </p>




            <p className={hyderabad.two} style={{ color: " brown", marginBottom: "5px" }}>
              1.CHARMINAR
            </p>
            <table >
              <tbody>
                <tr>
                  <td  style={{
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontStyle: "normal", textAlign: "justify", paddingRight: "0.3cm"
                  }}>
                    The capital city of Telangana, Hyderabad is a popular tourist destination and presents its visitors with a mesmerising contrast of age old traditions, culture at one end and modern facilities, amenities of a metropolitan city at the other end. Hyderabad is one city, which has no dearth of tourist attractions.

                    The very well known Charminar of Hyderabad is located at the Old City. This square shaped structure with a height of 56 m and breadth of 30 m was constructed in 1591. It was built by Sultan Mohammed Quli Qutb Shah in the honor of his wife Bhagmati.

                    Also referred as the ‘Arc de Triomphe of the East’, Charminar is adorned with four towers in each corner. The minarets on each side, is of 48.7 m height, each with four storeys. Chaminar has a small mosque as well on the top floor. There are 45 prayer spaces which are still visited by people, particularly on Fridays. Lighting in the evening is quite glamorous and makes for a worth watching site.

                  </td>
                  <td  >
                    <Carousel style={{  width:"31.25rem",
            height:"18.75rem"}}>
                      <Carousel.Item  >
                        <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                          src={hyderabadCarouselImageCharminar1}
                          alt="First slide"
                        />

                      </Carousel.Item>
                      <Carousel.Item  >
                        <img
                          style={{  width:"31.25rem",
                          height:"18.75rem"}}
                          src={hyderabadCarouselImageCharminar2}
                          alt="Second slide"
                        />


                      </Carousel.Item>
                      <Carousel.Item    >
                        <img
                          style={{  width:"31.25rem",
                          height:"18.75rem"}}
                          src={hyderabadCarouselImageCharminar3}
                          alt="Third slide"
                        />


                      </Carousel.Item>
                    </Carousel>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontStyle: "normal", textAlign: "justify", marginTop: "0px"
            }}>
              Charminar was built by Sultan Mohammed Quli Qutb Shah in 1591. It is said that this square shaped structure with four pillars and intricate carvings was built in honour of his wife, Bhagmati. However, the actual reason behind building Charminar is still not clear.

              As per a popular belief, Charminar was built to acknowledge the elimination of the plague which had affected the entire city immensely during that era. It is believed that the Sultan had prayed for the end of this plague with which his people were suffering. Hence, as the plague ended, he built the charminar as a tribute to Allah. The four pillars are also said to be dedicated to the first four caliphs of Islam.

              It is also said that it was built in the memory of Prophet Muhammed’s son in law who lost his life at the battle of Karbala as its design is in the shape of Shiya Tazias. Some also believe that the location of Charminar is the place where Sultan had seen his then future wife Bahgmati for the first time.

              <a id="four"></a>
            </p>
            <p className={hyderabad.two} style={{ color: "brown", marginBottom: "5px" }}>
              2. Golconda Fort
            </p>
            <table>
              <tbody>


                <tr>
                  <Carousel style={{  width:"31.25rem",
            height:"18.75rem"}}>
                    <Carousel.Item  >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageGolconda1}
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item  >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageGolconda2}
                        alt="Second slide"
                      />


                    </Carousel.Item>
                    <Carousel.Item    >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageGolconda3}
                        alt="Third slide"
                      />


                    </Carousel.Item>
                  </Carousel>
                  <td style={{
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontStyle: "normal", textAlign: "justify", marginBottom: "0px", paddingLeft: "0.3cm"
                  }}>
                    Just 11 km away from the city, the architectural marvel Golconda Fort is well connected to the rest of the city. Built by Qutub Shahi Kings, this fort presents an impressive structure, with eight gates and 87 bastions.

                    Its impressive structure has majestic walls which are as high as 15 to 18 foot and a parameter of close to 11 km. Along with brilliant architecture, this fort also captivates its visitors with its system of acoustics, its water supply system, 'Rahban' cannon and Ramdas’ prison which has carved Hindu deity in it.

                    The light and the sound show in English, Hindi and Telugu language with the voice over by the Bollywood superstar Amitabh Bachchan is something one must not miss when visiting the Fort. Please note that Camera Tripods are not allowed inside.
                    Golconda Fort Hyderabad is an outstanding example of brilliant engineering and magical architecture.<br></br>

                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontStyle: " normal", textAlign: "justify"
            }}>
              Located at a distance of 11km from the city, it is the most famous of all Hyderabad tourist places. The name of the fort has been derived from the Telugu words "Golla" and "Konda" which together means 'Shepherd's Hill'.

              However, do keep in mind the Golconda Fort timings and entry fee before planning a visit to this regal symbol of history. For instance, Golconda fort timings are from 9 am to 5.30 pm. <br></br>
              After that, visitors are not allowed to enter the fort, unless they are going for the light and show at night. Hence, to explore the beauty of this place at leisure, plan you visit early in the day.

              An impressive structure, which once, would have bewitched every onlooker, stands majestically even today.Golconda Fort is sure to impress you with not only with that highly advanced techniques were used back then and sturdy structure, but also with an outstanding view of the surrounding city.

              The sunset from the top of the fort, is awe-inspiring. One of Hyderabad's most popular and supreme monuments, Golconda Fort allures every visitor with its unparalleled beauty and grandeur. A Hyderabad Tour is incomplete without a visit to this fort.
              <a id="five"></a>
            </p>
            <p className={hyderabad.two} style={{ color: "brown", marginBottom: "5px" }}>
              3. Ramoji Film City
            </p>
            <table>
              <tbody>
                <tr>
                  <td style={{
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontStyle: "normal", textAlign: "justify", paddingRight: "0.3cm"
                  }}>
                    Since 1991, Ramoji Film City has been alluring tourists from every corner of the country. One of the largest film studios in the world it has the capacity to house almost 50 film units within a given point of time.

                    It is also listed in Guinness Book of World Records as well. Spread over 2500 acres, it is situated about 30 km away from Hyderabad. Its brilliant architecture and sound technical facilities make it suitable for all the pre and post production of a film.

                    Its various sets like London Street, Hollywood sign, Japanese gardens, etc; landscapes; vintage buses; and many other features such as Filmi Duniya, Action, Interactive Entertainment, etc, makes a trip to Ramoji memorable.Located at a distance of 30 km from the city of Hyderabad, Ramoji Film City is on the NH-9. Established in the year of 1996, Ramoji Film City is one of the most popular sightseeing places of Hyderabad. Ramoji Rao, the eminent Telugu film producer wanted to build a studio similar to that of Hollywood.

                  </td>
                  <Carousel style={{  width:"31.25rem",
            height:"18.75rem"}}>
                    <Carousel.Item  >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageRamojifilm1}
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item  >
                      <img
                      style={{  width:"31.25rem",
                      height:"18.75rem"}}
                        src={hyderabadCarouselImageRamojifilm2}
                        alt="Second slide"
                      />


                    </Carousel.Item>
                    <Carousel.Item    >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageRamojifilm3}
                        alt="Third slide"
                      />


                    </Carousel.Item>
                  </Carousel>
                </tr>
              </tbody>
            </table>
            <p style={{
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontStyle: "normal", textAlign: "justify"
            }}>
              He established the Film city with the help of art director Nitish Roy.

              One of the largest and glamorous film studios in the world, Ramoji Film City has also place in the Guinness Book of World Records. Spread across an area of almost 2500 acres, it is one of the major film making facility of the country offering everything related to pre and post film production. The architecture of the studio and the wide range of settings makes it one of the favourite spot for many film makers.
              With a capacity to accommodate close to 50 film units at the same time, Ramoji Film City offers umpteen numbers of film sets such as London Street, Hollywood sign, Japanese gardens, airport, hospital, etc. , landscapes and buildings as well as laboratories.

              <a id="six"></a>
            </p>
            <p className={hyderabad.two} style={{ color: "brown", marginBottom: "5px" }}>
              4. NTR Gardens
            </p>
            <table>
              <tbody>
                <tr>
                  <Carousel style={{  width:"31.25rem",
            height:"18.75rem"}}>
                    <Carousel.Item  >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageNtrgardens1}
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item  >
                      <img
                        style={{  width:"31.25rem",
                        height:"18.75rem"}}
                        src={hyderabadCarouselImageNtrgardens2}
                        alt="Second slide"
                      />


                    </Carousel.Item>
                    <Carousel.Item    >
                      <img
                       style={{  width:"31.25rem",
                       height:"18.75rem"}}
                        src={hyderabadCarouselImageNtrgardens3}
                        alt="Third slide"
                      />


                    </Carousel.Item>
                  </Carousel>
                  <td style={{
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontStyle: " normal", textAlign: "justify", marginBottom: "0px", paddingLeft: "0.3cm"
                  }}>
                    Spread over an area of 36 acres, the captivating NTR Gardens was developed in the memory of late Shri N T Rama Rao. Not just lush green landscape, this park also has a wide range of recreational choices for visitors such as boating, machan tree, etc.

                    There is ample of place especially for children. You will have ample of eating options as well, including cafes, restaurant and eat out joints. The mini train offering a short ride through the park is major attractions.
                    Built in the memory of late Shri N T Rama Rao, former and one of the most popular chief ministers of Andhra Pradesh, NTR Memorial Gardens are one of the famous sightseeing places of Hyderabad. Spread across an area of 36 acres, NTR Gardens present a soothing atmosphere and refreshing setting to spend some time. The garden has been built with an approximate cost of Rs. 40 crore. It was in 2002, when the NTR garden of Hyderabad was opened to the public.




                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontStyle: "normal", textAlign: "justify"
            }}>
              The Garden offers various kinds of recreational options as well. Some of these are boat ride, Japanese garden, Roaring Cascade, a Fountain, etc. There is a Children's playing area that keeps kids entertained. The massive entrance plaza with Nandi Bulls is also quite captivating.
              A mini train on a single track takes the visitors all around the garden making your visit all the more enjoyable. Along with toy train, there is a wide array of recreational facilities at the NTR Garden. One of the latest additions to the NTR garden is the Desert Garden, brain child of Mr. Nitish Roy, who has designed this project. It is consisted of about 150 plant varieties, mainly of those plants which are commonly referred as desert plants such as cacti, succulents, etc.
            </p>
            <a id="seven"></a>
          </div>
          <div style={{marginBottom: "6.8rem"}}className= {hyderabad.playsection}>

            <Music/></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <footer style={{ marginLeft: "5.5cm", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
            Contact me by react.team@gmail.com<br></br>
            Copyright © React Team.
          </footer>
        </>
      }

    </div>


  )
}
export default Hyderabad //default export