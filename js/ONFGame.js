class ONFGame extends Game{
    start(){
        super.start();
        cardArrONF.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/onf/fullAlbum_Onf_Goosebumps.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();
    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrONF[cardId].name);
        e.target.setAttribute('src', cardArrONF[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameONF.compare2Cards( './images/onf/logo_onf.jpg', gameONF, 16), 1000);
        }
    }
}
const gameONF = new ONFGame('ONF');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "onf":
            console.log(gameONF.name.toString());
            gameONF.start();
            gameONF.createBoard(cardArrONF, './images/onf/logo_onf.jpg', gameONF);
            break;
    }
});