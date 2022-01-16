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
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();  //selects and highlights the text        
        navigator.clipboard.writeText(text.value);  //copies text
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    //handleOnChange is required in the textarea to enable editing the value. Otherwise, the value will always be {text} and you will not be able to type
    const handleOnChange = (event) =>{
        console.log("handleOnChange was clicked");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>    
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} rows="6" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleUpLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>
        </div>

          <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>    
          <h2>Your text summary</h2>         
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
      </div>
      </>
       
    )
}
