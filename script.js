const words = ['HOUSTON', 'TEXAS', 'MONEY', 'TORONTO', 'UNIVERSITY', 'CONTENDERS']
let guess = [] // blank lines 
let answer = [] // word being guessed each round
let userGuess = [] // letter that the user chose
let lettersGuessed = []
let wrongGuess = 0

// takes a random index of the words array and pushes place holders on the board for each letter 
const startRound = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)].split('')
  console.log(`this is the random word ${randomWord}`)
  answer = randomWord
  const boardSetUp = randomWord.forEach(() => guess.push('_'))
  const board = guess.join(' ')
}

startRound() // call this function in an event listener that handles starting the game
// let userGuess = if letter clicked is right reveal it on the board else wrongGuess++ each click should refresh userGuess before pushing a new letter.

const handleUserGuess = document.addEventListener('keyup', (e) => {
  userGuess.push(e.key)
  console.log(`this is the letter:`, e.key)
  if (answer.includes(userGuess[0])) {
    // for loop that looks to see if userGuess === answer[i] change guess[i] to userGuess
    for(let i = 0; i < answer.length; i++) {
      if (userGuess[0] === answer[i]) {
        guess[i] = userGuess[0]
      }
    }
    lettersGuessed.push(userGuess[0])
    userGuess = []
  }
  else {
    wrongGuess++
    console.log(mindBlown())
    lettersGuessed.push(userGuess[0])
    userGuess = []
  }
})

// if guess is wrong display a different emoji
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
