const userImages = [
  {
    name: 'rock',
    url: `./media/user-rock.png`
  },
  {
    name: 'paper',
    url: `./media/user-paper.png`
  },
    {
    name: 'scissors',
    url: `./media/user-scissors.png`
  },
];

const compImages = [
  {
    name: 'rock',
    url: `./media/comp-rock.png`
  },
  {
    name: 'paper',
    url: `./media/comp-paper.png`
  },
  {
    name: 'scissors',
    url: `./media/comp-scissors.png`
  },
];

let userChoice = '';
let compChoice = '';

function getUserChoice(choice) {
  let userHand = document.getElementById('user-hand');
  let userHandContent = '';
  let image = userImages.find((image) => image.name == choice);
  userHandContent = `<img src="${image.url}" class="w-100">${image.name}`;
  userHand.innerHTML = userHandContent;
  document.getElementById('header-text').innerHTML = 
  `<div>Are you sure? <button class="btn btn-rounded bg-primary text-center" onclick="startRound()">Start Round</button></div>`
};

function getComputerChoice() {
  let compHand = document.getElementById('comp-hand');
  let compHandContent = '';
  let randomIndex = Math.floor(Math.random() * 3);
  let indexChoice = compImages[randomIndex];
  compChoice = indexChoice.name;
  compHandContent = `<img src="${indexChoice.url}" class="w-100">${compChoice}`;
  compHand.innerHTML = compHandContent;
}



function compareChoices() {
  
}

function startRound() {
  document.getElementById('choices-box').classList.remove('show-content');
  document.getElementById('choices-box').classList.add('hide-content');
  getComputerChoice();
  compareChoices();
  declareWinner();
};