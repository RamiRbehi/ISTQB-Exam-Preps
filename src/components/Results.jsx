import React from 'react'
import { CheckCircle, XCircle, Download } from 'lucide-react'
import jsPDF from 'jspdf'
import { getQuestionExplanation } from '../data/explanations'

function Results({ answers, exam, language, onRetry, onHome}) {
  const PASSING_SCORE = 65
  const TOTAL_QUESTIONS = 40
  const REQUIRED_CORRECT = 26

  const calculateScore = () => {
    let correct = 0
    exam.questions.forEach((question) => {
      const userAnswers = answers[question.id] || []
      const isCorrect = question.correctAnswers.length === userAnswers.length &&
        question.correctAnswers.every(answer => userAnswers.includes(answer))
      if (isCorrect) correct++
    })
    return correct
  }

  const score = calculateScore()
  const percentage = Math.round((score / TOTAL_QUESTIONS) * 100)
  const passed = percentage >= PASSING_SCORE

  const downloadPDF = () => {
    const pdf = new jsPDF()
    let yPos = 20
    const pageWidth = pdf.internal.pageSize.width
    const pageHeight = pdf.internal.pageSize.height
    const margin = 20
    const maxWidth = pageWidth - 2 * margin
    const maxHeight = pageHeight - 2 * margin

    // Add title
    pdf.setFontSize(20)
    const titleLines = pdf.splitTextToSize(exam.title[language], maxWidth, maxHeight)
    pdf.text(titleLines, margin, yPos)
    yPos += 10 * titleLines.length + 5

    // Add score with color
    pdf.setFontSize(16)
    pdf.setTextColor(passed ? '#22c55e' : '#ef4444')
    pdf.text(`${language === 'en' ? 'Score' : 'Score'}: ${score}/${TOTAL_QUESTIONS} (${percentage}%)`, margin, yPos)
    pdf.setTextColor('#000000') // Reset color
    yPos += 20

    // Add pass/fail status
    pdf.setFontSize(14)
    pdf.setTextColor(passed ? '#22c55e' : '#ef4444')
    pdf.text(
      passed 
        ? (language === 'en' ? 'PASSED' : 'RÉUSSI')
        : (language === 'en' ? 'FAILED' : 'ÉCHOUÉ'),
      margin,
      yPos
    )
    pdf.setTextColor('#000000') // Reset color
    yPos += 20

    // Add questions and answers
    pdf.setFontSize(12)
    exam.questions.forEach((question, index) => {
      const userAnswers = answers[question.id] || []
      const isCorrect = question.correctAnswers.length === userAnswers.length &&
        question.correctAnswers.every(answer => userAnswers.includes(answer))

      // Add question text
      pdf.setFont(undefined, 'bold')
      const questionLines = pdf.splitTextToSize(`${index + 1}. ${question.text[language]}`, maxWidth, maxHeight)
      pdf.text(questionLines, margin, yPos)
      yPos += 10 * questionLines.length

      // Add user's answer
      pdf.setFont(undefined, 'normal')
      pdf.setTextColor(isCorrect ? '#22c55e' : '#ef4444')
      const userAnswerText = `${language === 'en' ? 'Your answer' : 'Votre réponse'}: ${
        userAnswers.map(answerId => 
          question.options.find(opt => opt.id === answerId)?.text[language]
        ).join(', ') || (language === 'en' ? 'No answer' : 'Pas de réponse')
      }`
      const userAnswerLines = pdf.splitTextToSize(userAnswerText, maxWidth, maxHeight - 10)
      pdf.text(userAnswerLines, margin + 10, yPos)
      yPos += 7 * userAnswerLines.length

      // Add correct answer if wrong
      if (!isCorrect) {
        pdf.setTextColor('#22c55e')
        const correctAnswerText = `${language === 'en' ? 'Correct answer' : 'Réponse correcte'}: ${
          question.correctAnswers.map(answerId =>
            question.options.find(opt => opt.id === answerId)?.text[language]
          ).join(', ')
        }`
        const correctAnswerLines = pdf.splitTextToSize(correctAnswerText, maxWidth, maxHeight - 10)
        pdf.text(correctAnswerLines, margin + 10, yPos)
        yPos += 7 * correctAnswerLines.length
      }

      pdf.setTextColor('#000000') // Reset color

      //Explanation
      const explanation = getQuestionExplanation(question.id, language)
      if (explanation) {
        yPos += 5
        const explanationTitle = language === 'en'?
        'Explanation: ' : 'Explication :'
        pdf.setFont(undefined, 'Bold')
        pdf.text(explanationTitle, margin + 10, yPos)
        yPos += 7

        pdf.setFont(undefined, 'normal')
        const explanationText = explanation.split(/<\/?b/)
        let currentX = margin + 10
        const explanationlines = pdf.splitTextToSize(explanation, maxWidth, maxHeight - 20)
        pdf.text(explanationlines, margin + 10, yPos)
        yPos += 7 * explanationlines.length
      }
      yPos += 15

      // Add result indicator
      pdf.setTextColor(isCorrect ? '#22c55e' : '#ef4444')
      pdf.text(
        isCorrect 
          ? (language === 'en' ? '✓ Correct' : '✓ Correct')
          : (language === 'en' ? '✗ Incorrect' : '✗ Incorrect'),
        margin + 10,
        yPos
      )
      pdf.setTextColor('#000000') // Reset color
      yPos += 15

      // Add new page if needed
      if (yPos > 270) {
        pdf.addPage()
        yPos = 20
      }
    })

    // Save the PDF
    pdf.save(`${exam.title[language]}_results.pdf`)
  }

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {language === 'en' ? 'Exam Results' : 'Résultats de l\'examen'}
      </h2>

      <div className="text-center mb-8">
        <div className={`text-4xl font-bold mb-2 ${passed ? 'text-green-500' : 'text-red-500'}`}>
          {score}/{TOTAL_QUESTIONS}
        </div>
        <div className={`text-lg ${passed ? 'text-green-600' : 'text-red-600'}`}>
          {percentage}%
        </div>
        <div className={`text-lg font-semibold mt-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
          {passed 
            ? (language === 'en' ? 'PASSED' : 'RÉUSSI')
            : (language === 'en' ? 'FAILED' : 'ÉCHOUÉ')}
        </div>
        <div className="text-sm text-gray-600 mt-2">
          {language === 'en' 
            ? `Required to pass: ${REQUIRED_CORRECT} correct answers (${PASSING_SCORE}%)`
            : `Requis pour réussir: ${REQUIRED_CORRECT} réponses correctes (${PASSING_SCORE}%)`}
        </div>

        <div className="mt-8 space-x-1 flex">
        <button
          onClick={downloadPDF}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          {language === 'en' ? 'Download Results' : 'Télécharger les résultats'}
        </button>

        <button
          onClick={onRetry}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {language === 'en' ? 'Try Again' : 'Réessayer'}
        </button>
        <button
          onClick={onHome}
          className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
        {language === 'en' ? 'Exit' : 'Quitter'}
        </button>
      </div>

      </div>

      <div className="space-y-6">
        {/* <span>{question.number}</span> */}
        {exam.questions.map((question) => {
          const userAnswers = answers[question.id] || []
          const isCorrect = question.correctAnswers.length === userAnswers.length &&
            question.correctAnswers.every(answer => userAnswers.includes(answer))

          return (
            <div key={question.id} className="border-t pt-4">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1 min-w-0">
                  <div  className='flex'>
                  <span className="font-medium mr-2">{question.number}. </span>
                  <p className="font-medium break-words">{question.text[language]}</p>
                  </div>
                  <p className={`text-sm mt-2 break-words ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {language === 'en' ? 'Your answer' : 'Votre réponse'}:
                    {userAnswers.map(answerId => (
                      question.options.find(opt => opt.id === answerId)?.text[language]
                    )).join(', ') || (language === 'en' ? ' No answer' : ' Pas de réponse')}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-600 mt-1 break-words">
                      {language === 'en' ? 'Correct answer' : 'Réponse correcte'}:
                      {question.correctAnswers.map(answerId => (
                        question.options.find(opt => opt.id === answerId)?.text[language]
                      )).join(', ')}
                    </p>
                  )}
                  <div className='mt-4 p-3 border border-gray-200 rounded-lg bg-gray'>
                    <h4 className='text-l font-medium mb-1'>
                      {language === 'en' ? 'Explanation' : 'Explication'}
                    </h4>
                    <p className='text-sm text-gray-700 whitespace-pre-wrap' dangerouslySetInnerHTML={{
                      __html: getQuestionExplanation(question.id, language)
                    }}>
                      {/* {getQuestionExplanation(question.id, language)} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 space-y-4">
        <button
          onClick={downloadPDF}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          {language === 'en' ? 'Download Results (PDF)' : 'Télécharger les résultats (PDF)'}
        </button>

        <button
          onClick={onRetry}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {language === 'en' ? 'Try Again' : 'Réessayer'}
        </button>
        <button
          onClick={onHome}
          className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
        {language === 'en' ? 'Exit' : 'Quitter'}
        </button>
      </div>
    </div>
  )
}

export default Results