let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let nameBox = document.getElementById("nameBox");
let randomizeBtn = document.getElementById("randomizeBtn");
let teamBox = document.getElementById("teamBox");
let teamNumber = document.getElementById("teamNumber");
let numberOfPeoplePerTeam = document.getElementById("numberOfPeoplePerTeam");

players = new Array();

function enterPlayer() {
  saveBtn.addEventListener("click", function () {
    players = nameInput.value.split(",");
    console.log(players);
  });

  let allPlayers = "";
  for (let i = 0; i < players.length; i++) {
    allPlayers += players[i] + "<br/>\n";
  }
}

enterPlayer();

function teams() {
  let amountOfTeam = document.getElementById("teamNumber").value;
  let prTeam = document.getElementById("numberOfPeoplePerTeam").value;

  let innerText = "";
  for (let i = 0; i < players.length; i++) {
    innerText += "<br/>\n";
  }
  players = shufflePlayers(players);

  let finalTeams = new Array();

  for (let i = 0; i < amountOfTeam; i++) {
    let grpPlayers = "";

    for (j = 0; j < prTeam; j++) {
      grpPlayers += players[0] + ",";
      players.shift();
    }

    grpPlayers = grpPlayers.substring(0, grpPlayers.length - 1);
    finalTeams[i] = grpPlayers;
  }

  innerText += "<h4>Teams</h4><br/>\n";
  innerText += "<table width='50%' border='1'><tr>\n";
  for (let i = 0; i < amountOfTeam; i++) {
    let j = i + 1;
    let grpPlayers = finalTeams[i].split(",");
    innerText += "<td>Team " + j + "<br>";
    for (var k = 0; k < grpPlayers.length; k++) {
      innerText += grpPlayers[k] + "<br>";
    }

    innerText += "</td>\n";
  }

  innerText += "</tr></table>\n";
  teamBox.innerHTML = innerText;
}

function shufflePlayers(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

randomizeBtn.addEventListener("click", function () {
  teams();
});
