const userImages = [
  {
    name: 'userRock',
    nickName: 'rock',
    url: `./media/user-rock.png`
  },
  {
    name: 'userPaper',
    nickName: 'paper',
    url: `./media/user-paper.png`
  },
    {
    name: 'userScissors',
    nickName: 'scissors',
    url: `./media/user-scissors.png`
  },
];

const compImages = [
  {
    name: 'compRock',
    nickName: 'rock',
    url: `./media/comp-rock.png`
  },
  {
    name: 'compPaper',
    nickName: 'paper',
    url: `./media/comp-paper.png`
  },
  {
    name: 'compScissors',
    nickName: 'scissors',
    url: `./media/comp-scissors.png`
  },
];

let userChoice = '';
let compChoice = '';

function getUserChoice(choice) {
  userChoice = choice;
  let userHand = document.getElementById('user-hand');
  let userHandContent = '';
  let image = userImages.find((image) => image.name == choice);
  userHandContent = `<img src="${image.url}" class="w-100">${image.nickName}`;
  userHand.innerHTML = userHandContent;
  document.getElementById('header-text').innerHTML = 
  `<div>Are you sure? <button class="btn btn-rounded bg-primary text-center" onclick="startRound()">Start Round</button></div>`
};

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  let indexChoice = compImages[randomIndex];
  compChoice = indexChoice.nickName;
}

function compareChoices() {
  
}

function startRound() {
  document.getElementById('choices-box').classList.remove('show-content');
  document.getElementById('choices-box').classList.add('hide-content');
};