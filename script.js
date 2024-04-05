const quoteConstainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showLoadingSpinner() {
    loader.hidden = false;
    quoteConstainer.hidden = true;
}

function removeLoadingSpinner() {
    loader.hidden = true;
    quoteConstainer.hidden = false;
}

// Show New Quote
function newQuote() {
    showLoadingSpinner();
    const quote = localQuotes[Math.floor(Math.random(localQuotes.length) * localQuotes.length)]
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

// Get Quotes From API
// async function getQuotes() {
//     loading();
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch Error Here
//     }
// }

// getQuotes();

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
newQuote()