import React from 'react'
import signup from'../../css/signup.module.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import loginpageaction from "./../../redux/loginpage/loginpageactions/loginpageaction"
import { useDispatch } from 'react-redux'

function Signup(){
 const navigate=useNavigate() // to navigate to other components
 const [name,setName]=useState('') // state to store name entered by user 
 const [mobileNumber,setmobileNumber]=useState('') // state to store name entered by user 
 const [username,setusername]=useState('') // state to store userName entered by user 
 const[password1,setPassword1]=useState('') // state to store password entered by user 
 const[rePassword,setRePassword]=useState('') // state to re-password name entered by user 
 const puserName=new RegExp("[a-z][0-9]{2,10}$")// regular expression to test users input
 let ppassword=new RegExp("[a-z][0-9]{2,10}$")// regular expression to test users input
 let pname=new RegExp("[a-z]{5,20}$")// regular expression to test users input
 const dispatchAction=useDispatch()// to dispatch action when button onClick

const changeName=(event)=>{ // function to set state 
  setName(event.target.value)
  
}
const changeUserName=(event)=>{ // function to set state 
                
  setusername(event.target.value)//settng target value

         
 }

 const changePassword=(event)=> // function to set state 
 {
   setPassword1(event.target.value)//settng target value

 }
 const changeRePassword=(event)=> // function to set state 
 {
   setRePassword(event.target.value)//settng target value


 }
 const changemobileNumber=(event)=> // function to set state 
 {
   setmobileNumber(event.target.value)//settng target value


 }
const submit=()=>{ // condition to verify regular expressions and empty textbox 
  if(name==="")
 {
  alert("Please Enter your Name")
 }
 else if(username==="")
 {
  alert("Please Enter your Username")
 }
 else if(password1==="")
 {
  alert("Please Enter your Password")
 }
 else if(rePassword==="")
 {
  alert("Please Enter your Repassword")
 }
    
    else if(puserName.test(username)===false)
  {  
     alert("Enter the Valid Username ")
  }
  
  else if(ppassword.test(password1)===false)
  {
     alert("Enter the Valid Password ")
  }
  
  else if(pname.test(name)===false)
  {
     alert("Enter the Valid Name ")
  }
  else if(rePassword!==password1)
  {
    alert("Please Check Password and Re-Entry Password")
  }
 
 else{
  dispatchAction(loginpageaction(username,password1,name,mobileNumber))
    navigate("/Login")
 }
}
      return(//front end code
         <div className={signup.body}>
             
             <p  className={signup.p1}>
             Create account to explore the capital cities in south india
             </p>
             <div className={signup.div}>
      
           
             <p className={signup.p2}>Enter your name:   <input name="three" className={signup.input1} type="text" id="name" placeholder="enter your  name"required="required" value={name} onChange={changeName}/></p>
             <p className={signup.p3}>Enter your username:<input name="three" className={signup.input2} type="text" id="username" placeholder="enter your  username" required="required" value={username} onChange={changeUserName}/></p>
             <p className={signup.p4}>Enter your password: <input name="three"  className={signup.input3} type="password" id="password" placeholder="enter your password"required="required" value={password1} onChange={changePassword}/></p>
             <p className={signup.p5}>Re-enter your password: <input name="three"   className={signup.input4}type="password" id="re-entrypassword" placeholder="re-enter your password"required="required" value={rePassword} onChange={changeRePassword} /></p>
             <p className={signup.p4}>Enter your Mobile-No: <input name="three"  className={signup.inputnumber} type="text" id="mobilenumber" placeholder="enter your number"required="required" value={mobileNumber} maxLength={10} onChange={changemobileNumber}/></p>
             <p className={signup.p6}>Date-of-Birth: <input name="three"className={signup.input5}type="date" id="birthdate" placeholder="yyyy-mm-dd" required="required" min={"2000-01-01"} max={"2020-01-01"}/></p>
         
            

          <button style={{marginLeft:"90px"}} onClick={submit}>Submit</button>
           
       <button onClick={()=>navigate('/')}>Cancel</button>
      
         </div>


        </div>
    )
}
export default Signup//default export