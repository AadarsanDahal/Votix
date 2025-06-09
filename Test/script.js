let votes = {
  agree: 0,
  not_agree: 0
};




// Load votes from localStorage (if needed)
window.onload = function () {
  if (localStorage.getItem('voted')) {
    disableButtons();
    showUserChoice(localStorage.getItem('voted'));
  }

  // OptWional: Load saved votes from localStorage (non-persistent if not shared backend)
  document.getElementById('votesAgree').textContent = votes.agree;
  document.getElementById('votesNotAgree').textContent = votes.not_agree;
};



function vote(option) {
  if (localStorage.getItem('voted')) {
    alert("You have already voted!");
    return;
  }

  if (option === 'agree') {
    votes.agree++;
    document.getElementById('votesAgree').textContent = votes.agree;
  } else if (option === 'not_agree') {
    votes.not_agree++;
    document.getElementById('votesNotAgree').textContent = votes.not_agree;
  }

  localStorage.setItem('voted', option);
  disableButtons();
  showUserChoice(option);
}

function disableButtons() {
  document.getElementById('agreeBtn').disabled = true;
  document.getElementById('notAgreeBtn').disabled = true;
}

function showUserChoice(choice) {
  const message = choice === 'agree' ? "You voted: Agreed ✅" : "You voted: Not Agreed ❌";
  document.getElementById('userChoice').textContent = message;
}
