class ATEEZGame extends Game{
    start(){
        super.start();
        cardArrATEEZ.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/ateez/fullAlbum_ateez_dreamers_zeroFeverp3.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrATEEZ[cardId].name);
        e.target.setAttribute('src', cardArrATEEZ[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameATEEZ.compare2Cards( './images/ateez/logo_ateez.jpg', gameATEEZ, 12.5), 1000);
        }
    }
}
const gameATEEZ = new ATEEZGame('ATEEZ');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "ateez":
            console.log(gameATEEZ.name.toString());
            gameATEEZ.start();
            gameATEEZ.createBoard(cardArrATEEZ, './images/ateez/logo_ateez.jpg', gameATEEZ);
            break;
    }
});