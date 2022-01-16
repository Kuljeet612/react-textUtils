import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        text.length > 0 ? props.showAlert("Converted to uppercase", "success") : props.showAlert("No text found", "danger");
    }
    const handleUpLowClick = () =>{
        // console.log("Uppercase was clicked" + text);
        setText(text.toLowerCase());
        text.length > 0 ? props.showAlert("Converted to lowercase", "success") : props.showAlert("No text found", "danger");
        
    }
    const handleClearClick = () => {    
        if(text.length > 0) {
            setText('');
            props.showAlert("Text has been cleared", "success");
        }       
      
    }
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();  //selects and highlights the text        
        navigator.clipboard.writeText(text.value);  //copies text
        document.getSelection().removeAllRanges(); //to remove highlight
        text.value.length >= 0 ? props.showAlert("Copied to Clipboard!", "success") : props.showAlert("No text found", "danger");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.showAlert("Extra spaces removed", "success");          
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
            <textarea className="form-control" id="myBox" value={text} rows="6" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpace}>Remove extra space</button>
        </div>

          <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>    
          <h2>Your text summary</h2>         
            <p>{text.split(" ").filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
      </>
       
    )
}
