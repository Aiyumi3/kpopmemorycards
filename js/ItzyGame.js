class ITZYGame extends Game{
    start(){
        super.start();
        cardArrITZY.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/itzy/fullAlbum_itzy_crazyInLove.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrITZY[cardId].name);
        e.target.setAttribute('src', cardArrITZY[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameITZY.compare2Cards('./images/itzy/logo_itzy.jpeg', gameITZY, 20), 1000);
        }
    }
}
const gameITZY = new ITZYGame('ITZY');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "itzy":
            console.log(gameITZY.name.toString());
            gameITZY.start();
            gameITZY.createBoard(cardArrITZY, './images/itzy/logo_itzy.jpeg', gameITZY);
            break;
    }
});