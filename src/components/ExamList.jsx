import React from 'react'
import { BookOpen } from 'lucide-react'

function ExamList({ exams, onSelectExam, language }) {
  const handleExamSelect = (exam) => {
    if (window.confirm(
      language === 'en' 
        ? 'The exam timer will start as soon as you begin. Are you ready to start?' 
        : 'Le chronomètre commencera dès que vous commencerez. Êtes-vous prêt à commencer?'
    )) {
      onSelectExam(exam)
    }}
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {exams.map((exam) => (
        <button
          key={exam.id}
          onClick={() => handleExamSelect(exam)}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h3 className="text-lg font-semibold">{exam.title[language]}</h3>
          </div>
        </button>
      ))}
    </div>
  )
}

export default ExamList