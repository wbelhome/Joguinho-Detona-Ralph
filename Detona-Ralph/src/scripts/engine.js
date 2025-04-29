/* .PONTO se usa para CLASS's    
   #HASHTAG se usa para ID's

   VIEW = Variaveis utilizado para visualização
   VALUES = Variaveis utilizadas para algo não visual
*/
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    /*Esse objeto (values) pode guardar funções, como o countDownTimerId: setInterval(countDown, 1000)*/
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 10,
    },
    actions:{
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

/*Função que faz a contagem do tempo e quando ele termina emite um alarme*/
function countDown(){
    state.values.currentTime--; /*Variavel que conta internamente*/
    state.view.timeLeft.textContent = state.values.currentTime; /*Chama a contagem e altera na parte visual
    textContent é uma propriedade para chamar o texto em view
    */
    
    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("O tempo acabou!! O seu resultado foi: " + state.values.result);
    }
}

/*Função para um audio quando acerto o inimigo, com varivel como parametro para colocar outros audios*/
function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.1;
    audio.play();

}

/*Função para randomizar o enimigo nos quadrados*/
function randomSquare(){
    state.view.squares.forEach((square)=> {
        square.classList.remove("enemy");
    });

    /*Criando um número random para definir o quadrado*/
    let randomNumber = Math.floor(Math.random() * 9);

    /*Pega o número que o número sorteado para adicionar o inimigo*/
    let randomSquare = state.view.squares[randomNumber];

    /*Adiciona o inimigo no quadrado sorteado*/
    randomSquare.classList.add("enemy");

    /*Guarda o clique do id em */
    state.values.hitPosition = randomSquare.id;
}

/*Função para guardar temporariamente o inimigo e ele se mover sozinho
OBS.: Como boas práticas, deixar o tempo em numeros(1000) em uma variavel dentro de values
*/

//Outra forma de mover o inimigo sem utilizar as actions
//function moveEnemy(){
//   state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
//}

/*LISTENER vem de "OUVIR" a ação que esta por vir */
function addListenerHitBox() {
    state.view.squares.forEach((square) => { /*Para cada square */
        square.addEventListener("mousedown", () =>{ /*EventListener de clique no mouse*/
            if(square.id === state.values.hitPosition){ /*id do quadrado tem que ser igual a posição do clique*/
                state.values.result++ /*se acertar acrescenta +1 no score*/
                state.view.score.textContent = state.values.result; /*muda na parte visual(view) o score*/
                state.values.hitPosition = null; /*A posição volta a zero, pq vai randomizar outra posição */
                playSound("hit")
            }
        });
    });
}

function initialize() {
    addListenerHitBox(); 
}

initialize();


