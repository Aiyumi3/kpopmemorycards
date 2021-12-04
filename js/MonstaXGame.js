class MONSTAXGame extends Game{
    start(){
        super.start();
        cardArrMONSTAX.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/monstax/fullAlbum_monstaX_noLimit.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrMONSTAX[cardId].name);
        e.target.setAttribute('src', cardArrMONSTAX[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameMONSTAX.compare2Cards('./images/monstax/logo_monstax.jpg', gameMONSTAX, 16), 1000);
        }
    }
}
const gameMONSTAX = new MONSTAXGame('MONSTA X');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "monstax":
            console.log(gameMONSTAX.name.toString());
            gameMONSTAX.start();
            gameMONSTAX.createBoard(cardArrMONSTAX, './images/monstax/logo_monstax.jpg', gameMONSTAX);
            break;
    }
});