import React from 'react'//import react
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"//bootstrap
import { NavLink } from 'react-router-dom';//importing react routing
import Carousel from 'react-bootstrap/Carousel';//carousel
import banglore from '../../css/banglore.module.css'//css for styling
import bangloreCarouselImagePalace1 from "../../images/banglorepalace.jpg" //image import
import bangloreCarouselImagePalace2 from "../../images/bengalurupalace2.jpg"//image import 
import bangloreCarouselImagePalace3 from "../../images/bengalurupalace3.jpg"//image import
import bangloreCarouselImageCubbonPark1 from "../../images/cubbonpark.png"//image import
import bangloreCarouselImageCubbonPark2 from "../../images/cubbonpark2.jpg"//image import
import bangloreCarouselImageCubbonPark3 from "../../images/cubbonpark3.jpg" //image import
import bangloreCarouselImageNandhiHills1 from "../../images/nandhihills.webp"//image import
import bangloreCarouselImageNandhiHills2 from "../../images/nandhihills2.jpg"//image import
import bangloreCarouselImageNandhiHills3 from "../../images/nandhihills3.jpg"//image import
import bangloreCarouselImageBannergattaZoo1 from "../../images/bannergattazoo.jpg" //image import
import bangloreCarouselImageBannergattaZoo2 from "../../images/bannergattazoo2.jpg" //image import
import bangloreCarouselImageBannergattaZoo3 from "../../images/bannergattazoo3.jpg"//image import
import bangloreCarouselImageIskonTemple1 from "../../images/iskontemple.jpg"//image import 
import bangloreCarouselImageIskonTemple2 from "../../images/iskontemple2.jpg" //image import
import bangloreCarouselImageIskonTemple3 from "../../images/iskontemple3.jpg"//image import
import bangloreImage from "../../images/bengaluru.webp"//image import


 function Banglore(){//React functional component
  return( //front end code      
   
    <div className={banglore.body}>
      <a id="one"></a>
      <nav
        className={`navbar-secondary sticky-top ${banglore.one}`} >
      <ul style={{ marginTop: "0px", paddingLeft: "15px", textAlign: "left", listStyle: "none", marginBottom: "0px", paddingBottom: "0px" }}>
        <li style={{ textAlign: "center" }}>
          Welcome To Bengaluru Tourism Page
        </li>
      </ul>
      <nav style={{ backgroundColor: "lightgrey", listStyle: "none", width: "4.5cm", height: "20cm", marginTop: "0cm", paddingleft: "0.3cm" }}><br></br>
        <li className="active" style={{ textDecoration: "none", textAlign: "left" }}>
          <NavLink style={{ textDecoration: "none" }} to={'/Homepage'}>Home</NavLink> 
        </li> <br></br>
        <li style={{ textDecoration: "none", textAlign: "left" }}>
          <a style={{ textDecoration: "none" }} href="#three">Bangalore Palace</a>
        </li> <br></br>
        <li style={{ textAlign: "left", textDecoration: "none" }}>
          <a style={{ textDecoration: "none" }} href="#four">Cubbon Park</a>
        </li><br></br>
        <li style={{ textAlign: "left", textDecoration: "none" }}>
          <a style={{ textDecoration: "none" }} href="#five">Nandi Hills</a>
        </li><br></br>
        <li style={{ textAlign: "left", textDecoration: "none" }}>
          <a style={{ textDecoration: "none" }} href="#six">Bannerghatta zoo</a>
        </li><br></br>
        <li style={{ textAlign: "left", textDecoration: "none" }}>
          <a style={{ textDecoration: "none" }} href="#seven">Iskcon Temple</a>
        </li><br></br>
        <li style={{ textAlign: "left", textDecoration: "none" }}>
          <a style={{ textDecoration: "none" }} href="#one">Top</a>
        </li>
      </nav>
    </nav>

    <div style={{ marginLeft: "5cm", marginRight: "5px" }}>
        <img style={{ paddingTop: "2cm", width: "100%", height: "500px" }} src={bangloreImage} alt="NOT FOUND" />

        <p title="one" style={{
          fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          fontStyle: "normal", textAlign: "justify"
        }}>
          Bangalore is the capital city of the southern Indian state of Karnataka. It is the seventh largest city in India. It is also known as the Garden City because of its many beautiful gardens and parks. The nandi hills in Bangalore is not to be missed by the pious. Though the origin of Bangalore is ancient, the present-day city was founded in the 16th century and has since continued to be an important administrative center. Because of the high concentration of IT industry, it also called the Silicon Valley of India. There are a number of good hotels in Bangalore like the Ashoka Hotel in Bangalore that make your stay in the Garden city comfortable.
          Bangalore city is located in the southern part of the state of Karnataka, in the southern region of India. It is 3,113 feet (949 m) above sea level, on top of a ridge in the Karnataka plateau. Bangalore is 998 km from Mumbai (Bombay) and 562 km from Hyderabad. The climate of Bangalore is moderate and pleasant. Summers are mild (April-June) and winters are cool (October-February). The city experiences southwestern monsoon rains in June-August.
          Legend has it that the city is named after an old woman, who lived in this area and offered a humble meal of boiled beans to a lost Hoysala ruler. The origin of the present-day city of Bangalore can be traced to the early 16th century, when Kempegowda, a local chief, built a small mud fort here. Bangalore gained prominence in the 18th century, when it became an important fort city, under Hyder Ali and Tipu Sultan of Mysore. This area witnessed the struggle between Tipu Sultan and the British. The British defeated Tipu Sultan and took over Bangalore city. In 1831, the British made it the regional administrative city and established a big cantonment here.
          <a id="three"></a>
        </p>

        <p className={banglore.two} style={{ color: "brown", marginBottom: "5px" }}>
          1.Bangalore Palace
        </p>
        <table>
            <tbody>
          <tr>
            <td>
            <Carousel  style={{  width:"31.25rem",
            height:"18.75rem"}}>
            <Carousel.Item  >
              <img
               style={{ width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImagePalace1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{  width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImagePalace2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{  width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImagePalace3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
   <td style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
   fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingleft:"0.3cm"}}>
       An epitome of great architecture and beauty, The Majestic Bangalore Palace preserves in it the spice of old regal opulence. Currently the central attraction in Bangalore, the palace was built in the year 1878. Chamarajendra Wadiyar's British Guardians bought the original property in 1873 from the principal of Bangalore Central High School, Rev, J Garret, from his funds. The palace is extraordinarily vast and spread across 45,000 square feet. A mixture of Tudor and Scottish Gothic architecture have resulted into the grand palace that we see today. The wooden structure of the palace along with the beautiful carvings both inside and outside showcases the royal culture in different ways.<br></br>
       Apart from being a major tourist destination, the palace is a host to different cultural events, rock shows, and marriages. As per beliefs, King Chamarajendra Wadiyar drew his inspiration for building the palace from the Windsor Castle of London.<br></br>    
   </td> 
          </tr>
          </tbody>
        </table>
        <a id="four"></a>
        <p style={{
          fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          fontStyle: "normal", textAlign: "justify"
        }}>
          The granite seats decorated with fluorescent blue ceramic tiles on the ground floor, a fairy tale Ballroom, the famous painter Raja Ravi Varma's paintings, vine-covered walls, and the Durbar Hall on the first floor come together to form the prepossessing Bangalore Palace.A visit to the palace gives you a chance to witness the elegant and lavish splendour of one of the most powerful dynasties of South India. An audio tape is available inside the Palace, both in Hindi and English, to help the people having language issues, understand its history better.</p>

        <p className={banglore.two} style={{ color: "brown", marginBottom: "5px" }}>
          2.Cubbon Park
        </p>
        <table>
            <tbody>
          <tr>
            <td style={{
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontStyle: "normal", textAlign: "justify", paddingRight: "0.3cm"
            }}>
              Spread over an area of 300 acres, Cubbon Park in the city of Bangalore is a major sightseeing attraction rich in green foliage. It is a green belt region of the city and is an ideal place for nature lovers and those seeking a calm atmosphere. Having been laid down by Lord Cubbon, the park is named so in his honour. It is home to more than 6,000 trees that support a vibrant ecosystem. In addition to being a natural sightseeing destination, some of the major structures of the city such as the Attara Kacheri, Cubbon Park Museum and Sheshadri Iyer Memorial Park are also situated here. Another famous attraction in the Cubbon Park is The Bangalore Aquarium, which is the second largest aquarium in India.<br></br>
          Cubbon Park was originally spread over 100 acres, which was later extended to 300 acres. First established in the year 1870 by Sri John Meade (acting Commissioner of Mysore), Cubbon Park has a long history.<br></br>
                    
                </td>
                <td >
            <Carousel  style={{  width:"31.25rem",
            height:"18.75rem"}}>
            <Carousel.Item  >
              <img
             style={{  width:"31.25rem",
             height:"18.75rem"}}
                src={bangloreCarouselImageCubbonPark1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{  width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImageCubbonPark2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
              style={{  width:"31.25rem",
              height:"18.75rem"}}
                src={bangloreCarouselImageCubbonPark3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
            </tr>
            </tbody>
        </table>
        <a id="five"></a>
        <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify "}}>
         Major General Richard Sankey (Chief Engineer of the State) conceived this park in honour of Sri John Meade. Initially, the park was called "Meade's Park" and later came to be known as the Cubbon Park. Since the introduction of the park, it was made and improved in many ways.
        In the year 1927, the park was officially renamed as "Sri. Chamarajendra Park" to mark the Silver Jubilee of Sri. Krishnaraja Wodeyar's rule in Mysore State. At present, the Cubbon Park is under the control of the Department of Horticulture. The Deputy Director of Horticulture (Cubbon Park) is responsible for the administration and maintenance of the park.
        </p>
        <p className={banglore.two}  style={{color: "brown",marginBottom: "5px"}}>
            3.Nandi Hills
        </p>
        <table>
            <tbody>
            <tr>
            <td >
            <Carousel  style={{  width:"31.25rem",
            height:"18.75rem"}}>
            <Carousel.Item  >
              <img
               style={{  width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImageNandhiHills1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
              style={{  width:"31.25rem",
              height:"18.75rem"}}
                src={bangloreCarouselImageNandhiHills2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
             style={{  width:"31.25rem",
             height:"18.75rem"}}
                src={bangloreCarouselImageNandhiHills3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
                 <td style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                 fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
                     Located around 60 kilometres away from Bangalore, Nandi Hills is one such tourist spot that has gradually been discovered by visitors over the years and has now become a well-known weekend getaway.

                    Featuring beautifully carved arches and majestic pillars with intricately painted walls and ceilings, Nandi Hills is scattered with shrines and monument and is surrounded by mesmerizing views, making this place no less than a hidden paradise.  Situated at a height of 4851 feet above sea level, you can see a convoy of weekenders from Bangalore during early hours catching the glimpse of sunrise.
          </td>
                <a id="six"></a>
            </tr>
            </tbody>
        </table>
        <p className={banglore.two}  style={{color: "brown",marginBottom: "5px"}}>
            4.Bannerghatta National Park
        </p>
        <table>
            <tbody>
            <tr>
                <td style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seriF",
                fontStyle: "normal",textAlign: "justify",paddingRight:"0.3cm"}}>
                Located 22 km away from Bangalore, the Bannerghatta National Park is a sanctuary for a large variety of flora and fauna. Spread over a massive area of around 104.27 sq. km, this national park was established in the year 1971. The park itself has a number of establishments within its confines, which includes the country's first butterfly park as well.<br></br>
                Other attractions here are ten Reserve Forests of Anekal Range of the Bangalore Forest Division, an aquarium, a zoo, Children's park, Crocodile Farm, Snake Park and Prehistoric Animals' Park. What's more, you can get up close and personal with the wondrous wildlife here by the means of a jungle safari, which is a popular activity to pursue here. The best part about Bannerghatta National Park is the small well-defined zones for animals that almost guarantees that you will spot the animals. People go in caged vehicles (buses/safari).

                </td>
                <td >
            <Carousel  style={{  width:"31.25rem",
            height:"18.75rem"}}>
            <Carousel.Item  >
              <img
              style={{  width:"31.25rem",
              height:"18.75rem"}}
                src={bangloreCarouselImageBannergattaZoo1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{  width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImageBannergattaZoo2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
             style={{  width:"31.25rem",
             height:"18.75rem"}}
                src={bangloreCarouselImageBannergattaZoo3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
                <a id="seven"></a>
            </tr>
            </tbody>
        </table>
        <p className={banglore.two}  style={{color: "brown",marginBottom: "5px"}}>
            5.ISKCON Temple
        </p>
        <table>
            <tbody>
            <tr>
                
               
            <td >
            <Carousel style={{  width:"31.25rem",
            height:"18.75rem"}}>
            <Carousel.Item  >
              <img
               style={{  width:"31.25rem",
               height:"18.75rem"}}
                src={bangloreCarouselImageIskonTemple1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
              style={{  width:"31.25rem",
              height:"18.75rem"}}
                src={bangloreCarouselImageIskonTemple2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
              style={{  width:"31.25rem",
              height:"18.75rem"}}
                src={bangloreCarouselImageIskonTemple3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
                <td style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                 fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
                 Located in the Rajajinagar area, ISKCON Temple is a revered shrine dedicated to Lord Krishna. The temple, under the guidance of Madhu Pandit Dasa, was inaugurated in the year 1997 by Shankar Dayal Sharma. Apart from a religious shrine, ISKCON temple is a cultural complex accommodating dedicated deities of Sri Sri Radha Krishnachandra, Sri Sri Krishna Balarama, Sri Sri Nitai Gauranga, Sri Srinivasa Govinda and Sri Prahlada Narasimha.<br></br>
                ISKCON Temple is known for its activities of engagement involving ardent devotees of Lord Krishna. The temple enrols members for life and arranges programs in their community centres for Krishna consciousness and awareness of the Lord. The temple community also organises songs and recitals admiring and praying to Krishna in public processions. Lectures and prayer services are regularly conducted here as well. In addition, the ISKCON temple community conducts a wide variety of activities directed towards rediscovering spirituality on an individual level as well as creating a spirit of harmony in the community.

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
)}
export default Banglore//default export
