class AB6IXGame extends Game{
    start(){
        super.start();
        cardArrAB6IX.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/ab6ix/fullAlbum_AB6IX_MO_COMPLETE.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrAB6IX[cardId].name);
        e.target.setAttribute('src', cardArrAB6IX[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameAB6IX.compare2Cards('./images/ab6ix/logo_ab6ix.jpg', gameAB6IX, 25), 1000);
        }
    }
}
const gameAB6IX = new AB6IXGame('AB6IX');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "ab6ix":
            console.log(gameAB6IX.name.toString());
            gameAB6IX.start();
            gameAB6IX.createBoard(cardArrAB6IX, './images/ab6ix/logo_ab6ix.jpg', gameAB6IX);
            break;
    }
});