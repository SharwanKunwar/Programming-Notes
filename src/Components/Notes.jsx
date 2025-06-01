import React from 'react'
import Card from './Card'

function Notes() {
  return (
    <div className='w-screen '>
      <div className='flex flex-wrap gap-10 md:pl-30 p-9'>
      <Card title={"C"} des={"C is a fast, low-level, procedural language developed by Dennis Ritchie in the 1970s for system programming."}/>
      <Card title={"JAVA"} des={"Java is an OOP language by Sun (1995), platform-independent via JVM: write once, run anywhere."}/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </div>
  )
}

export default Notes
