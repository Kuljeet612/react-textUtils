import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
    }
    const handleUpLowClick = () =>{
        // console.log("Uppercase was clicked" + text);
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        setText('');
    }
    //handleOnChange is required in the textarea to enable editing the value. Otherwise, the value will always be {text} and you will not be able to type
    const handleOnChange = (event) =>{
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container my-3">    
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} rows="6" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleUpLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        </div>

          <div className="container my-3">    
          <h2>Your text summary</h2>         
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
      </div>
      </>
       
    )
}
