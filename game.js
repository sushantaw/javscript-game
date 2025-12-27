// This is a simple game that allows a user to take decisions and see outcomes based on their choices.
// This game will run in the terminal using Node.js.

const prompt = require('prompt-sync')();

function startGame() {
    console.log("#--------------------------------#");
    console.log("# Welcome to the Adventure Game! #");
    console.log("#--------------------------------#");
    const playerName = prompt("Enter your name, adventurer: ");
    console.log(`Hello, ${playerName}! Your journey begins now.`);
    firstDecision(playerName);
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
}

function darkForest() {
    console.log("You venture into the dark forest. The trees are tall and the atmosphere is eerie.");
    const action = prompt("You see a shadow moving. Do you want to 'approach' it or 'run' away? ").toLowerCase().trim();
    if (action === 'approach') {
        console.log("You approach the shadow and discover it's a friendly creature. You gain a new ally.");
    } else if (action === 'run') {
        console.log("You run away from the shadow, but you feel scared.");
    } else {
        console.log("Invalid action. Please try again.");
        darkForest();
    }
}

function sunnyMeadow() {
    console.log("You walk into the sunny meadow. The flowers are blooming and the sun is shining.");
    const action = prompt("You see a sparkling object on the ground. Do you want to 'pick' it up or 'ignore' it? ").toLowerCase().trim();
    if (action === 'pick') {
        console.log("You pick up the object and find it's a magical amulet. You feel empowered.");
    } else if (action === 'ignore') {
        console.log("You ignore the object and continue enjoying the meadow.");
    } else {
        console.log("Invalid action. Please try again.");
        sunnyMeadow();
    }
}

startGame();