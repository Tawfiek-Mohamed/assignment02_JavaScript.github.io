quotes = [
    {
        quote : "“Be yourself; everyone else is already taken.”", 
        writer : "― Oscar Wilde",
    },

    {
        quote : "“So many books, so little time.”", 
        writer : "― Frank Zappa",
    },

    {
        quote : "“A room without books is like a body without a soul.”", 
        writer : "― Marcus Tullius Cicero",
    },

    {
        quote : "“You only live once, but if you do it right, once is enough.”", 
        writer : "― Mae West",
    },

    {
        quote : "“Be the change that you wish to see in the world.”", 
        writer : "― Mahatma Gandhi",
    },

    {
        quote : "“In three words I can sum up everything I've learned about life: it goes on.”", 
        writer : "― Robert Frost",
    },

    {
        quote : "“If you tell the truth, you don't have to remember anything.”", 
        writer : "― Mark Twain",
    },

    {
        quote : "“A friend is someone who knows all about you and still loves you.”", 
        writer : "― Elbert Hubbard",
    },

    {
        quote : "“To live is the rarest thing in the world. Most people exist, that is all.”", 
        writer : "― Oscar Wilde",
    },

    {
        quote : "“Always forgive your enemies; nothing annoys them so much.”", 
        writer : "― Oscar Wilde",
    },
]
console.log(quotes.length);

let quoteIndex = 0;
let lastind ; 
function getRandomQuote() {
    quoteIndex = Math.floor(Math.random() * quotes.length);
    /* if (lastind == quoteIndex) {
        console.log(lastind == quoteIndex);
    } */

    while (lastind == quoteIndex) {
        quoteIndex = Math.floor(Math.random() * quotes.length);

    }
    lastind = quoteIndex
    // console.log(quoteIndex);
    document.getElementById("quote").innerHTML= quotes [quoteIndex].quote;
    document.getElementById("writer").innerHTML= quotes [quoteIndex].writer;
}





