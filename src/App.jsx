import React, { useState } from 'react'
import ExamList from './components/ExamList'
import Question from './components/Question'
import ExamProgress from './components/ExamProgress'
import LanguageToggle from './components/LanguageToggle'
import Timer from './components/Timer'
import Results from './components/Results'
import QuestionList from './components/QuestionList'
import { sampleExamA, sampleExamB, sampleExamC } from './data/sampleExam'
// import {  } from './data/sampleExam'
import { Menu, Home } from 'lucide-react'

function App() {
  const [language, setLanguage] = useState('en')
  const [currentExam, setCurrentExam] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [favoriteQuestions, setFavoriteQuestions] = useState([])
  const [showSidebar, setShowSidebar] = useState(false)

  // In a real app, this would come from an API or database
  const availableExams = [sampleExamA, sampleExamB, sampleExamC]

  const handleExamSelect = (exam) => {
    setCurrentExam(exam)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResults(false)
    setFavoriteQuestions([])
  }

  const handleAnswerSelect = (questionId, optionId) => {
    const question = currentExam.questions[currentQuestionIndex]
    
    setAnswers(prev => {
      const currentAnswers = prev[questionId] || []
      
      if (question.multipleAnswers) {
        return {
          ...prev,
          [questionId]: currentAnswers.includes(optionId)
            ? currentAnswers.filter(id => id !== optionId)
            : [...currentAnswers, optionId]
        }
      }
      
      return {
        ...prev,
        [questionId]: [optionId]
      }
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleTimeUp = () => {
    setShowResults(true)
  }

  const handleRetry = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResults(false)
    setFavoriteQuestions([])
  }

  const handleHome = () => {
    if (window.confirm(
      language === 'en'
      ? 'Are you sure you want to exit the exam? Your progress will be lost.'
      : 'Êtes-vous sûr de vouloir quitter l\'examen ? Votre progression sera perdue.'
    )) {
      setCurrentExam(null)
      setCurrentQuestionIndex(0)
      setAnswers({})
      setShowResults(false)
      setFavoriteQuestions([])
    }
  }

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index)
    setShowSidebar(false) // Close sidebar on mobile after selection
  }

  const toggleFavorite = (questionId) => {
    setFavoriteQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  if (!currentExam) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            {language === 'en' ? 'Available Exams' : 'Examens disponibles'}
          </h1>
          <ExamList 
            exams={availableExams} 
            onSelectExam={handleExamSelect}
            language={language}
          />
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
        <Results 
          answers={answers}
          exam={currentExam}
          language={language}
          onRetry={handleRetry}
          onHome={handleHome}
        />
      </div>
    )
  }

  const currentQuestion = currentExam.questions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-gray-100">
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      <Timer 
        timeLimit={currentExam.timeLimit} 
        onTimeUp={handleTimeUp}
        language={language}
      />
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6" />
      </button>

       

      <div className="flex">
        {/* Question List Sidebar - Mobile */}
        <div className={`
          fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-4 h-full overflow-y-auto pt-16">
            <QuestionList
              questions={currentExam.questions}
              currentIndex={currentQuestionIndex}
              onQuestionSelect={handleQuestionSelect}
              favoriteQuestions={favoriteQuestions}
              language={language}
            />
          </div>
        </div>

        {/* Question List Sidebar - Desktop */}
        <div className="hidden md:block w-64 bg-white h-screen fixed left-0 p-4 shadow-md overflow-y-auto">
          <QuestionList
            questions={currentExam.questions}
            currentIndex={currentQuestionIndex}
            onQuestionSelect={handleQuestionSelect}
            favoriteQuestions={favoriteQuestions}
            language={language}
          />
        </div>

        {/* Main Content */}
        <div className="w-full md:ml-64 p-4 md:p-8 pt-16">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">{currentExam.title[language]}</h1>
          
          <ExamProgress 
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={currentExam.questions.length}
            language={language}
          />

          <Question
            question={currentQuestion}
            selectedAnswers={answers[currentQuestion.id] || []}
            onAnswerSelect={handleAnswerSelect}
            onToggleFavorite={() => toggleFavorite(currentQuestion.id)}
            isFavorite={favoriteQuestions.includes(currentQuestion.id)}
            language={language}
          />

          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-4 md:px-6 py-2 rounded-lg transition-colors
                ${currentQuestionIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              {language === 'en' ? 'Previous' : 'Précédent'}
            </button>

            {/* Home Button */}
       <button
        onClick={handleHome}
        className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
        title={language === 'en' ? 'Exit Exam' : 'Quitter l\'examen'}
      >
        <Home className="w-8 h-8 text-gray-600" />
      </button>

            <button
              onClick={handleNextQuestion}
              className="px-4 md:px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {currentQuestionIndex === currentExam.questions.length - 1
                ? (language === 'en' ? 'Finish' : 'Terminer')
                : (language === 'en' ? 'Next' : 'Suivant')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App