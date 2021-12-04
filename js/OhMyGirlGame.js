class OHMYGIRLGame extends Game{
    start(){
        super.start();
        cardArrOHMYGIRL.sort(() => 0.5 - Math.random());
        let music = new Audio('./images/ohmygirl/fullAlbum_OhMyGirl_DearOHMYGIRL.mp3');
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();

    }
    flipCard(e){
        super.flipCard(e);
        let cardId = e.target.getAttribute('img-id');
        cardsChosen.push(cardArrOHMYGIRL[cardId].name);
        e.target.setAttribute('src', cardArrOHMYGIRL[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(gameOHMYGIRL.compare2Cards('./images/ohmygirl/logo_ohmygirl.jpg', gameOHMYGIRL, 14), 1000);
        }
    }
}
const gameOHMYGIRL = new OHMYGIRLGame('Oh My Girl');

navBtns.addEventListener("click", evt =>  {
    let targetId = evt.target.id;
    switch (targetId) {
        case "ohmygirl":
            console.log(gameOHMYGIRL.name.toString());
            gameOHMYGIRL.start();
            gameOHMYGIRL.createBoard(cardArrOHMYGIRL, './images/ohmygirl/logo_ohmygirl.jpg', gameOHMYGIRL);
            break;
    }
});