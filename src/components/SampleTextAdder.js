import React, { useState } from 'react'
import { Button, TextInput, TextRegion, Typography } from './Common'

const SampleTextAdder = ({
  sampleTexts,
  setSampleTexts
}) => {
  console.log("🚀 ~ file: SampleTextAdder.js ~ line 8 ~ sampleTexts", sampleTexts)
  const [textToAdd, setTextToAdd] = useState('')
  console.log("🚀 ~ file: SampleTextAdder.js ~ line 10 ~ textToAdd", textToAdd)
  const addSampleText = (text) => {
    const newSampleTexts = [...sampleTexts, text]
    setTextToAdd('')
    setSampleTexts(newSampleTexts)
  }
  const removeSampleText = (index) => {
    const newSampleTexts = sampleTexts.splice(index, 1)
    setSampleTexts(newSampleTexts)
  }

  return (
    <div>
      <div>
        <TextInput
          label={"New Text"}
          value={textToAdd}
          onChange={e => setTextToAdd(e.target.value)}
        />
        <Button
          onClick={() => addSampleText(textToAdd)}
        >Add</Button>
      </div>
      <div>
        <Typography>Sample Texts</Typography>
        <TextRegion>
          {sampleTexts.map((text, index) => (<>
            <Typography>{text}</Typography>
            <Button
              onClick={() => removeSampleText(index)}
            >Remove</Button>
          </>))}
        </TextRegion>
      </div>
    </div>
  )
}

export default SampleTextAdder