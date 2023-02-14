
import React from 'react'//React import
import emailjs from 'emailjs-com'//emiljs library import
import  "C:/Users/269559/Desktop/react/case-study/node_modules/bootstrap/dist/css/bootstrap.min.css"//boostrap
function Contact(){//React functional component
    function sendEmail(e){//event handler

        e.preventDefault();
        emailjs.sendForm('service_opsfqzj', 'template_khnl1z9',e.target,'8Z_BP10oQLmOxe8D9'
        ).then(res=>{
            console.log(res);

        }).catch(err=>console.log(err));
         
        alert("Details sent Successfully")
    }
    return(//front end code
       
       
        <div className='container border' 
        style={{marginTop:"0px",backgroundImage:"url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')",backgroundPosition:"center",marginLeft:"5px",backgroundSize:"cover", width:"90%",height:"500px",opacity:"90%"}}>
        <h1 style={{marginTop:"25px"}}>Contact Form</h1>
        <form className='row' style={{margin:"0px 0px 0px 0px",}} onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' name='name' className='form-control'/>
            <label>E-mail</label>
            <input type='text' name='user_email' className='form-control'/>
            <label>Message</label>
            <textarea name='message' rows='4' className='form-control'/>
            <input type='submit' value='send' className='form-control btn btn-primary' style={{marginTop:"30px" }} />
           
        </form>
        </div>
       
    )
}
export default Contact //default export
