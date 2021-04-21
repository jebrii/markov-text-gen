import React, { useEffect, useState } from 'react'

import SampleTextAdder from 'src/components/SampleTextAdder'

import { generateRandomStartString, generateText } from 'src/utils/generateText'

const App = () => {
  // == State ==
  const [numSentences, setNumSentences] = useState(1)
  const [markovOrder, setMarkovOrder] = useState(4)
  const [sampleTexts, setSampleTexts] = useState([])
  const [startString, setStartString] = useState('The ')
  const [maxLength, setMaxLength] = useState(999)
  const [generatedText, setGeneratedText] = useState('')

  // == Effects ==
  let trainingData = ''
  useEffect(() => {
    trainingData = sampleTexts.join(' ')
  }, [sampleTexts])

  // == Util Functions ==
  const generateStartString = () => {
    const newStartString = generateRandomStartString({
      markovOrder,
      trainingData
    })
  }

  const generateNewText = () => {
    const newText = generateText({
      markovOrder,
      startString,
      trainingData,
      numSentences,
      maxLength
    })
    setGeneratedText(newText)
  }

  const clearText = () => setGeneratedText('')

  return (
    <div>
      <SampleTextAdder
        setSampleTexts={setSampleTexts}
      />

      <div style={styles.optionsContainer}>

      </div>
      <div>
        <div style={styles.textGenButtonContainer}>

        </div>

        <div style={styles.generatedTextRegion}>
          {generatedText}
        </div>
      </div>
    </div>
  )
}

const styles = {
  optionsContainer: {

  },
  textGenButtonContainer: {

  },
  generatedTextRegion: {
    background: `white`,
    border: `1px solid black`,
    width: `80%`,
    minHeight: `16em`
  }
}

export default App