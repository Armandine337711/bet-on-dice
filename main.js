let score1 = score2 = mark1 = mark2 = 0;
let activePlayer;
let diceResult;


const app = {


    init: () => {
        console.log("init !");
        // 
        app.fetchComponents();
        app.newGame();

        app.rollTheDice.addEventListener("click", app.rollDice);
        app.hold.addEventListener("click", app.holdScore);
    },

    fetchComponents: () => {
        app.rollTheDice = document.getElementById("rollTheDice");
        app.hold = document.getElementById("hold");
        app.player1 = document.getElementById("player1");
        app.player2 = document.getElementById("player2");
        app.current1 = document.getElementById("current1");
        app.current2 = document.getElementById("current2");
        app.score1 = document.getElementById("score1");
        app.score2 = document.getElementById("score2");
    },

    addListenerToAction: (event) => {
        app.rollThedice.addEventListener("click", app.rollDice);
    },
    newGame: () => {
        score = [0, 0]
        document.getElementById('score1').textContent = score[0];
        document.getElementById('score2').textContent = score[1];

        current = [0, 0]
        document.getElementById('current1').textContent = current[0];
        document.getElementById('current2').textContent = current[1];

        diceResult = 0
        document.getElementById('diceFace').src = './images/global_dice.png'

        activePlayer = 1
        app.player1.classList.add('is-active');
        app.player2.classList.remove('is-active')


    },


    getRandomNumber: () => {
        let number = Math.floor(Math.random() * 6) + 1;
        return number;
    },

    rollDice: () => {
        console.log(activePlayer)
        let diceValue = app.getRandomNumber();

        document.getElementById('diceFace').src = `./images/${diceValue}.png`;
        app.addCurrent(diceValue);
        app.changePlayer(activePlayer);
    },

    addCurrent: (diceValue) => {
        if (activePlayer === 1) {
            if (diceValue === 1) {
                score1 = 0
            } else {
                score1 += diceValue
            }

            app.current1.textContent = score1
        } else {
            if (diceValue === 1) {
                score2 = 0
            } else {
                score2 += diceValue
            }
            app.current2.textContent = score2
        }

    },

    holdScore: () => {
        if (activePlayer === 1) {
            mark1 += score1
            score1 = 0
            app.score1.textContent = mark1
            app.current1.textContent = score1
        } else {
            mark2 += score2
            score2 = 0
            app.score2.textContent = mark2
            app.current2.textContent = score2
        }
        app.checkScore();
        acivePlayer=app.changePlayer();
    },

    checkScore: () => {
        if (mark1 >= 100) {
            alert(`Bravo Player1 : C'est gagné ! C'est gagné ! C'est gagné !`)
            app.init()
        } else if (mark2 >= 100) {
            alert(`Bravo Player2 : C'est gagné ! C'est gagné ! C'est gagné !`)
            app.init()
        } else {
            return
        }

    },

    changePlayer: () => {
        console.log('clic', activePlayer)
        if (activePlayer === 1) {
            console.log('first')
            app.player1.classList.remove('is-active')
            app.player2.classList.add('is-active')
             activePlayer=2
             console.log('choucroute', activePlayer)
            
            
        } else {
            app.player2.classList.remove('is-active')
            app.player1.classList.add('is-active')
             activePlayer=1
            
        }
        console.log('new active player', activePlayer)
        return activePlayer
    }

};

document.addEventListener("DOMContentLoaded", app.init);
