nameInput = document.getElementById("nameInput");
saveBtn = document.getElementById("saveBtn");
nameBox = document.getElementById("nameBox");
randomizeBtn = document.getElementById("randomizeBtn");
teamBox = document.getElementById("teamBox");

let names = [];

function addTeamMembers() {
  yourName = nameInput.value;
  names.push(yourName);
}

saveBtn.addEventListener("click", function () {
  addTeamMembers(names);
  nameBox.innerHTML = names;
  console.log(names);
});

function shuffleNames(names) {
  addTeamMembers();

  for (var i = names.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = names[i];
    names[i] = names[j];
    names[j] = temp;
  }
  return names;
}

// function splitTeams(names) {
//   return { team1: names.splice(0, Math.floor(names.length / 2)), team2: names };
// }

randomizeBtn.addEventListener("click", function () {
  addTeamMembers(names);
  shuffleNames(names);

  teamBox.innerHTML = names;

  console.log("new", names);
});
