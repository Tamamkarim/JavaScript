const quotes = [
	"Be the change that you wish to see in the world. - Mahatma Gandhi",
	"The only way to do great work is to love what you do. - Steve Jobs",
	"In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"You miss 100% of the shots you don't take. - Wayne Gretzky"
];

function displayQuote() {
	const quoteContainer = 
    document.getElementById("quote-container");
	const randomIndex = 
    Math.floor(Math.random() * quotes.length);
	quoteContainer.innerHTML = 
    `<p>${quotes[randomIndex]}</p>`;
}
