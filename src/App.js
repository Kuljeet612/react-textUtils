import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (  
  <>
  <Navbar title = "TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>  
  {/* <About/> */}
  </div>
  
  </>
  );
}

export default App;
