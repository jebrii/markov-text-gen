const sampleText = ``

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const startString = 'The '
const numSentences = 1

const buildSampleData = (text, order) => {
  const nGramHash = {}
  for (let i = 0; i <= sampleText.length - order; i++) {
    const nGram = text.substring(i, i + order);
    const nextChar = text[i + order]
    if (!nGramHash[nGram]) nGramHash[nGram] = []
    nGramHash[nGram].push(nextChar)
  }
  return nGramHash
}

const generateText = ({ nGramsDataset, markovOrder, startString, trainingData, numSentences=1, maxLength=999 }) => {
let generatedText = ''
  let accumulatedSentences = 0
  if (startString.length === markovOrder) {
    generatedText += startString
  } else {
    if (!startString) console.log(`Invalid start string: "${startString}"`)
    generatedText += generateRandomStartString({ trainingData, markovOrder })
  }
  if (!generatedText.length) throw `Failed to get start string`
  process.stdout.write(startString)

  let trailingQuotation = false
  for (let i = 0; i <= maxLength - markovOrder; i++) {
    let currentGram = generatedText.substring(i, i + markovOrder)
    let nextChar = random(nGramsDataset[currentGram]) || getCharacterFromPartialGram({ nGramsDataset, currentGram })
    nextChar = nextChar.toString()
    generatedText += nextChar
    if (nextChar === '"') trailingQuotation = !trailingQuotation
    process.stdout.write(nextChar.toString())

    if (['.', '?', '!'].includes(nextChar)) {
      if (trailingQuotation) {
        nextChar += '"'
        process.stdout.write('"')
      }
      accumulatedSentences++
    }
    if (accumulatedSentences === numSentences) break
  }
  return generatedText
}

const generateRandomStartString = ({ trainingData, markovOrder }) => {
  const order = markovOrder + 2
  const candidateStartStrings = []
  for (let i = 0; i <= trainingData.length - order; i++) {
    const nGram = trainingData.substring(i, i + order);
    if (nGram.substring(0, 2) === '. ') candidateStartStrings.push(nGram.substring(2, order))
  }
  const randomStartString = random(candidateStartStrings)
  return randomStartString
}

const getCharacterFromPartialGram = ({ nGramsDataset, currentGram }) => {
  let nextChar
  const len = currentGram.length
  for (let i = 1; i <= len; i++) {
    const subGram = currentGram.substring(i, len)
    const possibleMatches = Object.keys(nGramsDataset).filter(nGram => nGram.substring(i, len) === subGram)
    if (!!possibleMatches.length) {
      nextChar = nGramsDataset[random(possibleMatches)]
      break
    }
  }
  if (!nextChar) nextChar = random(alphabet)
  if (currentGram.substring(len - 2, len) === '. ') nextChar = nextChar.toUpper()
  return nextChar.toString()
}

const random = (array) => {
  if (!array || !array.length) return false
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

const markovOrder = 4

generateText({
  nGramsDataset: buildSampleData(sampleText, markovOrder),
  markovOrder,
  startString,
  trainingData: sampleText,
  numSentences: 1,
  maxLength: 999
})
