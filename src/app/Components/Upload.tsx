"use client"
import axios from "axios";
import { useState } from "react";

export default function Upload() {

  const [ File, useFile] = useState<any | undefined>(); 
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    fetch();
  }


  const fetch = async () =>{
    const formData = new FormData();
    formData.append("file",File)
    await axios.post("http://localhost:8000/api/v1/upload",formData).then(
      res => {console.log(res.data?.status)}
    ).catch(err => console.log(err))
  }

  const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
    const file = e.target.files
    useFile(file?.item(0))
  }
  
  console.log(File)

  return (
    <>
        <input onChange={handleChange} type="file" className="file-input file:bordered w-full max-w-xs rounded-full file:rounded-full file:bg-gray-900 file:text-white" />
        <button onClick={handleSubmit} className="rounded-lg bg-black text-white px-3 py-2">Submit</button>
    </>
  )
}