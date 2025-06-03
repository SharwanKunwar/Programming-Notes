import React from 'react'
import Card from './Card'

function Notes() {
  return (
    <div className='w-screen '>
      <div className='flex flex-wrap gap-10 md:pl-30 p-9'>
      <Card view ="/NotesPdfs/c.pdf" title={"C - Programming"} des={"C is a high-level, general-purpose programming language, known for its efficiency and control."} id={"c"}/>
      <Card title={"JAVA"} des={"Java is an OOP language by Sun (1995), platform-independent via JVM: write once, run anywhere."} id={"java"}/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </div>
  )
}

export default Notes
