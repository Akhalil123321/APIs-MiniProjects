// var imgs =[
//   "cards/1.png",
//   "cards/2.png",
//   "cards/3.png",
//   "cards/4.png",
//   "cards/5.png",
//   "cards/6.png",
//   "cards/7.png",
//   "cards/8.png",
//   "cards/9.png",
//   "cards/10.png",
//   "cards/11.png",
//   "cards/12.png",
//   "cards/13.png"
// ]

let player ={
  name:"Ahmed",
  chips:200
}
let cards =[] //array
let sum = 0
let hasBlackjack = false
let isAlive = false
let messege = ""
let messegeEl=document.getElementById("messege-el")
// let cardEl=document.getElementById("card-el") //getElementById = querySelector
let cardEl = document.querySelector("#card-el") // make the same thing but call anything
let sumEl=document.getElementById("sum-el")
let playerEl=document.getElementById("player-el")
let playerSum = player.chips
playerEl.textContent = player.name + ": $ " + playerSum

//cards
let card1Replace = document.getElementById("cardArea1")
let card2Replace = document.getElementById("cardArea2")
let card3Replace = document.getElementById("cardArea3")
let card4Replace = document.getElementById("cardArea4")
let card5Replace = document.getElementById("cardArea5")
let card6Replace = document.getElementById("cardArea6")

const winsound = new Audio ('sounds/cash.mp3');
const losssound = new Audio ('sounds/aww.mp3');

function getRandomImage(){
  let randomImage = Math.floor(Math.random() *4) + 1
if (randomImage ===1 ){
  return "cards/10.png"
}else if(randomImage ===2){
  return "cards/11.png"
}else if(randomImage ===3){
  return "cards/12.png"
}else if(randomImage===4){
  return"cards/13.png"
}
}


let value =""
function getRandomCard(){
  let randomCard = Math.floor(Math.random() *13) + 1 //use random card between 1-10
  if(randomCard === 1){
    randomCard = 11
  }else if(randomCard === 10){
    randomCard = 10
  }else if(randomCard===11){
  randomCard=10
}else if(randomCard===12){
  randomCard=10
}else if(randomCard===13){
  randomCard=10
}else{
    randomCard = randomCard
  }
    return  randomCard;
  }

function startGame(){
isAlive = true
let fristCard = getRandomCard()
let secondCard = getRandomCard()
cards =[fristCard , secondCard]
sum = fristCard + secondCard
  card3Replace.src ="cards/transparent.png"
  card4Replace.src ="cards/transparent.png"
  card5Replace.src ="cards/transparent.png"
  card6Replace.src ="cards/transparent.png"
  renderGame()
  if(sum>=21){
    document.getElementById("newCard").textContent="RESTART"
  }
}

function newCard(){
  if(sum<21){
  newC()
  renderGame()
  }else if(sum>=21){
    restart()
    document.getElementById("newCard").textContent="NEW CARD"
  }
  if(sum>=21){
    document.getElementById("newCard").textContent="RESTART"
  }
}
function newGame(){
  playerSum = 200
  playerEl.textContent = player.name + ": $ " + playerSum
  restart()
}

function  renderGame(){
  
  document.getElementById("newCard").textContent="NEW CARD"
  cardEl.textContent ="Cards :"
  for(let i = 0;  i < cards.length; i ++){
    cardEl.textContent += cards[i] + ","
      if(cards[0] ===2){
        card1Replace.src="cards/2.png"
      }else if(cards[0] ===3){
        card1Replace.src="cards/3.png"
      }else if(cards[0] ===4){
        card1Replace.src="cards/4.png"
      }else if(cards[0] ===5){
        card1Replace.src="cards/5.png"
      }else if(cards[0] ===6){
        card1Replace.src="cards/6.png"
      }else if(cards[0] ===7){
        card1Replace.src="cards/7.png"
      }else if(cards[0] ===8){
        card1Replace.src="cards/8.png"
      }else if(cards[0] ===9){
        card1Replace.src="cards/9.png"
      }else if(cards[0] ===10 ){
        card1Replace.src= "cards/10.png"
      }else if(cards[3] ===10 &&   value === "prince"){
        card1Replace.src="cards/11.png"
      }else if(cards[3] ===10 && value ==="queen"){
        card1Replace.src="cards/12.png"
      }else if(cards[3] ===10 &&   value==="king"){
        card1Replace.src="cards/13.png"
      }else if(cards[0] ===11){
        card1Replace.src="cards/1.png"
      }


    if(cards[1] ===2){
      card2Replace.src="cards/2.png"
    }else if(cards[1] ===3){
      card2Replace.src="cards/3.png"
    }else if(cards[1] ===4){
      card2Replace.src="cards/4.png"
    }else if(cards[1] ===5){
      card2Replace.src="cards/5.png"
    }else if(cards[1] ===6){
      card2Replace.src="cards/6.png"
    }else if(cards[1] ===7){
      card2Replace.src="cards/7.png"
    }else if(cards[1] ===8){
      card2Replace.src="cards/8.png"
    }else if(cards[1] ===9){
      card2Replace.src="cards/9.png"
    }else if(cards[1] ===10 ){
      card2Replace.src="cards/10.png"
    }else if(cards[3] ===10 &&   value === "prince"){
      card2Replace.src="cards/11.png"
    }else if(cards[3] ===10 && value ==="queen"){
      card2Replace.src="cards/12.png"
    }else if(cards[3] ===10 &&   value==="king"){
      card2Replace.src="cards/13.png"
    }else if(cards[1] ===11){
      card2Replace.src="cards/1.png"
    }


    if(cards[2] ===2){
      card3Replace.src="cards/2.png"
    }else if(cards[2] ===3){
      card3Replace.src="cards/3.png"
    }else if(cards[2] ===4){
      card3Replace.src="cards/4.png"
    }else if(cards[2] ===5){
      card3Replace.src="cards/5.png"
    }else if(cards[2] ===6){
      card3Replace.src="cards/6.png"
    }else if(cards[2] ===7){
      card3Replace.src="cards/7.png"
    }else if(cards[2] ===8){
      card3Replace.src="cards/8.png"
    }else if(cards[2] ===9){
      card3Replace.src="cards/9.png"
    }else if(cards[2] ===10 ){
      card3Replace.src="cards/10.png"
    }else if(cards[3] ===10 &&   value === "prince"){
      card3Replace.src="cards/11.png"
    }else if(cards[3] ===10 && value ==="queen"){
      card3Replace.src="cards/12.png"
    }else if(cards[3] ===10 &&   value==="king"){
      card3Replace.src="cards/13.png"
    }else if(cards[2] ===11){
      card3Replace.src="cards/1.png"
    }
    

    if(cards[3] ===2){
      card4Replace.src="cards/2.png"
    }else if(cards[3] ===3){
      card4Replace.src="cards/3.png"
    }else if(cards[3] ===4){
      card4Replace.src="cards/4.png"
    }else if(cards[3] ===5){
      card4Replace.src="cards/5.png"
    }else if(cards[3] ===6){
      card4Replace.src="cards/6.png"
    }else if(cards[3] ===7){
      card4Replace.src="cards/7.png"
    }else if(cards[3] ===8){
      card4Replace.src="cards/8.png"
    }else if(cards[3] ===9){
      card4Replace.src="cards/9.png"
    }else if(cards[3] ===10 ){
      card4Replace.src="cards/10.png"
    }else if(cards[3] ===10 &&   value === "prince"){
      card4Replace.src="cards/11.png"
    }else if(cards[3] ===10 && value ==="queen"){
      card4Replace.src="cards/12.png"
    }else if(cards[3] ===10 &&   value==="king"){
      card4Replace.src="cards/13.png"
    }else if(cards[3] ===11){
      card4Replace.src="cards/1.png"
    }

    if(cards[4] ===2){
      card5Replace.src="cards/2.png"
    }else if(cards[4] ===3){
      card5Replace.src="cards/3.png"
    }else if(cards[4] ===4){
      card5Replace.src="cards/4.png"
    }else if(cards[4] ===5){
      card5Replace.src="cards/5.png"
    }else if(cards[4] ===6){
      card5Replace.src="cards/6.png"
    }else if(cards[4] ===7){
      card5Replace.src="cards/7.png"
    }else if(cards[4] ===8){
      card5Replace.src="cards/8.png"
    }else if(cards[4] ===9){
      card5Replace.src="cards/9.png"
    }else if(cards[4] ===10 ){
      card5Replace.src="cards/10.png"
    }else if(cards[3] ===10 &&   value === "prince"){
      card5Replace.src="cards/11.png"
    }else if(cards[3] ===10 && value ==="queen"){
      card5Replace.src="cards/12.png"
    }else if(cards[3] ===10 &&   value==="king"){
      card5Replace.src="cards/13.png"
    }else if(cards[4] ===11){
      card5Replace.src="cards/1.png"
    }


    if(cards[5] ===2){
      card6Replace.src="cards/2.png"
    }else if(cards[5] ===3){
      card6Replace.src="cards/3.png"
    }else if(cards[5] ===4){
      card6Replace.src="cards/4.png"
    }else if(cards[5] ===5){
      card6Replace.src="cards/5.png"
    }else if(cards[5] ===6){
      card6Replace.src="cards/6.png"
    }else if(cards[5] ===7){
      card6Replace.src="cards/7.png"
    }else if(cards[5] ===8){
      card6Replace.src="cards/8.png"
    }else if(cards[5] ===9){
      card6Replace.src="cards/9.png"
    }else if(cards[5] ===10 ){
      card6Replace.src="cards/10.png"
    }else if(cards[3] ===10 &&   value === "prince"){
      card6Replace.src="cards/11.png"
    }else if(cards[3] ===10 && value ==="queen"){
      card6Replace.src="cards/12.png"
    }else if(cards[3] ===10 &&   value==="king"){
      card6Replace.src="cards/13.png"
    }else if(cards[5] ===11){
      card6Replace.src="cards/1.png"
    }
    
  }
  sumEl.textContent = "Sum : " + sum
  if (sum <= 20) {
    messegeEl.textContent = "Do you want to draw anew card ?"
  } else if (sum === 21) {
    messegeEl.textContent = "whoooo! you'v got blackjack" 
    hasBlackjack = true
    playerSum +=140
    winsound.play()
    playerEl.textContent = player.name + ": $ " + playerSum
  } else {
    messegeEl.textContent = "unlucky! you're out of the game"
    isAlive = false
    playerSum -=30
    losssound.play()
    playerEl.textContent = player.name + ": $ " + playerSum
  }
  if(playerSum<=0){
    messegeEl.textContent = "Game Over !!"
  }
}

function newC(){
  console.log("Drawing anew card from the deak !");
  let thirdCard = ""
  thirdCard = getRandomCard()
  sum += thirdCard
  cards.push(thirdCard) //add vaue to  array
}

function restart(){
  cardEl.textContent = "Cards :"
  sumEl.textContent = "Sum : "
  fristCard = getRandomCard()
  secondCard = getRandomCard()
  sum=fristCard+secondCard
  cards =[fristCard , secondCard]
  messegeEl.textContent = "Wants to play a round ?"
  card1Replace.src ="cards/transparent.png"
  card2Replace.src ="cards/transparent.png"
  card3Replace.src ="cards/transparent.png"
  card4Replace.src ="cards/transparent.png"
  card5Replace.src ="cards/transparent.png"
  card6Replace.src ="cards/transparent.png"
}
