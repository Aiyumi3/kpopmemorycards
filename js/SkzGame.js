class SKZGame extends Game{
    start(){
        super.start();
        cardArrSKZ.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/skz/fullAlbum_Skz_christmasEvel.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrSKZ[cardId].name);
        e.target.setAttribute('src', cardArrSKZ[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameSKZ.compare2Cards( './images/skz/logo_skz.jpg', gameSKZ, 12.5), 1000);
        }
    }
}
const gameSKZ = new SKZGame('SKZ');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "skz":
            console.log(gameSKZ.name.toString());
            gameSKZ.start();
            gameSKZ.createBoard(cardArrSKZ, './images/skz/logo_skz.jpg', gameSKZ);
            break;
    }
});