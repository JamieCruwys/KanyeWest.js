var quotes = [
    "That that don't kill me, can only make me stronger.",
];

function kayneSays()
{
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
