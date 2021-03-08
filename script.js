nameInput = document.getElementById("nameInput");
saveBtn = document.getElementById("saveBtn");
nameBox = document.getElementById("nameBox");
randomizeBtn = document.getElementById("randomizeBtn");
teamBox = document.getElementById("teamBox");
teamNumber = document.getElementById("teamNumber");

let players = [];
let amountOfTeams;
let teams = [];

function addTeamMembers() {
  yourName = nameInput.value;
  players.push(yourName);
}

saveBtn.addEventListener("click", function () {
  addTeamMembers();
  nameBox.innerHTML = players;
  console.log(players);
});

function shuffleNames(players) {
  //addTeamMembers();

  for (var i = players.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = players[i];
    players[i] = players[j];
    players[j] = temp;
  }
  return players;
}

function createRandomTeams(numberOfTeams) {
  let shuffledPlayers = shuffleNames(players);

  for (let i = 0; i < numberOfTeams.length; i++) {
    console.log("heloo");
    let team = `team ${numberOfTeams[i]}`;
    console.log("team", team);
    let teamObject = { [team]: [] };
    teams.push(teamObject);
  }

  console.log("randomteams", teams);
  console.log("numberofteams", numberOfTeams);
}

function splitTeams(players) {
  //return { team1: players.splice(0, Math.floor(players.length / 2)), team2: players };
}

randomizeBtn.addEventListener("click", function () {
  //addTeamMembers(players);
  //shuffleNames(players);
  let numberOfTeams = teamNumber.value;
  createRandomTeams(numberOfTeams);

  // console.log(teams.team1, teams.team2);

  // teamBox.innerHTML = `team1: ${teams.team1[0]} ${teams.team1[1]} team2: ${teams.team2[0]} ${teams.team2[1]} `;

  // console.log("new", players);
});
