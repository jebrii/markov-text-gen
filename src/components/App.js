import React, { useEffect, useState } from 'react'

import SampleTextAdder from './SampleTextAdder'

import { generateRandomStartString, generateText } from '../utils/generateText'
import { Button, TextInput, Header, colors, TextRegion, Typography } from './Common'

const App = () => {
  // == State ==
  const [numSentences, setNumSentences] = useState('1')
  const [markovOrder, setMarkovOrder] = useState('4')
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
        sampleTexts={sampleTexts}
        setSampleTexts={setSampleTexts}
      />

      <div style={styles.optionsContainer}>
        <TextInput
          label="Number of Sentences to Generate"
          value={numSentences}
          onChange={(e) => setNumSentences(e.target.value)}
        />
        <TextInput
          label="Markov Order"
          value={markovOrder}
          onChange={(e) => setMarkovOrder(e.target.value)}
        /> {/* TODO: Hoverable here to explain markov order*/}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end'
        }}>
          <TextInput
            label="Start String"
            value={startString}
            onChange={(e) => setStartString(e.target.value)}
          />
          <Button
            onClick={generateStartString}
          >Randomize</Button>  
        </div>
        <TextInput
          label="Max Output Length"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
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
          >Generate!</Button>
        </div>
        <Typography>Output</Typography>
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
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
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
