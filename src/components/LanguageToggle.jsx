import React from 'react'

function LanguageToggle({ language, onLanguageChange }) {
  return (
    <button
      onClick={() => onLanguageChange(language === 'en' ? 'fr' : 'en')}
      className="fixed top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      {language === 'en' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="8" height="24" fill="#002395"/>
        <rect x="8" width="8" height="24" fill="white"/>
        <rect x="16" width="8" height="24" fill="#ED2939"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="#012169"/>
        <path d="M0 0L24 24M24 0L0 24" stroke="white" strokeWidth="4"/>
        <path d="M12 0V24M0 12H24" stroke="white" strokeWidth="4"/>
        <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="2"/>
        <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2"/>
        </svg>
      )}
    </button>
  )
}

export default LanguageToggle