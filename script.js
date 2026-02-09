

const yesBtn = document.querySelector('.js-yes-button');
const noBtn = document.querySelector('.js-no-button');
const mainContainer = document.querySelector('.main-container');
const heartContainer = document.getElementById('heart-container');

const audio1 = document.querySelector('.canihave');
const audio2 = document.querySelector('.bounce');


yesBtn.style.padding = "10px";
noBtn.style.padding = "10px";

function decideButton() {

  let newPadding = 0;

const greetings = [
  'Are you sure?',
  'Really sure?',
  'Are you positive???',
  'Aviii please',
  'Just think about it',
  'Mahibi ako pag dai ka nagyes huhu',
  'Ill cryy',
  'Ill cry and cryy',
  'Maawa ka oh',
  'Pleaseeee :<',
  'huhuhu',
  'sure kana?'
]


function createHeart() {
const heart = document.createElement('div');
  heart.innerText = '❤️'; 
  heart.className = 'absolute text-2xl animate-fall';
  
  heart.style.left = Math.random() * window.innerWidth + 'px';
  
  const size = Math.random() * 24 + 16; 
  heart.style.fontSize = size + 'px';
  
  const duration = Math.random() * 2 + 3; 
  heart.style.animation = `fall ${duration}s linear forwards`;

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);

}

noBtn.addEventListener('click', () => {
  
  newPadding+=10;
  yesBtn.style.padding = newPadding + "px";
  
  const randomIndex = Math.floor(Math.random() * greetings.length);

  noBtn.innerText = greetings[randomIndex];
  audio1.play();
});

yesBtn.addEventListener('click', () => {
  mainContainer.innerHTML =

  `
  
  <div class="w-full  h-screen flex flex-col items-center justify-center">
  
  <div class=" p-2 flex flex-col justify-center items-center main-container">

  
 <div class="tenor-gif-embed pointer-events-none inline" data-postid="13779096733021884000" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/dudu-hug-bubu-dudu-kiss-dudu-love-gif-13779096733021884000">Dudu Hug Bubu Dudu Kiss Sticker</a>from <a href="https://tenor.com/search/dudu+hug+bubu-stickers">Dudu Hug Bubu Stickers</a></div>

 <div class="tenor-gif-embed pointer-events-none " data-postid="12629573953728339553" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/sseeyall-bubu-dudu-gif-12629573953728339553">Sseeyall Bubu Dudu Sticker</a>from <a href="https://tenor.com/search/sseeyall-stickers">Sseeyall Stickers</a></div> 

  <div class="flex flex-col gap-4 items-center">
  <h1 class="text-xl font-bold">YAYYYY OKI!!</h1>
  
  </div>

  </div>

  </div>


  `
  const script = document.createElement('script');
  script.src = "https://tenor.com/embed.js";
  script.async = true;
  document.body.appendChild(script);

 setInterval(createHeart, 200);
 audio2.play();
 audio1.pause();
 
})

console.log(greetings)
}

decideButton();




