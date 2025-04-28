/* .PONTO se usa para CLASS's    
   #HASHTAG se usa para ID's
*/
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-lift"),
        score: document.querySelector("#score"),
    },
    values: {},
};

/*LISTENER vem de "OUVIR" a ação que esta por vir */
function addListenerHitBox() {
    state.view.squares.forEach((square) => {});
}

function initialize() {}

initialize();


