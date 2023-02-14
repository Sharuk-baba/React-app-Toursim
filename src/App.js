import logo from './logo.svg';
import './App.css';
import Banglore from './Components/Cities/Banglore';
import Hyderabad from'./Components/Cities/Hyderabad'
import Vizag from './Components/Cities/Vizag'
import Mainpage from './Components/Landing_page/Mainpage';
import Signup from './Components/Signup page/Signup';
import Login from './Components/login page/Login';
import Homepage from './Components/Home_page/Homepage';
import Book from './Components/Book';
import Hyderabadhotels1 from './Components/hyderabadhotels/Hyderabadhotels1';
import {BrowserRouter} from "react-router-dom"
import {Routes,Route}from 'react-router'
import Store from './redux/store/Store';
import Hyderabadhotels2 from './Components/hyderabadhotels/Hyderabadhotels2';
import { Provider } from 'react-redux';
import Hyderabadhotels3 from './Components/hyderabadhotels/Hyderabadhotels3';
import Hyderabadhotels4 from './Components/hyderabadhotels/Hyderabadhotels4';
import Adminpage from './Components/Admin page/Adminpage';
import Kochi from "./Components/Cities/Kochi"
import Chennai from "./Components/Cities/Chennai"
import Hotel1reviewpage from './Components/hyderabadhotels/Hotel1reviewpage';

function App() {
  return (
    <div  style={{marginTop:"0px"}}>
      <Provider store={Store}>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path ='/Signup' element={<Signup/>}/>
      <Route path='/Homepage' element={<Homepage/>}/>
      <Route path='/Hyderabad' element={<Hyderabad/>}/>
      <Route path='/Banglore' element={<Banglore/>}/>
      <Route path="/Vizag" element={<Vizag/>}/>
      <Route path="/Kochi" element={<Kochi/>}/>
      <Route path="/Chennai" element={<Chennai/>}/>
     <Route path='/Book' element={<Book/>}/>
     <Route path='/Hyderabadhotels1' element={<Hyderabadhotels1/>}/>
     <Route path='/Hyderabadhotels2' element={<Hyderabadhotels2/>}/>
     <Route path='/Hyderabadhotels3' element={<Hyderabadhotels3/>}/>
     <Route path='/Hyderabadhotels4' element={<Hyderabadhotels4/>}/>
     <Route path="/Adminpage" element={<Adminpage/>}/>
     <Route path="/Hotel1reviewpage" element={<Hotel1reviewpage/>}/>
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
