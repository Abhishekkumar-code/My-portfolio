import React, { useEffect, useState } from 'react'
import Markdown from "react-markdown"
import Windowmac from './Windowmac';
import remarkGfm from "remark-gfm";
import syntaxhighlighter from "react-syntax-highlighter"
import "./note.scss"
const Note = ({ windowname,setwindowstate }) => {
    const [markdown, setmarkdown] = useState(null);
    useEffect(() => {
        fetch("./note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])

    return (
        <div>
            <Windowmac windowname={windowname} setwindowstate={setwindowstate}>
                <div className="note-window">
                    {markdown ? <Markdown remarkPlugins={[remarkGfm]}>
                        {markdown}
                    </Markdown> : <p>Loading...</p>}
                </div>
            </Windowmac>

        </div>
    )
}

export default Note
