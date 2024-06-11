const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why was the math book sad? It had too many problems.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why was the computer cold? It left its Windows open."
];

function displayJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').textContent = jokes[randomIndex];
}
