import React, { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  console.log(text);
   function handleInputChange(event){
        setText(event.target.value);
   }
  return (
    <div className="flex gap-6 h-screen justify-center items-center">
      <input type="text" className=" outline-none px-4 py-2 border border-blue-500 " value={text} onChange={handleInputChange}></input>
      <button type="button" className="text-white bg-blue-500 rounded-md px-4 py-2">Add</button>
    </div>

    
  )
}

export default App