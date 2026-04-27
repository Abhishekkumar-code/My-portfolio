import { useState, useEffect } from 'react'
import './LikeButton.scss'
import { AiFillHeart } from 'react-icons/ai'
const API = 'http://localhost:3000/api/likes'

const formatCount = (n) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return n.toString()
}

const LikeButton = () => {
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        setCount(data.count)
        setLoading(false)
      })

    const alreadyLiked = localStorage.getItem('portfolio_liked') === 'true'
    setLiked(alreadyLiked)
  }, [])

  const handleLike = async () => {
    if (liked || loading) return

    setLiked(true)
    localStorage.setItem('portfolio_liked', 'true')
    spawnParticles()

    const res = await fetch(API, { method: 'POST' })
    const data = await res.json()
    setCount(data.count)
  }

  const spawnParticles = () => {
    const emojis = ['❤️', '✨', '💜', '⭐']
    const newParticles = emojis.map((em, i) => ({
      id: Date.now() + i,
      emoji: em,
      x: Math.random() * 80 - 40,
      delay: i * 0.08
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 1000)
  }

  return (
    <div className="like-wrapper">
      <div className="particles">
        {particles.map(p => (
          <span
            key={p.id}
            className="particle"
            style={{ left: p.x + 'px', animationDelay: p.delay + 's' }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <button
        className={`like-btn ${liked ? 'liked' : ''}`}
        onClick={handleLike}
        disabled={liked || loading}
      >
        <span className="heart"><AiFillHeart size={20} color="#f5437e" /></span>
        <span className="count">
          {loading ? '...' : formatCount(count)}
        </span>
        <span className="label">Likes</span>
      </button>

      <p className="like-status">
        {liked ? 'Thanks for the love! ❤️' : 'Show some love ♡'}
      </p>
    </div>
  )
}

export default LikeButton