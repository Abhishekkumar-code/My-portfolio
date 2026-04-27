import React from 'react'
import Windowmac from './Windowmac'
import Terminal from 'react-console-emulator'
import "./terminal.scss"

const Terminalpot = ({ windowname,setwindowstate }) => {
const commands = {

  help: {
    description: 'Show all available commands',
    fn: () => {
      return `
Available commands:

about     - Know about me
skills    - My technical skills
projects  - View my projects
contact   - Contact information
joke      - Get a random joke 😂
whoami    - Who are you?
date      - Current date & time
clear     - Clear the terminal
echo      - Echo any text

Type any command to explore 🚀
      `
    }
  },

  about: {
    description: 'About me',
    fn: () => `Hi, I'm Abhishek 👋
A passionate frontend developer who loves building interactive UIs and web apps.`
  },

  skills: {
    description: 'My skills',
    fn: () => `
Tech Stack:

- React.js ⚛️
- JavaScript 🟨
- HTML & CSS 🎨
- Node.js 🌐
- Express.js 🚀

Currently learning more advanced concepts 😎
    `
  },

  projects: {
    description: 'My projects',
    fn: () => `
Projects:

1. Email Spam Classifier 📧
2. Weather App for my College 🌦️
3. Portfolio Website 💼
4. Real-Time Chat App (Group Chats & Gaming Rooms) 💬🎮

Type 'contact' to connect with me!
    `
  },

  contact: {
    description: 'Contact info',
    fn: () => `
📧 Email: abhi060807@gmail.com
💼 LinkedIn: (add link)
🐙 GitHub: github.com/abhishek

Let's connect! 🚀
    `
  },

  // 🔥 CLEAR COMMAND
  clear: {
    description: 'Clear the terminal',
    fn: () => {
      return '';
    }
  },

  echo: {
    description: 'Echo a passed string',
    usage: 'echo <text>',
    fn: (...args) => args.join(' ')
  },

  // 😂 FUN COMMAND
  joke: {
    description: 'Random joke',
    fn: () => {
      const jokes = [
        "Why do programmers hate nature? Too many bugs 🐛",
        "I use console.log() more than my brain 😅",
        "Frontend developer = CSS magician 🧙‍♂️",
        "99 little bugs in the code... fix one, 100 bugs appear 😂"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
  },

  // 😎 COOL COMMAND
  whoami: {
    description: 'Who are you?',
    fn: () => "You are a recruiter checking out Abhishek's awesome portfolio 😎"
  },

  // 📅 DATE COMMAND
  date: {
    description: 'Current date & time',
    fn: () => new Date().toLocaleString()
  }

}

  return (
    <Windowmac windowname={windowname} setwindowstate={setwindowstate}>
      <div className="terminal-window">
        <Terminal
          commands={commands}
           noDefaults={true}  
          welcomeMessage={`
👋 Welcome to Abhishek's Terminal Portfolio

Type 'help' to see all available commands 🚀
          `}
          promptLabel={'abhishekkumar:~$'}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </Windowmac>
  )
}

export default Terminalpot