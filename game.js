// This is a simple game that allows a user to take decisions and see outcomes based on their choices.
// This game will run in the terminal using Node.js.

const prompt = require('prompt-sync')();

function startGame() {
    console.log("#--------------------------------#");
    console.log("# Welcome to the Adventure Game! #");
    console.log("#--------------------------------#");
    const playerName = prompt("Enter your name, adventurer: ");
    console.log(`Hello, ${playerName}! Your journey begins now.`);
}

function firstDecision(playerName) {
    console.log("You find yourself at a crossroads. Do you want to go left towards the dark forest or right towards the sunny meadow?");
    const choice = prompt("Type 'left' for the dark forest or 'right' for the sunny meadow: ").toLowerCase().trim();
    if (choice === 'left') {
        darkForest();
    } else if (choice === 'right') {
        sunnyMeadow();
    } else {
        console.log("Invalid choice. Please try again.");
        firstDecision();
    }



startGame();