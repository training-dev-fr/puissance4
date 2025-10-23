let button = document.querySelector('#launchGame');


function checkName(field) {
    return field.value !== "";
}

function launchGame() {
    let player1 = document.querySelector('#player1');
    if (!checkName(player1)) {
        return player1.classList.add('error');
    }
    let player2 = document.querySelector('#player2');
    if (!checkName(player2)) {
        return player2.classList.add('error');
    }
    let order = Math.floor(Math.random() * 2);
    if (order === 1) {
        localStorage.setItem('player1', player1.value);
        localStorage.setItem('player2', player2.value);
    } else {
        localStorage.setItem('player2', player1.value);
        localStorage.setItem('player1', player2.value);
    }
    window.location.assign("game.html");
}

button.addEventListener('click', launchGame)