import React from 'react'
import Windowmac from './Windowmac'
import "./resume.scss"
const Resume = ({ windowname,setwindowstate }) => {
  return (
    <Windowmac windowname={windowname} setwindowstate={setwindowstate}>
        <div className="resume-container">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </Windowmac>
  )
}

export default Resume
