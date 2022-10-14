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

let content = document.querySelector('#content');

let game = document.querySelector('#external_page');
let ifram = document.querySelector('iframe');

function start(src){
    content.style.display = "none";
    game.style.display = "";
		   
	ifram.src = ""+src;
}


ab6ixGameB.onclick = () => {start('ab6ixIndex.html')};
astroGameB.onclick = () => {start('astroIndex.html')};
ateezGameB.onclick = () => {start('ateezIndex.html')};
btsGameB.onclick = () => {start('btsIndex.html')};
itzyGameB.onclick = () => {start('itzyIndex.html')};
loonaGameB.onclick = () => {start('loonaIndex.html')};
monstaxGameB.onclick = () => {start('monstaxIndex.html')};
ohmygirlGameB.onclick = () => {start('ohmygirlIndex.html')};
oneusGameB.onclick = () => {start('oneusIndex.html')};
onfGameB.onclick = () => {start('onfIndex.html')};
redvelvetGameB.onclick = () => {start('redvelvetIndex.html')};
skzGameB.onclick = () => {start('skzIndex.html')};
tbzGameB.onclick = () => {start('tbzIndex.html')};
txtGameB.onclick = () => {start('txtIndex.html')};
wekimekiGameB.onclick = () => {start('wekimekiIndex.html')};


