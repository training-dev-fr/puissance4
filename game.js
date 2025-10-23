let grille = [];
let players = [];
let currentPlayer = null;
let playerDom = document.querySelectorAll('.player');

for(let col = 0; col < 7;col++){
    let newCol = [];
    for(let square =0;square <7; square ++){
        newCol.push({x:col,y:square});
    }
    grille.push(newCol);
}

function showGrille(){
    let grilleDOM = '';
    for(let col of grille){
        grilleDOM += `<div class="col" data-col="${col[0].x}">`
        grilleDOM += `<button data-col="${col[0].x}"><i class="fa-solid fa-arrow-down"></i></button>`
        for(let square of col){
            grilleDOM += `<div class="square" data-square="${square.y}"></div>`
        }
        grilleDOM += `</div>`
    }
    let grilleElement = document.querySelector('.grille');
    grilleElement.innerHTML = grilleDOM;
}

function showPlayerNames(){
    playerDom[0].innerHTML = players[0].name;
    playerDom[1].innerHTML = players[1].name;
    playerDom[0].classList.add('hightlight')
}

function init(){
    showGrille();
    players.push({name: localStorage.getItem('player1'), color: "#D000D0"});
    players.push({name: localStorage.getItem('player2'), color: "#FF0000"});
    currentPlayer = 0;
    playerDom.forEach(player => {
        player.classList.remove('hightlight')
    })
    showPlayerNames();
    document.querySelectorAll('.col button').forEach(button => {
        button.addEventListener('click',addToken);
    });

    document.querySelector('#reset').addEventListener('click',init);
}

function addToken(event){
    let colId = event.currentTarget.dataset.col;
    let col = grille[colId];
    let tokenAdded = false;
    for(let square=col.length -1;square >= 0; square--){
        if(!col[square].token){
            col[square].token = players[currentPlayer].color;
            let newToken = document.querySelector(`.col[data-col="${colId}"] .square[data-square="${square}"]`);
            newToken.style.backgroundColor = players[currentPlayer].color;
            tokenAdded = true;
            break;
        }
    }
    if(tokenAdded){
        playerDom[currentPlayer].classList.remove('hightlight');
        if(currentPlayer === 0){
            currentPlayer = 1;
        }else{
            currentPlayer = 0;
        }
        playerDom[currentPlayer].classList.add('hightlight');
    }
}


init();

