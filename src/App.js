import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Answerarea from './answerArea';
import React,{useState,useEffect} from 'react';
function App() {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    
    const te = document.querySelector(".textarea").value;
    setValue(te);
    document.querySelector(".textarea").value = "";

    
  }
  useEffect(()=>{
    console.log(value);

  },[value])

  return (
    <div className="Main">
      <div className="navbar">
        <Navbar />
       
      </div>
      <div className="text-area-container">
        <div className='textareadiv'>
          <textarea  className="textarea"/>
        </div>
       
          <button  className="btn" onClick={handleClick}>search</button>

        
      </div>
      <div className="answer-container">
        <Answerarea className="answer" data={value}/>
      </div>
      
    </div>
  );
}

export default App;
