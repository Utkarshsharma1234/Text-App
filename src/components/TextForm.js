import React, {useState} from 'react'




export default function TextForm(props) {


   const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = ()=>{
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been successfully removed", "success")
    }

    const handleClearClick = ()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert("Text has been successfully cleared", "success")
    }


    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success")
        
    }
   const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");  

  return (
    <>
    <div>
        <h1 className={`text-${props.model==='light'?'dark':'light'} my-3`} >{props.heading }</h1>

    <div className="mb-3">  
        <textarea className="form-control" value={text} onChange = {handleOnChange}  id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3 my-1" onClick={handleLoClick} disabled={text.length===0}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-3 my-1" onClick={handleClearClick} disabled={text.length===0}>Clear Text</button>
    <button className="btn btn-primary mx-3 my-1" onClick={handleSpaceClick} disabled={text.length===0}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-3 my-1" onClick={handleCopyClick} disabled={text.length===0}>Copy Text</button>
    
    </div>

    <div className={`text-${props.model==='light'?'dark':'light'} my-3`}>
        <h1 >Text Summary</h1>
        <p > <b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words </b> and <b>{text.length} characters</b>.</p>
        <p >Time to Read : <b>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008}</b> Minutes.</p>
        <h2 >Preview</h2>
        <p >{text.length>0?text:"Nothing to Preview."}</p>
    </div>
    </>
  )
}
