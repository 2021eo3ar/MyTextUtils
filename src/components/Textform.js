import React, { useState } from 'react'

export default function Textform(props) {
    const handleLCpyClick = () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
       alert('Text copied to clipboard');
      }
      
    const handleLResClick = () => {
        let nT = text.split(' ').filter(word => word !== '').join(' ');
        setText(nT);
    }


    const handleLCLRClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <div className="mb-3" style={{color: props.color}}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>{props.heading}</h4> </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='enter your text here' rows="6" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleLResClick}>Remove Extra Space</button>
                <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleLCpyClick}>Copy Text</button>
                <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleLCLRClick}>Clear Text</button>
            </div>

            <div className="container my-3" style={{color: props.color}}>
                <h4>Your Text Summary</h4>
                <p> There are total <strong>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} </strong>Words and <strong>{text.length}</strong> characters in your text.</p>
                <p>It will take around <strong>{0.008 * (text.split(' ').filter((element)=>{return element.length !== 0}).length)}</strong> minutes to read whole content.</p>
                <h4>Preview of Your Text</h4>
                <p>{text}</p>

            </div>
        </>
    )
}
