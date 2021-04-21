import React, { useEffect, useState } from 'react'

import SampleTextAdder from './SampleTextAdder'

import { generateRandomStartString, generateText } from '../utils/generateText'
import { Button, TextInput, Dropdown, Header, colors, TextRegion } from './Common'

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
    <div style={styles.contentContainer}>
      <Header>Jebrii's Markov Text Generator</Header>
      <SampleTextAdder
        setSampleTexts={setSampleTexts}
      />

      <div style={styles.optionsContainer}>
        <TextInput
        
        />
        <Dropdown

        />

      </div>
      <div>
        <div style={styles.textGenButtonContainer}>
          <Button
            onClick={clearText}
          >Clear</Button>
          <Button
            onClick={generateNewText}
            primary
          >Generate</Button>
        </div>

        <TextRegion>{generatedText}</TextRegion>
      </div>
    </div>
  )
}

const styles = {
  contentContainer: {
    padding: '10% 20%',
    backgroundColor: colors.background,
    diplay: 'flex'
  },
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
