const cardArr = [
    1,2,3,4,5,6,7,8,9,10,11,
    1,2,3,4,5,6,7,8,9,10,11
];

const countCards = cardArr.length;
const cardsField = document.querySelector("#cards");

let timeTxt = document.querySelector('#time');
let scoreTxt = document.querySelector('#Score');
let progressBar = document.querySelector(".progress-bar");
let proressDisplay = document.querySelector(".progress");

let time = 0;
let timeM = 0;
let timer;
let score = 0;
let deletedCards = 0;
let progressNum = 0;
let selectedCards = []; 
let pause = false;

const game = document.querySelector('#game');


function start(){
        
        let timeAcc = () => {
            time++;
            timeTxt.innerHTML = "⏳: " + timeM + "m " + time + "s ";
            if(time === 60){
                timeM++;
                time -= 60;
                timeTxt.innerHTML = "⏳: " + timeM + "m " + time + "s ";
            }
        };
        timer = setInterval(timeAcc, 1000); // подождать 1 секунду чтобы высветилось время
        
        cardArr.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/tbz/fullalbum_tbz_maverick_ThrillRide.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
start();
function createBoard() {

    for (let i = 0; i < countCards; i++) {
        let li = document.createElement("li"); //card
        li.id = i;
        //li.style.backgroundImage = 'url("./images/tbz/tbz_logo.jpeg")';
        
        cardsField.appendChild(li); //game
    }
    
    cardsField.onclick = (e) => {
        if (pause === false) {
            let element = e.target;
            if (element.tagName == "LI" && element.className !== "active") {
                selectedCards.push(element);
                element.className = "active";
                element.style.backgroundImage = `url("./images/tbz/${cardArr[element.id]}.jpeg")`;

                if (selectedCards.length === 2) {
                    pause = true;
                    if (cardArr[selectedCards[0].id] === cardArr[selectedCards[1].id]) {
                        let hide = () => {
							selectedCards[0].style.visibility = "hidden";
                            selectedCards[1].style.visibility = "hidden";
						};
                        setTimeout(hide, 600); // подождать  чтобы //
						
                        deletedCards = deletedCards + 2;

                        score++;
                        score += 44;
                        scoreTxt.innerHTML = "🍪: " + score.toFixed(2);
						
                        progressBar.style.width = `${progressNum += 9.1}%`;//n    -------
                        progressBar.style.backgroundColor = "#f4bbff";
                    }
					
                    score--;
                    score -= 0.2;
                    scoreTxt.innerHTML = "🍪: " + score.toFixed(2);
					setTimeout(reset, 600);
                    
                }
            }
        }
    };

}
createBoard();
function reset() {
	for(let i = 0; i < countCards; i++) {
		cardsField.children[i].style.backgroundImage = 'url("./images/tbz/tbz_logo.jpeg")';
		cardsField.children[i].className = "";
	}
	selectedCards = [];

	pause = false;
	if (deletedCards == countCards) {
            game.innerHTML = "";
            while (game.firstChild) {
                game.removeChild(game.firstChild);
            }
            clearInterval(timer);
            swal({
                title: '✨🎈📢Congratulations✨🎊🎉 🌸~your game is finished successfully~🌸',
                text: ` in ⏳: ${timeM}m ${time}s  with  🍪: ${score.toFixed(2)} `,
                icon: "success",
                button: {
                    text: "~home~",
                    value: true,
                    visible: true,
                    className: "btn"
                }
            }).then(() => {
                location.reload();
            });
	}
}
      
