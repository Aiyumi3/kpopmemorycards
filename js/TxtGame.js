class TXTGame extends Game{
    start(){
        super.start();
        cardArrTxt.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/txt/Full_Album_TXT_THE_CHAOS.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.currentTarget.getAttribute('img-id');
        cardsChosen.push(cardArrTxt[cardId].name);
        e.target.setAttribute('src', cardArrTxt[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameTXT.compare2Cards('./images/txt/txt_logo.jpg', gameTXT, 20), 1000);
        }
    }
}
const gameTXT = new TXTGame('TXT');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "txt":
            console.log(gameTXT.name.toString());
            gameTXT.start();
            gameTXT.createBoard(cardArrTxt, './images/txt/txt_logo.jpg', gameTXT);
            break;
    }
});