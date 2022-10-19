// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import PropTypes from 'prop-types'
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";



// WHATEVER WE WRITE IN THE {} THEN THAT THING GETS RESOLVED AND ITS VALUE IS BEEN CALCULATED AND THEN USED FURTHER.
function App() {

  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type: type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1000);
  }
 const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "Textutils-Dark Mode";
    }

    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "Textutils-Light Mode";
    }
  }

    return(
      <>
      <Navbar title="TextutilsNew" about="About Us" model ={mode} toggleMode={toggleMode} />  
      <Alert  alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces" model={mode}/>
    </div>
      </>  
    );
}

// Navbar.propTypes = {
//   title : PropTypes.string,
//   about : PropTypes.string
// }

// Navbar.defaultProps = {  // default props are used to set the values of the keys to a default value
//   title : "Set title here",
//   about : "Set about here"
// }
export default App;
