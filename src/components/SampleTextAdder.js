import React, { useState } from 'react'
import { Button, TextInput, TextRegion, Typography } from './Common'

const SampleTextAdder = ({
  sampleTexts,
  setSampleTexts
}) => {
  const [textToAdd, setTextToAdd] = useState('')
  const addSampleText = (text) => {
    const newSampleTexts = [...sampleTexts, text]
    setTextToAdd('')
    setSampleTexts(newSampleTexts)
  }
  const removeSampleText = (index) => {
    const newSampleTexts = [...sampleTexts]
    newSampleTexts.splice(index, 1)
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
            <Typography key={`sample-text-${index}`}>{text}</Typography>
            <Button
              key={`remove-button-${index}`}
              onClick={() => removeSampleText(index)}
            >Remove</Button>
          </>))}
        </TextRegion>
      </div>
    </div>
  )
}

export default SampleTextAdder