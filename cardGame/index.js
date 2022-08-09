let deckId
let computerScore = 0
let myScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingText = document.getElementById("remaining")
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")

const winsound = new Audio ('sounds/cash.mp3');
const losssound = new Audio ('sounds/aww.mp3');
const draw = new Audio ('sounds/swish.m4a');

drawCardBtn.disabled = true
drawCardBtn.textContent='draw a new deck to start'


function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
            console.log(deckId)
        })
        newGame()
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    draw.play()
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText
            
            if (data.remaining === 0) {
                drawCardBtn.disabled = true
                drawCardBtn.textContent='draw another deck to restart'
                if (computerScore > myScore) {
                    header.textContent = "The computer won the game!"
                    losssound.play()
                } else if (myScore > computerScore) {
                    header.textContent = "You won the game!"
                    winsound.play()
                } else {
                    header.textContent = "It's a tie game!"
                }
            }
        })
})

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
        return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        myScore++
        myScoreEl.textContent = `My score: ${myScore}`
        return "You win!"
    } else {
        return "War!"
    }
}

const newGame = () => {
    drawCardBtn.disabled = false
    header.textContent = "Game of War"
    cardsContainer.children[0].innerHTML =``
    cardsContainer.children[1].innerHTML =``
    computerScore = 0
    computerScoreEl.textContent = `Computer score: ${computerScore}`
    myScore = 0
    myScoreEl.textContent = `My score: ${myScore}`
    drawCardBtn.textContent='Draw'
}

