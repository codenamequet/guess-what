const letters = document.getElementsByClassName('letters')
// const availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// availableLetters.forEach(v => console.log(v))

const words = ['HOUSTON', 'TEXAS', 'MONEY', 'TORONTO', 'UNIVERSITY', 'CONTENDERS']
let guess = [] // blank lines 
let answer = [] // word being guessed each round
let userGuess = [] // letter that the user chose
let wrongGuess = 0

// takes a random index of the words array and pushes place holders on the board for each letter 
const startRound = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)].split('')
  console.log(`this is the random word ${randomWord} the length is ${randomWord.length}`)
  console.log(randomWord)
  // const rightAnswer = answer.push(randomWord)
  answer = randomWord
  const boardSetUp = randomWord.forEach(() => guess.push('_'))
  const board = guess.join(' ')
  console.log(`this is the board ${board} the length is ${board.length}`)
}

startRound() // call this function in an event listener that handles starting the game
// let userGuess = if letter clicked is right reveal it on the board else wrongGuess++ each click should refresh userGuess before pushing a new letter.

const handleLetters = () => {
  for (let i = 0; i <= letters.length; i++) {
    console.log(letters[i].innerHTML)
    letters[i].addEventListener('click', () => {
      console.log(letters[i].innerHTML)
      userGuess.push(letters[i].innerHTML)
    })
  }
}

// const handleLetters = () => {
//   console.log(letters.length)
//   letters.forEach(i => console.log(i.innerHTML))
  // letters.forEach(i => i.addEventListener('click', () => {
  //   console.log(letters[i].innerHTML)
  //   userGuess.push(letters[i].innerHTML)
  // }))
// }
//need to make function that makes letters[i] === availLetters[i] array
handleLetters()

//compare guess array to every index of the answer array
  //if userGuess is a match to any index change the guess value at that index to that letter (indexOf)
  // else wrongGuess+++
  // refresh guess
const handleUserGuess = () => {
  answer.forEach(() => answer.indexOf(userGuess).console.log('it worked!'))
  // console.log('working')
  // if (JSON.stringify(answer) === JSON.stringify(userGuess)) {
    // userGuess.pop()
  // } else {
  //   wrongGuess ++
  //   userGuess.pop()
  }
// }

handleUserGuess()

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

handleLetters()
