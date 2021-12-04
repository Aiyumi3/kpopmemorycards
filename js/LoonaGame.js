class LOONAGame extends Game{
    start(){
        super.start();
        cardArrLOONA.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/loona/fullAlbum_LOONA_and.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrLOONA[cardId].name);
        e.target.setAttribute('src', cardArrLOONA[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameLOONA.compare2Cards( './images/loona/logo_loona.png', gameLOONA, 8), 1000);
        }
    }
}
const gameLOONA = new LOONAGame('LOONA');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "loona":
            console.log(gameLOONA.name.toString());
            gameLOONA.start();
            gameLOONA.createBoard(cardArrLOONA, './images/loona/logo_loona.png', gameLOONA);
            break;
    }
});