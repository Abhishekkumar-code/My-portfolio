import React, { Children } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss" 

const Windowmac = ({ children, width = "73vw", height = "80vh",windowname,windowstate,setwindowstate}) => {
  return (
    <Rnd default={{ width: width, height: height, x: 50, y: 50 }}>

      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
            onClick={()=>{
              setwindowstate(state =>({...state , [windowname]:false}))
            }}
            
            className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green  "></div>

          </div>

          <div className="title"><p>abhishekkumar - xyz</p></div>
        </div>
        <div className="maincontent">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default Windowmac
