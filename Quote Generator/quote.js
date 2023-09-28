let quote = document.getElementById("quote")
let author = document.getElementById("author")
soundbtn = document.querySelector(".btn-sound")
let translate = document.getElementById("google_translate_element")
var savebtn = document.getElementById("library")
var trash = document.getElementById("trash")




const url = "https://api.quotable.io/random";

let getQuote = () => { fetch(url)
    .then((data) => data.json())
    .then((item) => {
        
    quote.innerHTML = item.content;
    author.innerHTML = item.author;
    });
};



soundbtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`todays quote is ${quote.innerHTML} by ${author.innerHTML}`);
    speechSynthesis.speak(utterance);
})


var scriptElement = document.createElement('script');


scriptElement.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

scriptElement.onload = function() {
   
    googleTranslateElementInit();
};

document.head.appendChild(scriptElement);

function googleTranslateElementInit(){
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');  }



// save
const Quotes = JSON.parse(localStorage.getItem("library")) || [];

function saveQuote() {
     let Quote = localStorage.getItem("library") || [];

    let q = quote.innerHTML;
    let a = author.innerHTML;

    
    Quotes.push({q,a});

    localStorage.setItem("library", JSON.stringify(Quotes));
}
savebtn.addEventListener("click",saveQuote);


// trash

trash.addEventListener("click", function() {

    quote.innerHTML = ""; 
    author.innerHTML = ""; 

    getAndDisplayNewQuote();
});





// share

document.querySelector(".btn-share").addEventListener("click", function() {
    const imageUrl = "https://example.com/image.jpg"; 
    const caption = "Check out this cool image!"; 
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(caption)}`;
    window.open(instagramShareUrl, "_blank");
});


var trashButton = document.getElementById("save");
trashButton.addEventListener("click", function() {  
    window.location.href = "library.html";
});