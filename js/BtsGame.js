class BTSGame extends Game{
    start(){
        super.start();
        cardArrBTS.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/bts/fullAlbum_bts_butter_ptd_be.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrBTS[cardId].name);
        e.target.setAttribute('src', cardArrBTS[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameBTS.compare2Cards('./images/bts/logo_bts.png', gameBTS, 14), 1000);
        }
    }
}
const gameBTS = new BTSGame('BTS');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "bts":
            console.log(gameBTS.name.toString());
            gameBTS.start();
            gameBTS.createBoard(cardArrBTS, './images/bts/logo_bts.png', gameBTS);
            break;
    }
});