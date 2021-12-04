class RedVelvetGame extends Game{
    start(){
        super.start();
        cardArrRedVelvet.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/redvelvet/fullAlbum_redVelvet_Queendom.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrRedVelvet[cardId].name);
        e.target.setAttribute('src', cardArrRedVelvet[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameRedVelvet.compare2Cards('./images/redvelvet/logo_redvelvet.png', gameRedVelvet, 20), 1000);
        }
    }
}
const gameRedVelvet = new RedVelvetGame('Red Velvet');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "redvelvet":
            console.log(gameRedVelvet.name.toString());
            gameRedVelvet.start();
            gameRedVelvet.createBoard(cardArrRedVelvet, './images/redvelvet/logo_redvelvet.png', gameRedVelvet);
            break;
    }
});