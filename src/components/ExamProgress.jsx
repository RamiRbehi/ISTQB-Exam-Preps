import React from 'react'

function ExamProgress({ currentQuestion, totalQuestions, language }) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          {language === 'en' ? 'Progress' : 'Progression'}
        </span>
        <span className="text-sm font-medium">
          {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ExamProgress