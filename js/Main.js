const txtGameB = document.querySelector('button#txt');
const tbzGameB = document.querySelector('button#tbz');
const astroGameB = document.querySelector('button#astro');
const skzGameB = document.querySelector('button#skz');
const btsGameB = document.querySelector('button#bts');
const monstaxGameB = document.querySelector('button#monstax');
const ateezGameB = document.querySelector('button#ateez');
const ohmygirlGameB = document.querySelector('button#ohmygirl');
const onfGameB = document.querySelector('button#onf');
const oneusGameB = document.querySelector('button#oneus');
const itzyGameB = document.querySelector('button#itzy');
const loonaGameB = document.querySelector('button#loona');
const ab6ixGameB = document.querySelector('button#ab6ix');
const wekimekiGameB = document.querySelector('button#wekimeki');
const redvelvetGameB = document.querySelector('button#redvelvet');
const welcomeTxt = document.querySelector('div#welcome');
let content = document.querySelector('#content');
let timeTxt = document.querySelector('#time');
let scoreTxt = document.querySelector('#Score');
let progressBar = document.querySelector(".progress-bar");
let proressDisplay = document.querySelector(".progress");

let time = 0;
let timeM = 0;
let timer;
let score = 0;
let progressNum = 0;

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

const game = document.querySelector('#gameboard-container');

class Game{
    constructor(name){
        this.name = name;
    }
    start(){
        content.style.height = "45px";
        welcomeTxt.style.display = "none";
        txtGameB.disabled = true;
        tbzGameB.disabled = true;
        astroGameB.disabled = true;
        skzGameB.disabled = true;
        btsGameB.disabled = true;
        monstaxGameB.disabled = true; 
        ateezGameB.disabled = true; 
        ohmygirlGameB.disabled = true;		
        onfGameB.disabled = true;		
        oneusGameB.disabled = true;		
        itzyGameB.disabled = true;		
        loonaGameB.disabled = true;		
        ab6ixGameB.disabled = true;		
        wekimekiGameB.disabled = true;		
        redvelvetGameB.disabled = true;		
        proressDisplay.style.display = "";
        game.style.display = "";

        let timeAcc = () => {
            time++;
            timeTxt.innerHTML = "⏳: " + timeM + "m " + time + "s ";
            if(time === 60){
                timeM++;
                time -= 60;
                timeTxt.innerHTML = "⏳: " + timeM + "m " + time + "s ";
            }
        };
        timer = setInterval(timeAcc, 1000); // подождать 1 секунду чтобы высветилось время
    }
    createBoard(Arr, src, gamen) {
        for(let i = 0; i < Arr.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', src);
            card.setAttribute('img-id', i);
			card.setAttribute('alt', 'game card');

            game.appendChild(card);
            card.addEventListener('click', gamen.flipCard);
        }
    }
    flipCard(e){
        let cardId = e.target.getAttribute('img-id');
        cardsChosenId.push(cardId);
    }
    compare2Cards(src, gamen, n){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId){
            cards[optionOneId].style.pointerEvents = "none";
            cards[optionTwoId].style.pointerEvents = "none";
            cards[optionOneId].removeEventListener('click', gamen.flipCard);
            cards[optionTwoId].removeEventListener('click', gamen.flipCard);

            cardsWon.push(cardsChosen);
            score++;
            score += 6;
            scoreTxt.innerHTML = "🍪: " + score;
            if(n === 9 && progressNum === 90){
                n = 10;
            }else if(n === 16 && progressNum === 80){
                n = 20;
            }else if(n === 14 && progressNum === 84){
                n = 16;
            }else if(n === 8 && progressNum === 88){
                n = 12;
            }
            progressBar.style.width = `${progressNum += n}%`;
            progressBar.style.backgroundColor = "#f4bbff";
        }else if (cardsChosen[0] !== cardsChosen[1] && optionOneId !== optionTwoId){
            cards[optionOneId].setAttribute('src', src);
            cards[optionTwoId].setAttribute('src', src);
            score++;
            score -= 5;
            scoreTxt.innerHTML = "🍪: " + score;
        }else{
            cards[optionOneId].setAttribute('src', src);
            cards[optionTwoId].setAttribute('src', src);
            score -= 0;
            scoreTxt.innerHTML = "🍪: " + score;
        }
        cardsChosen = [];
        cardsChosenId = [];

        gamen.showSuccessAlert();
    }
    showSuccessAlert(){
        if(progressBar.getAttribute("style") === "width: 100%; background-color: rgb(244, 187, 255);") {
            game.innerHTML = "";
            while (game.firstChild) {
                game.removeChild(game.firstChild);
            }
            clearInterval(timer);
            swal({
                title: '✨🎈📢Congratulations✨🎊🎉 🌸~your game is finished successfully~🌸',
                text: ` in ⏳: ${timeM}m ${time}s  with  🍪: ${score} `,
                icon: "success",
                button: {
                    text: "~home~",
                    value: true,
                    visible: true,
                    className: "btn"
                }
            }).then(() => {
                location.reload();
            });
        }
    }
}
const cardArrTxt = [
    {
        name: 'bin',
        img: './images/txt/bin.jpg'
    },
    {
        name: 'bin',
        img: './images/txt/bin.jpg'
    },
    {
        name: 'gyu',
        img: './images/txt/gyu.jpeg'
    },
    {
        name: 'gyu',
        img: './images/txt/gyu.jpeg'
    },
    {
        name: 'kai',
        img: './images/txt/kai.jpeg'
    },
    {
        name: 'kai',
        img: './images/txt/kai.jpeg'
    },
    {
        name: 'tae',
        img: './images/txt/tae.jpeg'
    },
    {
        name: 'tae',
        img: './images/txt/tae.jpeg'
    },
    {
        name: 'yeon',
        img: './images/txt/yeon.jpeg'
    },
    {
        name: 'yeon',
        img: './images/txt/yeon.jpeg'
    }
];
const cardArrTbz = [
    {
        name: 'eric',
        img: './images/tbz/eric_thrillride.jpeg'
    },
    {
        name: 'eric',
        img: './images/tbz/eric_thrillride.jpeg'
    },
    {
        name: 'hak',
        img: './images/tbz/hak_thrillride.jpeg'
    },
    {
        name: 'hak',
        img: './images/tbz/hak_thrillride.jpeg'
    },
    {
        name: 'jacob',
        img: './images/tbz/jacob_thrillride.jpeg'
    },
    {
        name: 'jacob',
        img: './images/tbz/jacob_thrillride.jpeg'
    },
    {
        name: 'jae',
        img: './images/tbz/jae_thrillride.jpeg'
    },
    {
        name: 'jae',
        img: './images/tbz/jae_thrillride.jpeg'
    },
    {
        name: 'juyeon',
        img: './images/tbz/juyeon_thrillride.jpeg'
    },
    {
        name: 'juyeon',
        img: './images/tbz/juyeon_thrillride.jpeg'
    },
    {
        name: 'kevin',
        img: './images/tbz/kevin_thrillride.jpeg'
    },
    {
        name: 'kevin',
        img: './images/tbz/kevin_thrillride.jpeg'
    },
    {
        name: 'new',
        img: './images/tbz/new_thrillride.jpeg'
    },
    {
        name: 'new',
        img: './images/tbz/new_thrillride.jpeg'
    },
    {
        name: 'q',
        img: './images/tbz/q_thrillride.jpeg'
    },
    {
        name: 'q',
        img: './images/tbz/q_thrillride.jpeg'
    },
    {
        name: 'sang',
        img: './images/tbz/sang_thrillride.jpeg'
    },
    {
        name: 'sang',
        img: './images/tbz/sang_thrillride.jpeg'
    },
    {
        name: 'sunwoo',
        img: './images/tbz/sunwoo_thrillride.jpeg'
    },
    {
        name: 'sunwoo',
        img: './images/tbz/sunwoo_thrillride.jpeg'
    },
    {
        name: 'younghoon',
        img: './images/tbz/younghoon_thrillride.jpeg'
    },
    {
        name: 'younghoon',
        img: './images/tbz/younghoon_thrillride.jpeg'
    }
];
const cardArrAstro = [
    {
        name: 'cha',
        img: './images/astro/cha.jpg'
    },
    {
        name: 'cha',
        img: './images/astro/cha.jpg'
    },
    {
        name: 'jinjin',
        img: './images/astro/jinjin.jpg'
    },
    {
        name: 'jinjin',
        img: './images/astro/jinjin.jpg'
    },
    {
        name: 'mj',
        img: './images/astro/mj.jpg'
    },
    {
        name: 'mj',
        img: './images/astro/mj.jpg'
    },
    {
        name: 'moonbin',
        img: './images/astro/moonbin.jpg'
    },
    {
        name: 'moonbin',
        img: './images/astro/moonbin.jpg'
    },
    {
        name: 'rocky',
        img: './images/astro/rocky.jpg'
    },
    {
        name: 'rocky',
        img: './images/astro/rocky.jpg'
    },
    {
        name: 'sanha',
        img: './images/astro/sanha.jpg'
    },
    {
        name: 'sanha',
        img: './images/astro/sanha.jpg'
    }
];
const cardArrSKZ = [
    {
        name: 'bangchan',
        img: './images/skz/bangchan.jpg'
    },
    {
        name: 'bangchan',
        img: './images/skz/bangchan.jpg'
    },
    {
        name: 'han',
        img: './images/skz/han.jpg'
    },
    {
        name: 'han',
        img: './images/skz/han.jpg'
    },
    {
        name: 'i.n.',
        img: './images/skz/i.n..jpg'
    },
    {
       name: 'i.n.',
        img: './images/skz/i.n..jpg'
    },
    {
        name: 'lix',
        img: './images/skz/lix.jpg'
    },
    {
        name: 'lix',
        img: './images/skz/lix.jpg'
    },
    {
        name: 'seungmin',
        img: './images/skz/seungmin.jpg'
    },
    {
        name: 'seungmin',
        img: './images/skz/seungmin.jpg'
    },
    {
        name: 'changbin',
        img: './images/skz/changbin.jpg'
    },
    {
        name: 'changbin',
        img: './images/skz/changbin.jpg'
    },
    {
        name: 'hyunjin',
        img: './images/skz/hyunjin.jpg'
    },

    {
        name: 'hyunjin',
        img: './images/skz/hyunjin.jpg'
    },
    {
        name: 'leeknow',
        img: './images/skz/leeknow.jpg'
    },
    {
        name: 'leeknow',
        img: './images/skz/leeknow.jpg'
    }
];
const cardArrBTS = [
    {
        name: 'j-hope',
        img: './images/bts/j-hope.png'
    },
    {
        name: 'j-hope',
        img: './images/bts/j-hope.png'
    },
    {
        name: 'jungkook',
        img: './images/bts/jungkook.jpg'
    },
    {
        name: 'jungkook',
        img: './images/bts/jungkook.jpg'
    },
    {
        name: 'rm',
        img: './images/bts/rm.jpg'
    },
    {
        name: 'rm',
        img: './images/bts/rm.jpg'
    },
    {
        name: 'v',
        img: './images/bts/v.jpg'
    },
    {
        name: 'v',
        img: './images/bts/v.jpg'
    },
    {
        name: 'jimin',
        img: './images/bts/jimin.jpg'
    },
    {
         name: 'jimin',
        img: './images/bts/jimin.jpg'
    },
    {
        name: 'suga',
        img: './images/bts/suga.jpg'
    },
    {
        name: 'suga',
        img: './images/bts/suga.jpg'
    },
    {
        name: 'jin',
        img: './images/bts/jin.jpg'
    },
    {
        name: 'jin',
        img: './images/bts/jin.jpg'
    }
];
const cardArrMONSTAX = [
    {
        name: 'hyungwon',
        img: './images/monstax/hyungwon.jpg'
    },
    {
        name: 'hyungwon',
        img: './images/monstax/hyungwon.jpg'
    },
    {
        name: 'kihyun',
        img: './images/monstax/kihyun.jpg'
    },
    {
        name: 'kihyun',
        img: './images/monstax/kihyun.jpg'
    },
    {
        name: 'minhyuk',
        img: './images/monstax/minhyuk.jpg'
    },
    {
        name: 'minhyuk',
        img: './images/monstax/minhyuk.jpg'
    },
    {
        name: 'i.m',
        img: './images/monstax/i.m.jpg'
    },
    {
        name: 'i.m',
        img: './images/monstax/i.m.jpg'
    },
    {
        name: 'joohoney',
        img: './images/monstax/joohoney.jpg'
    },
    {
        name: 'joohoney',
        img: './images/monstax/joohoney.jpg'
    },
    {
        name: 'shownu',
        img: './images/monstax/shownu.jpg'
    },
    {
        name: 'shownu',
        img: './images/monstax/shownu.jpg'
    }
];
const cardArrATEEZ = [
    {
        name: 'hongjoong',
        img: './images/ateez/hongjoong.jpg'
    },
    {
        name: 'hongjoong',
        img: './images/ateez/hongjoong.jpg'
    },
    {
        name: 'san',
        img: './images/ateez/san.jpg'
    },
    {
        name: 'san',
        img: './images/ateez/san.jpg'
    },
    {
        name: 'wooyoung',
        img: './images/ateez/wooyoung.jpg'
    },
    {
        name: 'wooyoung',
        img: './images/ateez/wooyoung.jpg'
    },
    {
        name: 'yunho',
        img: './images/ateez/yunho.jpg'
    },
    {
        name: 'yunho',
        img: './images/ateez/yunho.jpg'
    },
    {
        name: 'jongho',
        img: './images/ateez/jongho.jpg'
    },
    {
        name: 'jongho',
        img: './images/ateez/jongho.jpg'
    },
    {
        name: 'mingi',
        img: './images/ateez/mingi.jpg'
    },
    {
        name: 'mingi',
        img: './images/ateez/mingi.jpg'
    },
    {
        name: 'seonghwa',
        img: './images/ateez/seonghwa.jpg'
    },

    {
        name: 'seonghwa',
        img: './images/ateez/seonghwa.jpg'
    },
    {
        name: 'yeosang',
        img: './images/ateez/yeosang.jpeg'
    },
    {
        name: 'yeosang',
        img: './images/ateez/yeosang.jpeg'
    }
];
const cardArrOHMYGIRL = [
    {
        name: 'arin',
        img: './images/ohmygirl/arin.jpeg'
    },
    {
        name: 'arin',
        img: './images/ohmygirl/arin.jpeg'
    },
    {
        name: 'jiho',
        img: './images/ohmygirl/jiho.jpeg'
    },
    {
        name: 'jiho',
        img: './images/ohmygirl/jiho.jpeg'
    },
    {
        name: 'mimi',
        img: './images/ohmygirl/mimi.jpg'
    },
    {
        name: 'mimi',
        img: './images/ohmygirl/mimi.jpg'
    },
    {
        name: 'yooa',
        img: './images/ohmygirl/yooa.jpeg'
    },
    {
        name: 'yooa',
        img: './images/ohmygirl/yooa.jpeg'
    },
    {
        name: 'binnie',
        img: './images/ohmygirl/binnie.jpg'
    },
    {
        name: 'binnie',
        img: './images/ohmygirl/binnie.jpg'
    },
    {
        name: 'seunghee',
        img: './images/ohmygirl/seunghee.jpg'
    },
    {
        name: 'seunghee',
        img: './images/ohmygirl/seunghee.jpg'
    },
    {
        name: 'hyojung',
        img: './images/ohmygirl/hyojung.jpg'
    },
    {
        name: 'hyojung',
        img: './images/ohmygirl/hyojung.jpg'
    }
];
const cardArrONF = [
    {
        name: 'e-tion',
        img: './images/onf/e-tion.jpeg'
    },
    {
        name: 'e-tion',
        img: './images/onf/e-tion.jpeg'
    },
    {
        name: 'j-us',
        img: './images/onf/j-us.jpg'
    },
    {
        name: 'j-us',
        img: './images/onf/j-us.jpg'
    },
    {
        name: 'mk',
        img: './images/onf/mk.jpeg'
    },
    {
        name: 'mk',
        img: './images/onf/mk.jpeg'
    },
    {
        name: 'wyatt',
        img: './images/onf/wyatt.jpg'
    },
    {
        name: 'wyatt',
        img: './images/onf/wyatt.jpg'
    },
    {
        name: 'hyojin',
        img: './images/onf/hyojin.jpg'
    },
    {
        name: 'hyojin',
        img: './images/onf/hyojin.jpg'
    },
    {
        name: 'u',
        img: './images/onf/u.jpeg'
    },
    {
        name: 'u',
        img: './images/onf/u.jpeg'
    }
];
const cardArrONEUS = [
    {
        name: 'hwanwoong',
        img: './images/oneus/hwanwoong.jpeg'
    },
    {
        name: 'hwanwoong',
        img: './images/oneus/hwanwoong.jpeg'
    },
    {
        name: 'leedo',
        img: './images/oneus/leedo.jpg'
    },
    {
        name: 'leedo',
        img: './images/oneus/leedo.jpg'
    },
    {
        name: 'ravn',
        img: './images/oneus/ravn.jpg'
    },
    {
        name: 'ravn',
        img: './images/oneus/ravn.jpg'
    },
    {
        name: 'xion',
        img: './images/oneus/xion.png'
    },
    {
        name: 'xion',
        img: './images/oneus/xion.png'
    },
    {
        name: 'keonhee',
        img: './images/oneus/keonhee.jpg'
    },
    {
        name: 'keonhee',
        img: './images/oneus/keonhee.jpg'
    },
    {
        name: 'seoho',
        img: './images/oneus/seoho.jpeg'
    },
    {
        name: 'seoho',
        img: './images/oneus/seoho.jpeg'
    }
];
const cardArrITZY = [
    {
        name: 'chaeryeong',
        img: './images/itzy/chaeryeong.jpeg'
    },
    {
        name: 'chaeryeong',
        img: './images/itzy/chaeryeong.jpeg'
    },
    {
        name: 'yeji',
        img: './images/itzy/yeji.jpeg'
    },
    {
        name: 'yeji',
        img: './images/itzy/yeji.jpeg'
    },
    {
        name: 'lia',
        img: './images/itzy/lia.jpeg'
    },
    {
        name: 'lia',
        img: './images/itzy/lia.jpeg'
    },
    {
        name: 'ryujin',
        img: './images/itzy/ryujin.jpeg'
    },
    {
        name: 'ryujin',
        img: './images/itzy/ryujin.jpeg'
    },
    {
        name: 'yuna',
        img: './images/itzy/yuna.jpeg'
    },
    {
        name: 'yuna',
        img: './images/itzy/yuna.jpeg'
    }
];
const cardArrLOONA = [
    {
        name: 'choerry',
        img: './images/loona/choerry.jpg'
    },
    {
        name: 'choerry',
        img: './images/loona/choerry.jpg'
    },
    {
        name: 'gowon',
        img: './images/loona/gowon.jpeg'
    },
    {
        name: 'gowon',
        img: './images/loona/gowon.jpeg'
    },
    {
        name: 'heejin',
        img: './images/loona/heejin.jpeg'
    },
    {
        name: 'heejin',
        img: './images/loona/heejin.jpeg'
    },
    {
        name: 'jinsoul',
        img: './images/loona/jinsoul.jpeg'
    },
    {
        name: 'jinsoul',
        img: './images/loona/jinsoul.jpeg'
    },
    {
        name: 'vivi',
        img: './images/loona/vivi.jpg'
    },
    {
        name: 'vivi',
        img: './images/loona/vivi.jpg'
    },
    {
        name: 'yves',
        img: './images/loona/yves.jpeg'
    },
    {
        name: 'yves',
        img: './images/loona/yves.jpeg'
    },
    {
        name: 'chuu',
        img: './images/loona/chuu.jpeg'
    },
    {
        name: 'chuu',
        img: './images/loona/chuu.jpeg'
    },
    {
        name: 'haseul',
        img: './images/loona/haseul.jpeg'
    },
    {
        name: 'haseul',
        img: './images/loona/haseul.jpeg'
    },
    {
        name: 'hyunjin',
        img: './images/loona/hyunjin.jpeg'
    },
    {
        name: 'hyunjin',
        img: './images/loona/hyunjin.jpeg'
    },
    {
        name: 'kimlip',
        img: './images/loona/kimlip.jpeg'
    },
    {
        name: 'kimlip',
        img: './images/loona/kimlip.jpeg'
    },
    {
        name: 'olivia',
        img: './images/loona/olivia.jpeg'
    },
    {
        name: 'olivia',
        img: './images/loona/olivia.jpeg'
    },
    {
        name: 'yeojin',
        img: './images/loona/yeojin.jpg'
	},
    {
        name: 'yeojin',
        img: './images/loona/yeojin.jpg'
	}
];
const cardArrAB6IX = [
    {
        name: 'daehwi',
        img: './images/ab6ix/daehwi.jpg'
    },
    {
        name: 'daehwi',
        img: './images/ab6ix/daehwi.jpg'
    },
    {
        name: 'woong',
        img: './images/ab6ix/woong.jpeg'
    },
    {
        name: 'woong',
        img: './images/ab6ix/woong.jpeg'
    },
    {
        name: 'donghyun',
        img: './images/ab6ix/donghyun.jpeg'
    },
    {
        name: 'donghyun',
        img: './images/ab6ix/donghyun.jpeg'
    },
    {
        name: 'woojin',
        img: './images/ab6ix/woojin.jpeg'
    },
    {
        name: 'woojin',
        img: './images/ab6ix/woojin.jpeg'
    },
];
const cardArrWEKIMEKI = [
    {
        name: 'doyeon',
        img: './images/wekimeki/doyeon.jpg'
    },
    {
        name: 'doyeon',
        img: './images/wekimeki/doyeon.jpg'
    },
    {
        name: 'lucy',
        img: './images/wekimeki/lucy.jpg'
    },
    {
        name: 'lucy',
        img: './images/wekimeki/lucy.jpg'
    },
    {
        name: 'sei',
        img: './images/wekimeki/sei.jpeg'
    },
    {
        name: 'sei',
        img: './images/wekimeki/sei.jpeg'
    },
    {
        name: 'yoojung',
        img: './images/wekimeki/yoojung.jpeg'
    },
    {
        name: 'yoojung',
        img: './images/wekimeki/yoojung.jpeg'
    },
    {
        name: 'elly',
        img: './images/wekimeki/elly.jpg'
    },
    {
        name: 'elly',
        img: './images/wekimeki/elly.jpg'
    },
    {
        name: 'lua',
        img: './images/wekimeki/lua.jpeg'
    },
    {
        name: 'lua',
        img: './images/wekimeki/lua.jpeg'
    },
    {
        name: 'rina',
        img: './images/wekimeki/rina.jpeg'
    },

    {
        name: 'rina',
        img: './images/wekimeki/rina.jpeg'
    },
    {
        name: 'suyeon',
        img: './images/wekimeki/suyeon.jpeg'
    },
    {
        name: 'suyeon',
        img: './images/wekimeki/suyeon.jpeg'
    }
];
const cardArrRedVelvet = [
    {
        name: 'chaeryeong',
        img: './images/itzy/chaeryeong.jpeg'
    },
    {
        name: 'chaeryeong',
        img: './images/itzy/chaeryeong.jpeg'
    },
    {
        name: 'yeji',
        img: './images/itzy/yeji.jpeg'
    },
    {
        name: 'yeji',
        img: './images/itzy/yeji.jpeg'
    },
    {
        name: 'lia',
        img: './images/itzy/lia.jpeg'
    },
    {
        name: 'lia',
        img: './images/itzy/lia.jpeg'
    },
    {
        name: 'ryujin',
        img: './images/itzy/ryujin.jpeg'
    },
    {
        name: 'ryujin',
        img: './images/itzy/ryujin.jpeg'
    },
    {
        name: 'yuna',
        img: './images/itzy/yuna.jpeg'
    },
    {
        name: 'yuna',
        img: './images/itzy/yuna.jpeg'
    }
];

const navBtns = document.querySelector("nav");

