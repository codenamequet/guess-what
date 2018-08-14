const letters = document.getElementsByClassName('letters')
// const availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const handleLetters = () => {
  for (let i = 0; i <= letters.length; i++) {
    console.log(letters[i].innerHTML)
    letters[i].addEventListener('click', () => {
      console.log(letters[i].innerHTML)
    })
  }
}
//need to make functin that makes letters[i] === availLetters[i] array
handleLetters()

const startButton = () => {
  let start = document.getElementsByClassName('start-button')[0]
  start.addEventListener('click', () => {
      glowUp()
  })
}

const words = ['HOUSTON', 'TEXAS', 'MONEY', 'TORONTO', 'UNIVERSITY', 'CONTENDERS']
let guess = [] // blank lines 
let answer = [] // word being guessed each round
let wrongGuess = 0

// takes a random index of the words array and pushes place holders on the board for each letter 
const startRound = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)].split('')
  console.log(`this is the random word ${randomWord}`)
  const rightAnswer = answer.push(randomWord)
  const boardSetUp = randomWord.forEach(() => guess.push('_'))
  const board = guess.join(' ')
  console.log(`this is the board ${board}`)
}

startRound()
// let userGuess = if letter clicked is right reveal it on the board else wrongGuess++ each click should refresh userGuess before pushing a new letter.

let userGuess = []

const userClick = (e) => {
  // check what letter user clicked
  // userGuess.push(e.value)
  // 
}

const handleUserGuess = () => {
  if (JSON.stringify(answer) === JSON.stringify(userGuess)) {
    // reveal it on the board
      // itterate over each indexOf answer
      // once a match is made change the matching index of guess to that letter
      // refresh guess
  } else {
    wrongGuess ++
  }
}

// if letter that users chose is included in answer variable display it at the right index.
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
