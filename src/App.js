import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"
function App() {
  const [btnText, setbtnText] = useState("🌙");
  const [mode,setMode]=useState('info');
  const [alert,setAlert]=useState(null);
  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode=()=>{
    if(mode==='info'){
      setMode('dark');
      setbtnText('☀️');
      document.body.style.backgroundColor='#042743'
      document.body.style.color='#1AEEB2'
      showAlert("  Dark Mode enabled","success !!")
    }
    else{
      setMode('info'); 
      setbtnText('🌙');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("  Light Mode enabled","success !!") 
    }
  }
  return (
    <Router>
    <Navbar title="SPELL IT" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
    <Alerts alert={alert}/>
    <div className="container">
      <Routes>
        <Route path='/about' element={<About/>}>
        </Route>
        <Route path='/' element={<TextForm heading="Convert Here" mode={mode} showAlert={showAlert}/>}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;
