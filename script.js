const words = ['ALGERIA', 'ANGOLA', 'BENIN', 'BOTSWANA', 'BURKINA FASO', 'BURUNDI', 'CABO VEDE', 'CAMEROON', 'CHAD', 'COMOROS', 'DEMOCRATIC REPUBLIC OF THE CONGO', 'REPUBLIC OF THE CONGO', 'COTE D\'IVOIRE', 'DJIBOUTI', 'EGYPT', 'EQUATORIAL GUINEA', 'ERITREA', 'ESWATINI', 'ETHIOPIA', 'GABON', 'GAMBIA,' 'GHANA', 'GUINEA', 'GUINEA-BISSAU', 'KENYA', 'LESOTHA', 'LIBERIA', 'LIBYA', 'MADAGASCAR', 'MALAWI', 'MALI', 'MAURITANIA', 'MAURITIUS', 'MOROCCO', 'MOZAMBIQUE', 'NAMIBIA', 'NIGER', 'NIGERIA', 'RWANDA', 'SAO TOME AND PRINCIPE', 'SENEGAL', 'SEYCHELLES', 'SIERRA LEONE', 'SOMALIA', 'SOUTH AFRICA', 'SOUTH SUDAN', 'SUDAN', 'TANZANIA', 'TOGO', 'TUNISIA', 'UGANDA', 'ZAMBIA', 'ZIMBABWE' ]
let guess = [] // blank lines 
let answer = [] // word being guessed each round
let userGuess = [] // letter that the user chose
let lettersGuessed = [] // letters that have been guessed so far
let wrongGuess = 0
let wins = 0
let losses = 0

// takes a random index of the words array and pushes place holders on the board for each letter 
const startRound = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)].split('')
  console.log(`this is the random word ${randomWord}`)
  answer = randomWord
  const boardSetUp = randomWord.forEach(i => {
    if (i === ' ') {
      guess.push(' ')
    } else if (i === '\'') {
      guess.push('\'')
    }  
    else {
      guess.push('_')
    }
  })
  const board = guess.join(' ')
  document.getElementsByClassName('game-board')[0].innerHTML = board
}

startRound() // call this function in an event listener that handles starting the game

//if the letter guessed is in lettersGuessed alert the user they already guessed that letter
const handleUserGuess = document.addEventListener('keyup', (e) => {
  userGuess.push(e.key.toUpperCase())
  console.log(`this is the letter:`, e.key)
  if (answer.includes(userGuess[0])) {
    // for loop that looks to see if userGuess === answer[i] change guess[i] to userGuess
    for(let i = 0; i < answer.length; i++) {
      if (userGuess[0] === answer[i]) {
        guess[i] = userGuess[0]
      }
    }
    document.getElementsByClassName('game-board')[0].innerHTML = guess
    lettersGuessed.push(userGuess[0])
    document.getElementsByClassName('guesses')[0].innerHTML = `Letters Guessed So Far: ${lettersGuessed}`
    userGuess = []
  }
  else {
    wrongGuess++
    console.log(mindBlown())
    lettersGuessed.push(userGuess[0])
    document.getElementsByClassName('guesses')[0].innerHTML = `Letters Guessed So Far: ${lettersGuessed}`
    userGuess = []
  }
  handleWinsAndLoses()
})

const handleWinsAndLoses = () => {
  if (JSON.stringify(guess) === JSON.stringify(answer)) {
    wins++
    alert(`You guess correctly! The answer was ${answer}! Let's try again`)
  }
  else if (wrongGuess === 6) {
    losses++
    alert(`You lose! The correct answer was ${answer}! Now the emoji gets it!`)
  }
}

// if guess is wrong display a different emoji
const mindBlown = () => {
  if (wrongGuess === 0) {
    return  document.getElementsByClassName('emoji-container')[0].innerHTML = '😄'
  } else if (wrongGuess === 1) {
      return document.getElementsByClassName('emoji-container')[0].innerHTML = '😅'
  } else if (wrongGuess === 2) {
      return document.getElementsByClassName('emoji-container')[0].innerHTML = '😫'
  } else if (wrongGuess === 3) {
      return document.getElementsByClassName('emoji-container')[0].innerHTML = '😠'
  } else if (wrongGuess === 4) {
      return document.getElementsByClassName('emoji-container')[0].innerHTML = '😡'
  } else if (wrongGuess === 5) {
      return document.getElementsByClassName('emoji-container')[0].innerHTML = '🤬'
  } else if (wrongGuess === 6) {
      return document.getElementsByClassName('emoji-container')[0].innerHTML = '🤯'
  } 

}

mindBlown()
