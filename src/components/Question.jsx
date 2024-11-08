import React from 'react'
import { Star } from 'lucide-react'

function Question({ question, selectedAnswers, onAnswerSelect, onToggleFavorite, isFavorite, language }) {
  const isSelected = (optionId) => selectedAnswers.includes(optionId)

  const getNumeral = (num) => {
    const numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    return numerals[num - 1] || num.toString()
  }

  const getAlphabets = (num) => {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return alphabets[num - 1] || num.toString()
  } 

  const getRomanNumeral = (num) => {
    const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']
    return romanNumerals[num - 1] || num.toString()
  } 
  
  const renderTable = () => {
    if (!question.tableData) return null  
    
    return (
      <div className="m-6 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className=" bg-gray-50">
            <tr>
              {question.tableData.headers[language].map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {question.tableData.rows[language].map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2 text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderImage = () => {
    if (!question.image) return null

    return (
      <div className="m-8">
        <img
          src={question.image}
          alt={question.imageAlt[language]}
          className="w-4/4 justify-self-center rounded-lg shadow-md"
        />
      </div>
    )
  }

  const renderNumerList = () => {
    if (!question.numerList) return null

    const listNumList = question.numerList[language]

    if (!listNumList) return null;

    return (
      <div className="m-4 pl-6">
        {listNumList.map((item, index) => (
          <div key={index} className="mb-2">
           <span className='font-medium mr-2'>
            {getNumeral(index + 1)}.
           </span>
           {item}
          </div>
        ))}
      </div>
    );
  }

  const renderAlphabets = () => {
    if (!question.alphaList) return null

    const listAlphList = question.alphaList[language]

    if (!listAlphList) return null;

    return (
      <div className="m-4 pl-6">
        {listAlphList.map((item, index) => (
          <div key={index} className="mb-2">
           <span className='font-medium mr-2'>
            {getAlphabets(index + 1)}.
           </span>
           {item}
          </div>
        ))}
      </div>
    );
  }

  const renderBulletList = () => {
    if (!question.list) return null;

    // Access the list based on the selected language
    const listItems = question.list[language];

    if (!listItems) return null; // Return null if no items found for the selected language

    return (
      <div className=" pl-6">
        {listItems.map((item, index) => (
          <div key={index} className="mb-1">
           • {item}
          </div>
        ))}
      </div>
    );
};

const renderCells = () => {
  if (!question.cells) return null  
  const listCells = question.cells[language];
  if (!listCells) return null;
  
  return (
    <div className="pl-7 grid justify-evenly" >
      {listCells.map((cell, index) => (
        <div key={index} className="mb-2 px-2 py-1 flex gap-x-10" >
          {cell.map(((item, idx) => (
            <div key={idx} className='mb-1'>{item}</div>
          )))}
        </div>
      ))}
    </div>
  )
}

const renderOpenBulletList = () => {
  if (!question.listOpen) return null;

  // Access the list based on the selected language
  const listOpenItems = question.listOpen[language];

  if (!listOpenItems) return null; // Return null if no items found for the selected language

  return (
    <div className="ml-3 pl-10">
      {listOpenItems.map((item, index) => (
        <div key={index} className="mb-1">
        o  {item}
        </div>
      ))}
    </div>
  );
};

const renderRomanList = () => {
  if (!question.romanList) return null;
  const listRomanItems = question.romanList[language];
  if (!listRomanItems) return null;
  return (
    <div className="mb-4 pl-6">
      {listRomanItems.map((item, index) => 
      (
        <div key={index} className='mb-2'>
          <span className='font-medium mr-2'>
            {getRomanNumeral(index + 1)}.
          </span>
          {item}
        </div>
      ))}
    </div>
  )
}



const renderQuestionText = () => {
  const mainText = question.text?.[language] || ''
  const followUpText = question.text2?.[language] || ''
  const nextFollowUpText = question.text3?.[language] || ''
  const reservedText = question.textRe?.[language] || ''
  const italicText = question.italic?.[language] || ''
  const monospaceText = question.monospace?.[language] || ''
  const lastText= question.text4?.[language] || ''
  const betweenNumAndAlhp = question.textBetween?.[language] || ''
  // const formattedItalicText = italicText.replace(/\./g, '.<br>')
  
  
return (
  <div className="mb-4">
    <div className='flex'>
    <span className='text-l mr-2'>{question.number}. </span>
    <h3 className="text-l whitespace-pre-wrap">{mainText}</h3>
    </div>
    <h3 className='text-1 italic whitespace-pre-wrap mt-4'>{italicText}</h3>
    <h3 className='text-1 font-mono whitespace-pre-wrap mt-4 flex justify-center text-gray-500'>{monospaceText}</h3>
    {reservedText && <h3 className="text-l mt-4">
      {reservedText}</h3>}
    {renderRomanList()}
    {renderImage()}
    {renderNumerList()}
    <h3 className="text-l whitespace-pre-wrap">{betweenNumAndAlhp}</h3>
    {renderAlphabets()}
    {renderOpenBulletList()}
    {followUpText && <h3 className="text-l mt-4 whitespace-pre-wrap">{followUpText}</h3>}
    {renderTable()}
      {nextFollowUpText && <h3 className="text-l mt-4 whitespace-pre-wrap">
        {nextFollowUpText}</h3>}
    {renderBulletList()}
    {renderCells()}
    <h3 className="text-l">{lastText}</h3>
  </div>
)
}

return (
<div className="bg-white p-6 rounded-lg shadow-md">
  <div className="flex justify-between items-start mb-4">
    {renderQuestionText()}
    <button
      onClick={onToggleFavorite}
      className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
        isFavorite ? 'text-yellow-500' : 'text-gray-400'
      }`}
    >
      <Star className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
    </button>
  </div>
  
  {question.multipleAnswers && (
    <p className="text-sm text-gray-600 mb-4">
      {language === 'en' 
        ? '(SELECT TWO ANSWERS)' 
        : '(SELECTIONNEZ DEUX REPONSES)'}
    </p>
  )}

  <div className="space-y-3">
    {question.options.map((option) => (
      <label
        key={option.id}
        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors
          ${isSelected(option.id) 
            ? 'border-indigo-600 bg-indigo-50' 
            : 'border-gray-200 hover:border-indigo-200'}`}
      >
        <input
          type={question.multipleAnswers ? 'checkbox' : 'radio'}
          name={`question-${question.id}`}
          checked={isSelected(option.id)}
          onChange={() => onAnswerSelect(question.id, option.id)}
          className="mr-3"
        />
        <span className='whitespace-pre-wrap'>{option.text[language]}</span>
      </label>
    ))}
  </div>
</div>
)
}

export default Question