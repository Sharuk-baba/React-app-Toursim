import { useState } from "react";//importing react useState hooks

import { AiFillStar } from "react-icons/ai"//star icon import 

import { useNavigate } from "react-router";//navigate hook import
import { useSelector } from "react-redux";


function Hotel1reviewpage() {//react functional component

    const Name=useSelector(state=>state.loginpage.name) // storing the data from store to variable
    const mobileNumber=useSelector(state=>state.loginpage.mobilenumber) // storing the data from store to variable

    const Navigate = useNavigate()//navigate hook



    const [Formfield, setFormfield] = useState([{

        hotelname: "The Katriya Hotel"

        , name: Name

      

        , email: ""

        , mobilenumber: mobileNumber

        , comments: ""

        , rating1: null

    }])//useState hook for setting for value



    const handler = (event, index) => {//event hanlder

        let data = [...Formfield]

        data[index][event.target.name] = event.target.value//setting value to target

        setFormfield(data)

    }

    const submit = () => {
        console.log(Formfield)
        alert(`submitted successfully`)//alert

    }

    return (//front end code

        <div style={{ height: "609px", width: "100%", marginTop: "0px", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundImage: `url("https://img.freepik.com/premium-photo/businessman-touches-virtual-tab-bar-evaluates-products-services_50039-1719.jpg?w=996")` }}>

            <h1 style={{ marginTop: "0px", textAlign: "center", color: "red", fontWeight: "bolder", marginRight: "200px" }}>WE APPRECIATE YOUR REVIEW!</h1>

            <p style={{ textAlign: "center", color: "white", fontWeight: "bold", marginRight: "200px" }}>Your review will help us to improve our hotel facilities, and customer services.</p>

            <form onSubmit={(event) => {

                event.preventDefault()//prevent reload automatically

            }}>

                {

                    Formfield.map((form, index) => {//mapping form data and index in objects

                        return (//front end code

                            <div style={{ marginLeft: "0px" }}>

                                <br></br>

                                <label style={{ color: "pink", marginLeft: "300px" }} > Name:<input style={{ color: "black", marginLeft: "100px" }} type="text" name="name" placeholder="name" value={form.name}  disabled={true} onChange={event => handler(event, index)} /></label><br></br><br></br>

                                

                                <label style={{ color: "pink", marginLeft: "300px" }}>Email-id:<input style={{ color: "black", marginLeft: "85px" }} type="text" name="email" placeholder="email" value={form.email} onChange={event => handler(event, index)} /></label><br></br><br></br>

                                <label style={{ color: "pink", marginLeft: "300px" }}>Mobile Number:<input style={{ color: "black", marginLeft: "30px" }} type="text" name="mobilenumber" placeholder="enter mobile number" maxLength={10} value={form.mobilenumber} disabled={true} onChange={event => handler(event, index)} /></label><br></br><br></br>

                                <label style={{ color: "pink", marginLeft: "300px" }} >Comments:<textarea style={{ color: "black", marginLeft: "68px" }} name="comments" placeholder="enter your comments" value={form.comments} onChange={event => handler(event, index)} /></label><br></br><br></br>

                                <label style={{ color: "pink", marginLeft: "300px" }}>Rating:

                                    {[...Array(5)].map((star, index1) => {

                                        const ratingvalue = index1 + 1

                                        return (

                                            <label>

                                                <input type="radio" style={{ display: "none" }} name="rating1" value={ratingvalue} onChange={(event) => handler(event, index)} />

                                                <AiFillStar style={{ cursor: "pointer", transition: "color 200ms" }} color={ratingvalue <= form.rating1 ? "yellow" : "grey"} size={50} />

                                            </label>

                                        )
                                    })}

                                </label>

                            </div>

                        )

                    }

                    )

                }

            </form>

            <br></br>

            <button style={{ marginLeft: "500px", color: "red", marginRight: "0px" }} onClick={submit}>Submit</button>
            <button  style={{marginLeft:"0px",color:"red",marginRight:"0px"}}onClick={()=>Navigate('/Hyderabadhotels1')}>Back</button>
            {Formfield.map((form, index) => {

                return (

                    <div key={index}>

                        <label style={{ color: "white" }}>Name: {form.name}</label><br></br>

                        <label style={{ color: "white" }}>Rating: {form.rating1}</label><br></br>

                        <label style={{ color: "white" }}>Comments: {form.comments}</label>

                    </div>

                )

            })}



        </div>

    )



}



export default Hotel1reviewpage //default export