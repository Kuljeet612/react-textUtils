import React, {useState} from 'react'

export default function About(props) {
  
let displayStyle = {
  color: props.mode === "light" ? '#042743' : 'white',
  backgroundColor: props.mode === "light" ? 'white' : 'rgb(36 74 104)',
  // border: '2px solid',
  // borderColor: props.mode === "light" ? '#042743' : 'white'
}
    return (
      <div className="container">
          <h1 className="my-3" style={{color: props.mode === "light" ? 'rgb(36 74 104)' : 'white'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button" style={displayStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>                
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={displayStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed" style={displayStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>                
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={displayStyle}>
               TextUtils is a free character counter tool that provides instant character count & word count  statistics for a given text. TextUtils reports the number of words and characters. thus, it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed" style={displayStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>                
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={displayStyle}>
              This word counter software works in any web browser such Chrome, firefox, internet Explorer, Safai and Opera. It suits to count characters in facebook , blog, books, excel or PDF document, essays, etc. 
              </div>
            </div>
          </div>
        </div>      
        
      </div>
    );
}
