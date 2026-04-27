import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/spotify'
import Terminalpot from './components/windows/Terminalpot'
import { useState } from 'react'
import profile from "./assets/profile.jpeg"
import LikeButton from './components/LikeBUTTON.jsx'


const App = () => {
  const [windowstate, setwindowstate] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    terminal: false
  })
  return (
    <div>
      <main>
        <Nav />
        <div className="profile">
          <img src={profile} alt="" />
          <div className="profile__info">
            <h1>Abhishek Kumar</h1>
            <p>Full Stack Developer</p>
          </div>
          <LikeButton />
        </div>
        <Dock windowstate={windowstate} setwindowstate={setwindowstate} />
        {windowstate.github && <Github windowname="github" windowstate={windowstate} setwindowstate={setwindowstate} />}
        {windowstate.note && <Note windowname="note" windowstate={windowstate} setwindowstate={setwindowstate} />}
        {windowstate.resume && <Resume windowname="resume" windowstate={windowstate} setwindowstate={setwindowstate} />}
        {windowstate.spotify && <Spotify windowname="spotify" windowstate={windowstate} setwindowstate={setwindowstate} />}
        {windowstate.terminal && <Terminalpot windowname="terminal" windowstate={windowstate} setwindowstate={setwindowstate} />}
      </main>
    </div>
  )
}

export default App
