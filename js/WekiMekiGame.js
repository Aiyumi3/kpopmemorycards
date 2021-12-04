class WEKIMEKIGame extends Game{
    start(){
        super.start();
        cardArrWEKIMEKI.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/wekimeki/fullAlbum_Weki_Meki_I_AM_ME.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrWEKIMEKI[cardId].name);
        e.target.setAttribute('src', cardArrWEKIMEKI[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameWEKIMEKI.compare2Cards( './images/wekimeki/logo_wekimeki.jpg', gameWEKIMEKI, 12.5), 1000);
        }
    }
}
const gameWEKIMEKI = new WEKIMEKIGame('Weki Meki');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "wekimeki":
            console.log(gameWEKIMEKI.name.toString());
            gameWEKIMEKI.start();
            gameWEKIMEKI.createBoard(cardArrWEKIMEKI, './images/wekimeki/logo_wekimeki.jpg', gameWEKIMEKI);
            break;
    }
});