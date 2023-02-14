import React from 'react'//import react
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'//import naviagtor hook
import { useState } from 'react'//import use state hook
import Loginpage from '../../css/Loginpage.module.css'// css for styling

function Login (){
        const navigate = useNavigate()// to navigate to other components
        const[userName1,setuserName1]=useState("")// state to store username entered by user 
        const[password1,setpassword1]=useState("")// state to store password entered by user 
        const userName=useSelector(state=>state. loginpage.userName)
        const password=useSelector(state=>state.loginpage.password)
        const changeUserName=(event)=>{  // function to set state entered by user
                
         setuserName1(event.target.value)//setting target value

                
        }

        
        const changePass=(event)=> // function to set state entered by user
                {
                  setpassword1(event.target.value)//setting target value

                }

        

        const submit=()=>{ // to verify  the username and password entered by user
               
                if(userName1===userName&& password1===password)//hardcoded value for login
                {
                        navigate('/Homepage')
                }
                
                else if(userName1==="admin" && password1==="admin")//admin credentials
                {
                      navigate('/Adminpage')
                }
               
                else if(userName1=="")
                {
                        alert("Please Enter the Username")
                }
                else if (password1=="")
                {
                        alert("Please Enter the Password ")
                }
                
               else{
                    alert("Enter the Correct Username and Password")
               }
        }
       
        return( //from end code
        
      <div className={` ${Loginpage.div}`}>
       <p className={Loginpage.p1}>
          Login to explore the beauties of capital cities in south india

      
       </p>
      
       <p className={Loginpage.p2}>Enter your username: <input name="three"  className={Loginpage.input1} type="text" id="username1" placeholder="enter your user name"required="required" value={userName1} onChange={changeUserName}/></p>
       <p className={Loginpage.p3}>Enter your password:  <input name="three" className={Loginpage.input2}  type="password" id="password1" placeholder="enter your password"required="required" value={password1} onChange={changePass}/></p>
       <button name='one' className={Loginpage.button1} onClick={submit}>Submit</button>
       <button name="four" className={Loginpage.input3} onClick={()=>navigate('/')}>Cancel</button>
       
       </div>
  
        )
    
}
export default Login//default export