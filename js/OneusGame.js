class ONEUSGame extends Game{
    start(){
        super.start();
        cardArrONEUS.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/oneus/fullAlbum_oneus_bloodMoon.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrONEUS[cardId].name);
        e.target.setAttribute('src', cardArrONEUS[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameONEUS.compare2Cards( './images/oneus/logo_oneus.png', gameONEUS, 16), 1000);
        }
    }
}
const gameONEUS = new ONEUSGame('ONEUS');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "oneus":
            console.log(gameONEUS.name.toString());
            gameONEUS.start();
            gameONEUS.createBoard(cardArrONEUS, './images/oneus/logo_oneus.png', gameONEUS);
            break;
    }
});