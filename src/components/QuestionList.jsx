import React from 'react'
import { Star } from 'lucide-react'

function QuestionList({ questions, currentIndex, onQuestionSelect, favoriteQuestions, language }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold mb-4 ">
        {language === 'en' ? 'Questions' : 'Questions'}
      </h2>
      {questions.map((question, index) => (
        <button
          key={question.id}
          onClick={() => onQuestionSelect(index)}
          className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between
            ${currentIndex === index ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'}
            ${favoriteQuestions.includes(question.id) ? 'text-yellow-600' : ''}`}
        >
          <span>
            {language === 'en' ? 'Question' : 'Question'} {index + 1}
          </span>
          {favoriteQuestions.includes(question.id) && (
            <Star className="w-4 h-4" fill="currentColor" />
          )}
        </button>
      ))}
    </div>
  )
}

export default QuestionList