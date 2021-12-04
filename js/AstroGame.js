class ASTROGame extends Game{
    start(){
        super.start();
        cardArrAstro.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/astro/fullAlbum_astro_switchOn.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrAstro[cardId].name);
        e.target.setAttribute('src', cardArrAstro[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameASTRO.compare2Cards( './images/astro/logo_astro.jpg', gameASTRO, 16), 1000);
        }
    }
}
const gameASTRO = new ASTROGame('Astro');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "astro":
            console.log(gameASTRO.name.toString());
            gameASTRO.start();
            gameASTRO.createBoard(cardArrAstro, './images/astro/logo_astro.jpg', gameASTRO);
            break;
    }
});