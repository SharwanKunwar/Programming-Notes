import React from 'react'
import Card from './Card'

function Notes() {
  return (
    <div className='w-screen '>
      <div className='flex justify-center items-center flex-wrap gap-10 md:pl-30 p-9'>
      <Card view ="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"C - Programming"} des={"C is a high-level, general-purpose language known for its efficiency, speed, and control."} id={"c"}/>
      <Card imgLink={"react.svg"} title={"C++"} des={"C++ is a powerful language for fast apps, supporting procedural and OOP styles"} id={"c++"}/>
      <Card imgLink={"react.svg"} title={"JAVA"} des={"Java is an OOP language by Sun (1995), platform-independent via JVM: write once, run anywhere."} id={"java"}/>
      <Card imgLink={"react.svg"} title={"JavaScript"} des={"JavaScript is a versatile language for creating dynamic, interactive content on websites."} id={"JavaScript"}/>
      <Card imgLink={"react.svg"} title={"Python"} des={"Python is a high-level language known for readability, simplicity, and versatile use cases."} id={"python"}/>
      
      </div>
      
    </div>
  )
}

export default Notes
