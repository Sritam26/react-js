import React, {useState} from 'react'

export default function Textform(props) {
  const click=()=>{
    alert("DO YOU WANT TO CONVERT IT TO UPPER CASE")
    let newtext=text.toUpperCase();
    if (text===text.toUpperCase()) {
      alert("already in upper case")
    }
    setText(newtext)
    props.showalert("text converted to uppercase","success");
    
  }
  const handlelower=()=>
    {
    alert("Do you really want to convert it to lowercase")

      let newtext=text.toLowerCase();
      if (text===text.toLowerCase()) {
        alert("already in lower case")
      }
      setText(newtext)
    props.showalert("text converted to lowercase","success");

    }
  const cleartext=()=>
    {
    alert("Do you really want to clear it")

      let newtext=('');
      setText(newtext)
    props.showalert("text is cleared","success");

    }
  const change=(event)=>{
    setText(event.target.value)
  }
  const[text,setText]=useState("");
  return (
    <div>
      <div className="mb-3"style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="17" value={text} onChange={change}style={{backgroundColor:props.mode==='light'?'dark':'grey'}}></textarea>
<button className="btn btn-primary my-2" onClick={click}>convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handlelower}>convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={cleartext}>clear text</button>
</div>
<div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>Your text summary</h1>
  <p>words:{text.split(/\s/).filter((sp)=>{return sp.length!==0}).length} and characters:{text.length}</p>
  <h2>Time duration to read</h2>
  <p>{0.008*text.split(" ").length}</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</div>
  )
}
