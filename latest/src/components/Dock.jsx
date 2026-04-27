import React from 'react'
import "./dock.scss"

const Dock = ({windowstate,setwindowstate}) => {
  return (
    <div>
      <footer className='dock'>
        <div
        onClick={()=>{
            setwindowstate(state=>({...state,github:true}))
        }}
         className="icon github">
            <img src="/doc-icons/github.svg" alt="" />
        </div>
        <div 
           onClick={()=>{
            setwindowstate(state=>({...state,note:true}))
        }}
        
        className="icon note">
            <img src="/doc-icons/note.svg" alt="" />
        </div>
        <div
           onClick={()=>{
            setwindowstate(state=>({...state,resume:true}))
        }}
        
        className="icon pdf">
            <img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div 

        
        onClick={()=>{
            window.open("https://calendar.google.com/","_blank")
        }}
        
        
        className="icon calender">
            <img src="/doc-icons/calender.svg" alt="" />
        </div>
        <div

           onClick={()=>{
            setwindowstate(state=>({...state,spotify:true}))
        }}
        
        className="icon spotify">
            <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div 
        
          onClick={()=>{
            window.location.href = "mailto:abhi060807@gmail.com";
        }}
        className="icon mail" >
            <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div 

        onClick={()=>{
            window.open("https://www.linkedin.com/in/abhishekdev-kumar/","_blank")
        }}
        
        className="icon link">
            <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div
        
           onClick={()=>{
            setwindowstate(state=>({...state,terminal:true}))
        }}
        className="icon cli">
            <img src="/doc-icons/cli.svg" alt="" />
        </div>
      </footer>
    </div>
  )
}

export default Dock
