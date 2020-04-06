const vibes = [
    "... and you're awesome!",
    "... have a nice day!",
    "... and you got this!",
    "... and so is this puppy! 🐶"
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];


document.querySelector(".vibe").append(vibe);