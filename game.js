let grille = [];
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
        grilleDOM += `<div class="col">`
        for(let square of col){
            grilleDOM += `<div class="square"></div>`
        }
        grilleDOM += `</div>`
    }
    let grilleElement = document.querySelector('.grille');
    grilleElement.innerHTML = grilleDOM;
}

showGrille();
