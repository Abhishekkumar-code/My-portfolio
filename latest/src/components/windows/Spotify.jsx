import React from 'react'
import Windowmac from './Windowmac'
import "./spotify.scss"

const Spotify = ({ windowname,setwindowstate }) => {
  return (
<Windowmac windowname={windowname} setwindowstate={setwindowstate}
 width="max(20vw,20rem)">
    <div className="spotify-window">
       <iframe data-testid="embed-iframe" style={{bordeRadius: "12px"}} src="https://open.spotify.com/embed/playlist/6Q4zX4wwAsDdzwt7d8vAK8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
</Windowmac>
  )
}

export default Spotify
