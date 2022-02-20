let score1 = 0;
let score2 = 0;
let mark1 = 0;
let mark2 = 0;
let activePlayer;
let diceResult;


const app = {


    init: () => {
        console.log("init !");
        // 
        app.fetchComponents();
        app.newGame();

        app.newGameBtn.addEventListener("click", app.newGame)
        app.rollTheDice.addEventListener("click", app.rollDice);
        app.hold.addEventListener("click", app.holdScore);
    },

    fetchComponents: () => {
        app.rollTheDice = document.getElementById("rollTheDice");
        app.hold = document.getElementById("hold");
        app.newGameBtn = document.getElementById("newGameBtn")
        app.player1 = document.getElementById("player1");
        app.player2 = document.getElementById("player2");
        app.current1 = document.getElementById("current1");
        app.current2 = document.getElementById("current2");
        app.score1 = document.getElementById("score1");
        app.score2 = document.getElementById("score2");
    },

      newGame: () => {
        score1 = score2 = 0;
        document.getElementById('score1').textContent = score1;
        document.getElementById('score2').textContent = score2;

        mark1 = mark2 = 0
        document.getElementById('current1').textContent = mark1;
        document.getElementById('current2').textContent = mark2;

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
        let diceValue = app.getRandomNumber();

        document.getElementById('diceFace').src = `./images/${diceValue}.png`;

        diceValue === 1 ? app.checkValue() : app.addCurrent(diceValue);

    },

    checkValue: () => {
             if (activePlayer === 1 ){
                score1 = 0
                app.current1.textContent = score1
            } else {
                score2 = 0
                app.current2.textContent = score2
            }
            activePlayer = app.changePlayer();
    },

    addCurrent: (diceValue) => {
        console.log('addCurrent', diceValue)
        if (activePlayer === 1 ){
            score1 += diceValue
            app.current1.textContent = score1
        } else {
            score2 += diceValue
            app.current2.textContent = score2
        }
            console.log(score1, score2)

    },

    holdScore: () => {
        console.log('hold')
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
        activePlayer=app.changePlayer();
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
        if (activePlayer === 1) {
            console.log('first')
            app.player1.classList.remove('is-active')
            app.player2.classList.add('is-active')
             activePlayer=2
             
            
            
        } else {
            app.player2.classList.remove('is-active')
            app.player1.classList.add('is-active')
             activePlayer=1
            
        }
        
        return activePlayer
    }

};

document.addEventListener("DOMContentLoaded", app.init);
