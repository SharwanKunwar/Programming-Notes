import React from 'react'
import Card from './Card'

function Notes() {
  return (
    <div className='w-screen '>
      <div className='flex flex-wrap gap-10 md:pl-30 p-9'>
      <Card view ="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"C - Programming"} des={"C is a high-level, general-purpose programming language, known for its efficiency and control."} id={"c"}/>
      <Card imgLink={"react.svg"} title={"C++"} des={"C++ is a powerful language for building fast apps, supporting both procedural and object-oriented code."} id={"c++"}/>
      <Card imgLink={"react.svg"} title={"JAVA"} des={"Java is an OOP language by Sun (1995), platform-independent via JVM: write once, run anywhere."} id={"java"}/>
      <Card imgLink={"react.svg"} title={"JavaScript"} des={"JavaScript is a versatile scripting language used to create dynamic and interactive content on websites."} id={"JavaScript"}/>
      <Card imgLink={"react.svg"} title={"Python"} des={"Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility."} id={"python"}/>
      
      </div>
      
    </div>
  )
}

export default Notes
