import React, { useEffect, useState } from 'react'
import "./TextArea.css"
function TextArea() {

    const [words, setWords] = useState(0)
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")

    let val;
    useEffect(()=>{
        val = document.querySelector(".textArea")
    })
    const count =(e) =>{
        console.log(val.value);
        var spaces = e.target.value;
        var words = spaces ? spaces.length : 0;
        setFirst("")
        setFirst("first")
        setWords(words); 
        setSecond("second")
        setSecond("")
        setFirst("first")
      /*  setclass();*/
    }

   /* const setclass = () =>{
        
        
    }*/
    return (
        <>
        <h2 className="title">Count Your Characters</h2>
        <div className="textarea-container">
            <textarea className="textArea" placeholder="Write Your Text Here" onKeyUp={(e)=>count(e)}></textarea>
        </div>
        <h2 className="count">Total Words :</h2>
        <div className="countDisplay">
           <p className={`${first} ${second}`}>{words}</p>
           
        </div>
        </>
    )
}

export default TextArea
