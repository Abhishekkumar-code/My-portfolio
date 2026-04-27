import React from 'react'

import "./github.scss"
import githubdata from "../../assets/github.json"
import Windowmac from './Windowmac'

const Gitcard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repolink: "", demolink: "" } }) => {

  return <div className="card">
    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p className='description'>{data.description}</p>
    <div className="tags">
      {data.tags.map(tag => <p className='tag'>{tag}</p>)}
    </div>

    <div className="urls">
      <a href={data.repolink}>Repositary</a>
      {data.demolink ? (
    <a href={data.demolink}>Demo Link</a>
  ) : null}
    </div>
  </div>
}
const Github = ( { windowname,windowstate,setwindowstate }) => {
  return (
    <Windowmac windowname={windowname} windowstate={windowstate} setwindowstate={setwindowstate}>
      <div className="cards">
        {githubdata.map(project => {
          return <Gitcard data={project} />
        })}

      </div>
    </Windowmac>
  )
}

export default Github
