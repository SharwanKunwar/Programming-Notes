import React from 'react'
import Card from './Card'

function Notes() {
  return (
    <div className='w-screen '>
      <div className='w-full h-[100px] flex justify-center items-end border-b-1 text-4xl pb-2 font-mono font-bold'>Languages Notes</div>
      <div className='flex justify-center items-center flex-wrap gap-10 md:pl-30 p-9'>
      <Card isAvailable ={true} view ="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"C - Programming"} des={"C is a high-level, general-purpose language known for its efficiency, speed, and control."} id={"c"}/>
      <Card isAvailable ={false} imgLink={"react.svg"} title={"C++"} des={"C++ is a powerful language for fast apps, supporting procedural and OOP styles"} id={"c++"}/>
      <Card isAvailable ={false} imgLink={"react.svg"} title={"JAVA"} des={"Java is an OOP language by Sun (1995), platform-independent via JVM: write once, run anywhere."} id={"java"}/>
      <Card isAvailable ={false} imgLink={"react.svg"} title={"JavaScript"} des={"JavaScript is a versatile language for creating dynamic, interactive content on websites."} id={"JavaScript"}/>
      <Card isAvailable ={false} imgLink={"react.svg"} title={"Python"} des={"Python is a high-level language known for readability, simplicity, and versatile use cases."} id={"python"}/>
      </div>
      <div className='w-full h-[100px] flex justify-center items-end border-b-1 pb-2 text-4xl font-mono font-bold'>Interview Notes</div>
        <div className='flex justify-center items-center flex-wrap gap-10 md:pl-30 p-9 pb-20'>
        <Card isAvailable ={true} view ="/InterviewNotes/ReactInterview.pdf" imgLink={"react.svg"} title={"React Interview Notes"} des={"Download concise and curated React Interview Notes – perfect for quick revision and prep!"} id={"ReactInterview"}/>
        <Card isAvailable ={false} view ="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"Comming soon !!!"} des={"C is a high-level, general-purpose language known for its efficiency, speed, and control."} id={"c"}/>
        
      </div>
      
    </div>
  )
}

export default Notes
