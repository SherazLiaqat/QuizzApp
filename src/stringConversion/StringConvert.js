import React, { useMemo, useState } from "react";

export const StringConvert = () => {
  const [input, setInput] = useState("");
  const firstLetterCapital=(str)=>{
var newStr=str.split(" ")
var newArr=newStr.map((value)=>{
return value.charAt(0).toUpperCase()+value.slice(1)
})
return newArr.join(" ")
  }
const reverseString=(str)=>{
var revStr=str.split("").reverse().join("")
return revStr
}
const isPalindrome=useMemo(()=>{
return input==input.split("").reverse().join("")
},[input])
  return (
    <>
      <h1 style={{ color: "maroon", textAlign: "center" }}>
        Plaese Enter string to convert
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ border: "1px solid green" }}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">First Letter capital</th>
            <td>{firstLetterCapital(input)}</td>
          </tr>
          <tr>
            <th scope="row">Length Of String</th>
            {input.length<1?(" "):( <td>{input.replace(/\s/g,"").length}</td>)}
           
          </tr>
          <tr>
            <th scope="row">String In Uppercase</th>
            <td>{input.toUpperCase()}</td>
          </tr>

          <tr>
            <th scope="row">String In Lowercase</th>
            <td>{input.toLowerCase()}</td>
          </tr>
          <tr>
            <th scope="row">Reverse String</th>
            <td>{reverseString(input)}</td>
          </tr>
          <tr>
            <th scope="row">Palindrome</th>
            {input<1?(" "):(<td>{isPalindrome?"YES":"NO"}</td>)}
            
          </tr>
        </tbody>
      </table>
    </>
  );
};
