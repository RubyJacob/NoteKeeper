import { useState } from 'react';
import './App.css'
import { TiDelete } from "react-icons/ti";

function App() {
  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  const [notes,setNotes ] = useState([])
  
  const addNote = () =>{
    setNotes([...notes,{title,text}])
    setTitle("")
    setText("")
  }

  const deleteNote = (index) =>{
    setNotes(notes.filter((_, i) => i !== index));
  }


  return (
    <div className="bg-primary-subtle" style={{minHeight:'100vh'}}>
       <nav className="navbar bg-primary-subtle mb-5 border-bottom border-light-subtle">
       <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center gap-3">
        <img width={'100px'} height={'80px'} src="https://img.freepik.com/premium-vector/notes-icon-logo-vector-design-template_827767-4987.jpg" alt="logo" className="d-inline-block align-text-center"/> 
        <h3> NoteKeeper</h3>
        </div>
      <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link text-dark fs-4" href="#">Home </a>
  </li>
  <li className="nav-item">
     <a className="nav-link text-dark fs-4" href="#">Create Note</a>
  </li>
</ul>
    </div>
       </nav>

       <div style={{height:'50vh'}} className= "d-flex align-items-center justify-content-center ">
           <div className='shadow border rounded-5 p-5 ' style={{minHeight:'80%',width:'30%',backgroundColor:'rgba(255,255,255,0.5)'}}>
            <h2 className='text-center' style={{color:'firebrick'}}>Create a New Note</h2>
            <div className='p-3'>
            <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className='form-control border rounded my-3' style={{width:'100%',height:'40px'}} placeholder='Enter the title'/>
            <textarea value={text} onChange={e=>setText(e.target.value)} className="form-control my-3" rows="4" placeholder='Write your note here...'></textarea>
            <div className="d-flex align-items-center justify-content-center" >
            <button onClick={addNote} className='btn btn-primary w-100'>Add Note</button>
            </div>
            </div>
           </div>
      </div>
    <div className='d-flex flex-wrap m-5 justify-content-center flex-wrap'> 
     {
      notes.map((note,index)=>(
        <div key={index} style={{minHeight:'250px',width:'300px',backgroundColor:'rgba(255,255,255,0.9)'}} className="m-5 shadow border solid 1px rounded-5 text-center p-3">
           <h3>{note.title}  <TiDelete onClick={() => deleteNote(index)} className='fs-2 text-danger ' /></h3>
           <hr />
            <p className='fs-4'>{note.text}</p>
          </div>
      ))
      }
     </div>

    </div>
  )
}

export default App
