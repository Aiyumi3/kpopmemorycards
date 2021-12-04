class TBZGame extends Game{
    start(){
        super.start();
        cardArrTbz.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/tbz/fullalbum_tbz_maverick_ThrillRide.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrTbz[cardId].name);
        e.target.setAttribute('src', cardArrTbz[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameTBZ.compare2Cards( './images/tbz/tbz_logo.jpeg', gameTBZ, 9), 1000);
        }
    }
}
const gameTBZ = new TBZGame('TBZ');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "tbz":
            console.log(gameTBZ.name.toString());
            gameTBZ.start();
            gameTBZ.createBoard(cardArrTbz, './images/tbz/tbz_logo.jpeg', gameTBZ);
            break;
    }
});