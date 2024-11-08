import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

function Timer({ timeLimit, onTimeUp, language }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit * 150) // Convert minutes to seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeUp])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const getColor = () => {
    if (timeLeft <= 60) return 'text-red-600' // Last minute
    if (timeLeft <= 300) return 'text-orange-600' // Last 5 minutes
    return 'text-indigo-600'
  }

  return (
    <div className={`fixed top-4 right-24 flex items-center gap-2 px-4 py-2 bg-white rounded-lg bg-transparent text-slate-400 hover:text-indigo-600 shadow-md ${getColor()}`}>
      <Clock className="w-5 h-5" />
      <span className="font-mono font-medium">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
      <span className="text-sm">
        {language === 'en' ? 'remaining' : 'restant'}
      </span>
    </div>
  )
}

export default Timer