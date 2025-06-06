import React from 'react'
import Card from './Card'

function Notes() {
  const style01 = {
    backgroundImage: "url('gradient.png')",
  };

  return (
    <div style={style01} className='w-screen'>
      {/* First sticky header */}
      <div className='bg-gray-50 w-full p-3 flex justify-center items-end border-b text-4xl pb-2 font-mono font-bold sticky top-17 z-10'>
        Languages Notes
      </div>

      {/* Cards for Languages Notes */}
      <div className='flex justify-center items-center flex-wrap gap-10 md:pl-30 p-9'>
        <Card isAvailable={true} view="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"C - Programming"} des={"C is a high-level, general-purpose language known for its efficiency, speed, and control."} id={"c"} />
        <Card isAvailable={false} imgLink={"react.svg"} title={"C++"} des={"C++ is a powerful language for fast apps, supporting procedural and OOP styles"} id={"c++"} />
        <Card isAvailable={false} imgLink={"react.svg"} title={"JAVA"} des={"Java is an OOP language by Sun (1995), platform-independent via JVM: write once, run anywhere."} id={"java"} />
        <Card isAvailable={true} view="/NotesPdfs/javascript.pdf" imgLink={"react.svg"} title={"JavaScript"} des={"JavaScript is a versatile language for creating dynamic, interactive content on websites."} id={"JavaScript"} />
        <Card isAvailable={false} imgLink={"react.svg"} title={"Python"} des={"Python is a high-level language known for readability, simplicity, and versatile use cases."} id={"python"} />
        <Card isAvailable={false} view="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"Coming soon !!!"} des={"Exciting content is on the way – stay tuned for something new, useful, and worth the wait!"} id={"xyz"} />
      </div>

      {/* Second sticky header */}
      <div className='bg-gray-50 w-full p-3 flex justify-center items-end border-b text-4xl pb-2 font-mono font-bold sticky top-17 z-10'>
        Interview Notes
      </div>

      {/* Cards for Interview Notes */}
      <div className='flex justify-center items-center flex-wrap gap-10 md:pl-30 p-9 pb-20'>
        <Card isAvailable={true} view="/InterviewNotes/ReactInterview.pdf" imgLink={"react.svg"} title={"React Interview Notes"} des={"Download concise and curated React Interview Notes – perfect for quick revision and prep!"} id={"ReactInterview"} />
        <Card isAvailable={true} view="/InterviewNotes/JavaBackendInterviewPreparation.pdf" imgLink={"react.svg"} title={"Java Interview Notes"} des={"Concise Java backend notes – perfect for quick revision and interview preparation!"} id={"JavaBackendInterviewPreparation"} />
        <Card isAvailable={false} view="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"Coming soon !!!"} des={"Exciting content is on the way – stay tuned for something new, useful, and worth the wait!"} id={"xyz"} />
      </div>

      {/* Third sticky header */}
      <div className='bg-gray-50 w-full p-3 flex justify-center items-end border-b text-4xl pb-2 font-mono font-bold sticky top-17 z-10'>
        Quick Notes
      </div>
      {/* Cards for Interview Notes */}
      <div className='flex justify-center items-center flex-wrap gap-10 md:pl-30 p-9 pb-20'>
        <Card isAvailable={true} view="/QuickNotes/js_for_react.pdf" imgLink={"react.svg"} title={"JavaScript for React"} des={"Essential JavaScript for React – a quick, clear PDF guide to boost your next interview prep!"} id={"JavaScriptforReact"} />
        <Card isAvailable={false} view="/NotesPdfs/c.pdf" imgLink={"react.svg"} title={"Coming soon !!!"} des={"Exciting content is on the way – stay tuned for something new, useful, and worth the wait!"} id={"xyz"} />
      </div>

    </div>
  )
}

export default Notes
