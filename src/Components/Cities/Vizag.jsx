
import React from "react" //React import
import "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"//boostrap
import { NavLink } from "react-router-dom";//react router import
import Carousel from 'react-bootstrap/Carousel';//carousel
import vizag from '../../css/vizag.module.css'//css for styling

import vizagImage from '../../images/vishakapatanam.jpg'
import vizagCouroselBorraCavesImage1 from '../../images/borracaves.jpg'
import vizagCouroselBorraCavesImage2 from '../../images/borracaves2.jpg'
import vizagCouroselBorraCavesImage3 from '../../images/borracaves3.jpg'
import vizagCouroselSubmarineMuseumImage1 from '../../images/submarinemuesm1.jpg'
import vizagCouroselSubmarineMuseumImage2 from '../../images/ins.jpg'
import vizagCouroselSubmarineMuseumImage3 from '../../images/submarinemuesm3.jpg'
import vizagCouroselRishikondaBeachImage1 from '../../images/Rushikonda_beach.jpg'
import vizagCouroselRishikondaBeachImage2 from '../../images/rushikondabeach2.jpg'
import vizagCouroselRishikondaBeachImage3 from '../../images/rushikondabeach3.webp'
import vizagCouroselDolphinsNoseImage1 from '../../images/dolphinnose.png'
import vizagCouroselDolphinsNoseImage2 from '../../images/dolphinnose2.jpg'
import vizagCouroselDolphinsNoseImage3 from '../../images/dolphinnose3.jpg'
import vizagCouroselKatikiWaterFallsImage1 from '../../images/katikifalls.jpg'
import vizagCouroselKatikiWaterFallsImage2 from '../../images/katikifalls2.jpg'
import vizagCouroselKatikiWaterFallsImage3 from '../../images/katikifalls3.jpg'
import vizagCouroselArakuValleyImage1 from '../../images/arakuvalley.jpg'
import vizagCouroselArakuValleyImage2 from '../../images/arakuvalley2.jpg'
import vizagCouroselArakuValleyImage3 from '../../images/arakuvalley3.jpg'
function Vizag()//React functional component

 {
    return(//front end code
        <div className={vizag.body}>
            <a id="one"></a>

    <nav className={`navbar-secondary sticky-top ${vizag.one}`} style={{color:"azure",position: "fixed",float:"inline-end", width: "100%",marginTop:" 0px",marginLeft:" 0px",paddingLeft: "0px", marginBottom:" 0px",height:"1.2cm"}}>
        <ul style={{marginTop:"0px" ,paddingLeft:"15px",textAlign: "left",listStyle: "none", marginBottom: "0px",paddingBottom: "0px" }}>

<li style={{textAlign: "center"}}>
Welcome  To  Visakhapatnam  Tourism Page
</li>

</ul>

  <nav style={{backgroundColor:"lightgrey",listStyle: "none",width:"5cm",height:" 20cm",marginTop:"0.08cm", paddingLeft: "0.3cm"}}><br></br>

    <li className="active"style={{textDecoration: "none",textAlign: "left"}}>

        {/* <a  style={{textDecoration: "none"}}href="C:\Users\jeeva\OneDrive\Desktop\UI\homepage.html">Home</a> */}
          <NavLink style={{textDecoration:" none"}}to={'/Homepage'}>Home</NavLink>
       </li> <br></br>

       <li style={{textDecoration: "none",textAlign: "left"}}>

        <a  style={{textDecoration: "none"}}href="#three">Borra Caves</a>

       </li> <br></br>

       <li style={{textAlign: "left",textDecoration: "none"}}>

        <a  style={{textDecoration: "none"}}href="#four">Submarine Museum</a>

       </li><br></br>

       <li style={{textAlign: "left",textDecoration: "none"}}>

        <a  style={{textDecoration: "none"}}href="#five">Rishikonda Beach</a>

       </li> <br></br>

       <li style={{textAlign: "left",textDecoration: "none"}}>

        <a  style={{textDecoration: "none"}}href="#six">Dolphin's Nose</a>

       </li><br></br>

       <li style={{textAlign: "left",textDecoration: "none"}}>

        <a  style={{textDecoration: "none"}}href="#seven">Katiki Waterfalls</a>

       </li> <br></br>

       <li style={{textAlign: "left",textDecoration: "none"}}>

        <a  style={{textDecoration: "none"}}href="#eight">Araku Valley</a>

       </li><br></br>

       <li style={{textAlign: "left",textDecoration: "none"}}>

        <a  style={{textDecoration: "none"}}href="#one">Top</a>

       </li>

    </nav>

       

</nav>

    <div style={{marginLeft: "5.5cm",marginTop: "1.8cm",marginRight:"5px"}}>

        <table>
           <tbody>
            <tr>
                <td>
                    <img style={{width: "100%", height: "350px" }}src={vizagImage} alt="image not found"/>
                </td>
                </tr>
                <tr>
                <td title="one" style={{   fontFamily:"Gill Sans ,Gill Sans MT ,Calibri , Trebuchet MS, sans-serif",
                fontStyle: "normal", textAlign: "justify"}}>
                    Here is nothing like escaping to the seas from our busy, chaotic city lives. The feel of fresh air caressing our hair and warm waves splashing against our feet is one of the ideal forms of vacation. This exact dream like holiday destination can be yours in Visakhapatnam, also known as Vizag. A port city, it is known for its variety of industries, but beyond grey, concrete buildings are beautiful beaches, temples, caves and valleys.
                    The city is perpetually thronging with tourists, every one escaping to a few days of freedom and relief from hectic life. Imagine being able to visit a place that is nothing short of a treasure land. From history to culture to unlimited activities and unlimited places to visit, you have it all right here in Vizag.           
                    The joys of Visakhapatnam lie in its subtle hints at history, culture with a whiff of modernism in the air.<br></br> A dream holiday destination for the entire family, Visakhapatnam is more than just an Industrial city. Situated in the east coast of Andhra Pradesh, Visakhapatnam is named after Visakha, the Hindu God of valour and is more popularly known as Vizag.
                    Apart from being known for the numerous industries, having the country’s oldest shipyards and being the headquarters of the Eastern Naval Command of the Indian Navy; Vizag is also known as a major tourist destination with hordes of tourists thronging this beautiful city of Andhra Pradesh every year.               
                    With sprawling attractive beaches, ancient temples, beautiful caves and splendid valleys, this city of Destiny has something to offer for everyone.
                </td>
            </tr>
            </tbody>
        </table>

        <p style= {{  fontFamily:"Gill Sans, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

        fontStyle: "normal", textAlign: "justify"}}>

           

           This perfect amalgamation of some of the best aspects of a holiday destination is what makes the city one of the best places to visit with ample places to discover. Some of them include:

           <a id="three"></a>

        </p>

        <p className={vizag.two} style={{color: "brown",marginBottom: "5px"}}>

            1.Borra Caves

        </p>

       <table>
         <tbody>
        <tr>
            <td style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify",paddingRight:"0.3cm"}}>
                Located on the east coast of India, the Borra Caves are situated in the Ananthagiri hills of the Araku Valley in Visakhapatnam district. Breath taking hilly terrain, beautiful landscape, semi-evergreen moist deciduous forests, and wild fauna of the Borra Caves are a visual feast.
                A marvellous creation of nature, the Borra caves were formed when river waters flow through a limestone area, and the calcium carbonate turns into calcium bicarbonate, which is easily washed out by the running water. The most striking feature of the caves is its exquisite variety of speleothems ranging in size.      
                Borra Caves are deemed to be among the largest in the country and are perched at a whopping elevation of about 705 metres. They are basically karstic limestone structures extending to a depth of 80 m and are considered to be the deepest cave in India. The combination of <br></br>
           </td>
            <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={vizagCouroselBorraCavesImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselBorraCavesImage2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselBorraCavesImage3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
            </td>
        </tr>
        </tbody>
       </table>

       <p style={{  fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

       fontStyle: "normal", textAlign: "justify"}}>

sunlight and dark conjures amazing dancing shaped in the depths of the Borra Caves, which is a sight in itself.Natural skylights in the caves make way for colourful imagery that imparts them a unique enigma of their own. Animal lovers will find bats as well as the golden geckos hiding in the shadows of the niches. The journey up to the primary destination with its picturesque location and a thrilling hike is a treat in itself. Visit this destination and explore the unique beauty of Araku Valley in all its glory.

       <a id="four"></a>  

    </p>

       

       <p className={vizag.two} style={{color: "brown",marginBottom: "5px"}}>

        2. Submarine Museum

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
                src={vizagCouroselSubmarineMuseumImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselSubmarineMuseumImage2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselSubmarineMuseumImage3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>

            </td>
            <td style={{  fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
            Submarine Museum is located in Visakhapatnam in the south-eastern state of India. The museum is inside an actual submarine, INS Kurusura, which was India's 5th submarine. The museum is situated on RK beach, near the War Memorial in Visakhapatnam. The beautiful scenery of the clear blue waters and golden sand on the beach serves as a perfect location for the Submarine Museum. It is frequently visited by enthusiasts who want to know more about living in submarines. The museum has artefacts, pictures and articles that share stories of strength, sacrifice and patriotism of the warriors. They give insights on how difficult surviving can be with limited space and resources hundreds of feet underwater.<br></br>
            The INS Kurusura served the Indian Navy for 31 years before it was decommissioned in 2001. Post that, it was used a museum to spread 
            </td>
        </tr>
        </tbody>
       </table>

       <p style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

       fontStyle: "normal", textAlign: "justify"}}>

awareness about Indian Naval Forces, the technology used and its development in India.It is a one of a kind project that was launched by the Eastern Naval Command. The interiors of the submarine have been re-arranged to allow a clear view to the visitors. It is the only Submarine Museum in the entire of Asia.

       </p>

       <a id="five"></a>

       <p className={vizag.two} style={{color: "brown",marginBottom: "5px"}}>

        3.Rishikonda Beach

    </p>

    <table>
       <tbody>
        <tr>
            <td style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify",paddingRight:"0.3cm"}}>
                The Rishikonda Beach also known as Rushikonda Beach is a stunning shore located on the coast of the Bay of Bengal in Vishakhapatnam, in the Indian state of Andhra Pradesh. APTDC, which is in charge of this natural beauty, has done a great job in the upkeep of the beach and ensured that this natural attraction remains unspoilt. The Rishikonda Beach is thus rightly named as the 'Jewel of the East Coast', owing to its essential and intact beauty. The serene golden sands of the beach are located in the bosom of the Rishikonda hill. <br></br>
                Located in the midst of frothy blue sea and emerald greenery, the scenery that this beach boasts of is indeed mesmerising and breathtaking. This place is a favourite among water sports 
                lovers because of the range of activities that are offered here. 
            </td>
            <td>
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={vizagCouroselRishikondaBeachImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselRishikondaBeachImage2}
                alt="Second slide"
              />
      
           
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselRishikondaBeachImage3}
                alt="Third slide"
              />
      
             
            </Carousel.Item>
          </Carousel>
            </td>
        </tr>
        </tbody>
    </table>

    <p style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

    fontStyle: "normal", textAlign: "justify"}}>
 If you are in the mood for an adrenaline rush, you can indulge in the water sports that are offered here. The Rushikonda Beach is one of the few beaches that offers swimming under expert supervision, so do not forget to take a quick dip in the water. 
    However, the beach's natural charms are one of the main reasons for its immense popularity among local as well as foreign tourists.

        The Rishikonda Beach is an ideal destination for a peaceful weekend getaway and is located just 8 kilometres away from the port of Vishakhapatnam, making the place very accessible.

        <a id="six"></a>

    </p>

    <p className={vizag.two} style={{color: "brown",marginBottom: "5px"}}>

        4.Dolphin's Nose

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
                src={vizagCouroselDolphinsNoseImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselDolphinsNoseImage2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselDolphinsNoseImage3}
                alt="Third slide"
              />
      
             
            </Carousel.Item>
          </Carousel>
            </td>
            <td style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm",marginLeft:"0px"}}>
            Very similar to a dolphins nose, this 174 m high rocky headland is situated in the south of Vizag. The nose seems to be protruding out towards the Bay of Bengal giving it a rather fascinating look.<br></br>
            A renowned powerful light house highly useful for the shippers and has a light beam that can be seen as far as 64 km out at sea is also placed nearby. There is also a hill nearby named the Dolphin hill and is a restricted Armed forces residential area. The backside of the hill has a scenic, beautifully placed, secluded beach called yarada.
            </td>
        </tr> <a id="seven"></a>
        </tbody>
    </table>

    <p className={vizag.two} style={{color: "brown",marginBottom: "5px"}}>

        5.Katiki Waterfalls

    </p>

    <table>
       <tbody>
       <tr>
            <td style={{ fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontStyle: "normal", textAlign: "justify",paddingRight:"0.3cm" }}>
            Katiki Falls originates from River Gosthani about 90 kilometres from Visakhapatnam. The waterfall is located near the Borra Caves and is a famous attraction for picnickers and nature lovers. The natural landscape surrounding the waterfall is lush green and goes through an uneven path that adds an element of adventure to the visitors trekking their way to the waterfall. It is, therefore, an ideal attraction for beginner to intermediate level trekkers. There are several food kiosks on the way that serve snacks and beverages especially Bamboo Chicken and fresh Coconut Water. Taking a pit stop for a bite before proceeding won't be disappointing.<br></br>
            The cool breeze, the greenery and the soothing sounds of the Katiki Waterfall will take off all the worries in one's mind. The 50 feet high natural formation is a breathtaking sight from a distance. Do take a
            </td>
            <td >
            <Carousel  style={{  width:"500px",
            height:"300px"}}>
            <Carousel.Item  >
              <img
               style={{ width:"500px",
               height:"300px"}}
                src={vizagCouroselKatikiWaterFallsImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselKatikiWaterFallsImage2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselKatikiWaterFallsImage3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>

            </td>
        </tr>
        </tbody>
    </table>

    <p style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

    fontStyle: "normal", textAlign: "justify"}}>
 moment to listen to the birds singing their tunes as you sit in solitude or soak your feet into the cold river water.
    Those who wish to enter the waters can do so to enjoy some exciting moments with family and friends. Monsoons, in particular, are extremely beautiful with the natural vegetation thriving in the region. Katiki Falls is the place to be for those who wish to rejuvenate their souls

    </p>

    <a id="eight"></a>

    <p className={vizag.two} style={{color: "brown",marginBottom: "5px"}}>

        6.araku valley

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
                src={vizagCouroselArakuValleyImage1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item  >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselArakuValleyImage2}
                alt="Second slide"
              />
      
             
            </Carousel.Item>
            <Carousel.Item    >
              <img
               style={{ width:"800px",
               height:"300px"}}
                src={vizagCouroselArakuValleyImage3}
                alt="Third slide"
              />
      
              
            </Carousel.Item>
          </Carousel>
        </td>
         <td style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontStyle: "normal", textAlign: "justify", marginBottom: "0px",paddingLeft:"0.3cm"}}>
  
            Vizag is a popular tourist destination mainly known for its beaches. Located at a distance of 120 km from Vizag is a beautiful hill station called Araku which is as popular as the beaches of Vizag.
  
            Blessed with enchanting streams, lush green forests, beautiful waterfalls, sprawling coffee plantations, rich landscape and wonderful weather, Araku valley is no doubt a famous tourist destination attracting nature lovers, honeymoon couples, and adventure enthusiasts from all over the country.
          
            The journey to Araku valley by train is something that everyone should experience with tunnels, hill sides, streams, waterfalls making your journey truly mesmerising. The ride through the road is equally enchanting with sharp curves and beautiful sceneries along the way.
           
            Located at an altitude of 911 m above sea level, Araku is a must visit destination for tourists visiting Vizag.
        </td>
    </tr>
    </tbody>
</table>

    <p style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",

    fontStyle: "normal", textAlign: "justify"}}>
      Araku valley is mainly inhabited by tribals and the Tribal museum is one of the main attractions here. It houses tribal handicrafts and several artifacts depicting the lifestyle of tribal people.
        The tribal dance known as Dhimsa dance with tribals dressed in colorful attire is a must see for visitors coming to Araku.
         
            Araku is also known for its coffee plantations and boasts of manufacturing India’s first tribal growers’ organic coffee brand. Another major attraction of Araku valley, Padmapuram Gardens is widely visited by the tourists coming to Araku. The hanging cottages are one of the top attractions of Padmapuram gardens. The garden has a wide variety of beautiful plants and flowers and the toy train ride around the garden is quite popular among the kids.

            Araku is also blessed with beautiful waterfalls like Sangda waterfalls and Dumbriguda waterfalls. Araku doesn’t disappoint adventure lovers either as it is a famous trekking spot attracting adventure seekers from all over the country.

       

            A place of immense scenic beauty, Araku valley is a must visit tourist destination for every nature lover. The picturesque view of the landscape, the enchanting waterfalls, the amazing tribal culture, and the lush green forests makes this scenic hill station a place worth visiting by each and everyone.

           

    </p>

   

    </div><br></br>

    <footer style={{marginLeft:"5.5cm", fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>

    Contact me by react.team@gmail.com<br></br>
    Copyright © React Team.

    </footer><br></br>

    </div>
    )
    }
export default Vizag //default export

