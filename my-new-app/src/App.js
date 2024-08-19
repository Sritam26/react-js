import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import Alerts from './components/Alert';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const[alert,setalert]=useState(null); 
  const showalert=(message,type)=>{
   setalert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setalert(null)
   }, 2000);

  }
const[mode,setmode]=useState("light");
const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success') 
}
const toggle=(cls)=>{
  removeBodyClasses();
  console.log(cls)
  document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743'
    showalert("you are in dark mode","success")
  }
  else{
    setmode('light')
    document.body.style.backgroundColor='white';
    showalert("you are in light mode","success")


  }

}
return(
   
<>
<Router>
  <Navbar title="Text utils" about="About Textutils" toggle={toggle} mode={mode}/>
<Alerts alert={alert}/>
  <div className="container my-5">
  <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
    <Textform heading="Enter the text to analyze" mode={mode} showalert={showalert}/>
            </Route>
        </Switch>
        </div>
{/* <div><About/></div> */}
</Router>

    </> 
  );
}

export default App;
