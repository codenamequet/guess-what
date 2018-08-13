const availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const words = ['HOUSTON', 'TEXAS', 'MONEY', 'TORONTO', 'UNIVERSITY', 'CONTENDERS']
let guess = []
let answer = [] //word being guessed each round
let wrongGuess = 0

// takes a random index of the words array and pushes place holders on the board for each letter and also 
const startGame = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)].split('')
  const rightAnswer = answer.push(randomWord)
  const boardSetUp = randomWord.forEach(() => guess.push('_'))
  const board = guess.join(' ')
  console.log(board)
}

startGame()
//let userGuess = if letter clicked is right reveal it on the board else wrongGuess++

// if letter that users chose is included in answer variable display it at the right index.
//if guess is wrong display a different emoji
const mindBlown = () => {
  if (wrongGuess === 0) {
    console.log('😄')
    return  '😄'
  } else if (wrongGuess === 1) {
    console.log('😅')
    return '😅'
  } else if (wrongGuess === 2) {
    console.log('😫')
    return '😫'
  } else if (wrongGuess === 3) {
    console.log('😠')
    return '😠'
  } else if (wrongGuess === 4) {
    console.log('😡')
    return '😡'
  } else if (wrongGuess === 5) {
    console.log('🤬')
    return '🤬'
  } else if (wrongGuess === 6) {
    console.log('🤯')
    return '🤯'
  }
}

mindBlown()
