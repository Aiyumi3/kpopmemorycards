const cardArr = [
    {
        name: 'bangchan',
        img: './images/skz/bangchan.jpg'
    },
    {
        name: 'bangchan',
        img: './images/skz/bangchan.jpg'
    },
    {
        name: 'han',
        img: './images/skz/han.jpg'
    },
    {
        name: 'han',
        img: './images/skz/han.jpg'
    },
    {
        name: 'i.n.',
        img: './images/skz/i.n..jpg'
    },
    {
       name: 'i.n.',
        img: './images/skz/i.n..jpg'
    },
    {
        name: 'lix',
        img: './images/skz/lix.jpg'
    },
    {
        name: 'lix',
        img: './images/skz/lix.jpg'
    },
    {
        name: 'seungmin',
        img: './images/skz/seungmin.jpg'
    },
    {
        name: 'seungmin',
        img: './images/skz/seungmin.jpg'
    },
    {
        name: 'changbin',
        img: './images/skz/changbin.jpg'
    },
    {
        name: 'changbin',
        img: './images/skz/changbin.jpg'
    },
    {
        name: 'hyunjin',
        img: './images/skz/hyunjin.jpg'
    },

    {
        name: 'hyunjin',
        img: './images/skz/hyunjin.jpg'
    },
    {
        name: 'leeknow',
        img: './images/skz/leeknow.jpg'
    },
    {
        name: 'leeknow',
        img: './images/skz/leeknow.jpg'
    }
];

const countCards = cardArr.length;
const cardsField = document.querySelector("#cards");
const skzGameB = document.querySelector('button#skz');
const welcomeTxt = document.querySelector('div#welcome');
let content = document.querySelector('#content');
let timeTxt = document.querySelector('#time');
let scoreTxt = document.querySelector('#Score');
let progressBar = document.querySelector(".progress-bar");
let proressDisplay = document.querySelector(".progress");
//const navBtns = document.querySelector("nav");
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
        content.style.height = "45px";
        welcomeTxt.style.display = "";
        txtGameB.disabled = true;
        tbzGameB.disabled = true;
        astroGameB.disabled = true;
        skzGameB.disabled = true;
        btsGameB.disabled = true;
        monstaxGameB.disabled = true; 
        ateezGameB.disabled = true; 
        ohmygirlGameB.disabled = true;		
        onfGameB.disabled = true;		
        oneusGameB.disabled = true;		
        itzyGameB.disabled = true;		
        loonaGameB.disabled = true;		
        ab6ixGameB.disabled = true;		
        wekimekiGameB.disabled = true;		
        redvelvetGameB.disabled = true;		
        proressDisplay.style.display = "";
        game.style.display = "";

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
        let music = new Audio('./images/skz/fullAlbum_Skz_christmasEvel.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }

function createBoard() {
        for(let i = 0; i < countCards; i++){
            //let card = document.createElement('img');
            let li = document.createElement("li"); //card
            li.id = i;
            li..style.backgroundImage = 'url("./images/skz/logo_skz.jpg")';
           // card.setAttribute('img-id', i);
	     cardsField.appendChild(li); //game

            //game.appendChild(card);
           // card.addEventListener('click', gamen.flipCard);
        }
    }
    
  cardsField.onclick = function(event) {
	if(pause == false) {
		let element = event.target;
		if(element.tagName == "li" && element.className != "active") {
			selectedCards.push(element);
			element.className = "active";
			element.style.backgroundImage = `url("./images/skz/${cardArr[element.id].img}")`;

			if(selectedCards.length == 2) {
				pause = true;
                
				if( cardArr[ selectedCards[0].id ].img == cardArr[ selectedCards[1].id ].img ) {
					selectedCards[0].style.visibility = "hidden";
					selectedCards[1].style.visibility = "hidden";
					deletedCards = deletedCards + 2;
                    
                                        score++;
                                        score += 10;
                                        scoreTxt.innerHTML = "🍪: " + score;
                                        progressBar.style.width = `${progressNum += 15}%`;//n    -------
                                        progressBar.style.backgroundColor = "#f4bbff";
				}else{
                                        score--;
                                        score -= 5;
                                        scoreTxt.innerHTML = "🍪: " + score;
                                }
                                setTimeout(reset, 600);
			}
		 }
	  }
  };
function reset() {
	for(let i = 0; i < countCards; i++) {
		cardsField.children[i].style.backgroundImage = 'url("./images/skz/logo_skz.jpg")';
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
                text: ` in ⏳: ${timeM}m ${time}s  with  🍪: ${score} `,
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
skzGameB.onclick = function() {
//navBtns.addEventListener("click", evt =>  {
    //let targetId = evt.target.id;
    //switch (targetId) {
       // case "skz":
     console.log('gameSKZ');
     start();
     createBoard();
          //  break;
   // }
};

