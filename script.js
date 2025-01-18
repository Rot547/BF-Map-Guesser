function initializeGame() {
    document.getElementById('categories').style.display = 'block';
    document.getElementById('start-button').style.display = 'none';
    document.querySelector('h1').textContent = 'Select a difficulty:';
}


function showEndPopup() {
    document.getElementById('endPopup').style.display = 'block';
    document.querySelector('h1').style.display = 'none';
    document.getElementById('categories').style.visibility = 'hidden';
    document.getElementById('game').style.visibility = 'hidden';
}

function closeEndPopup() {
    document.getElementById('endPopup').style.display = 'none';
    document.querySelector('h1').style.display = 'block';
    document.getElementById('categories').style.visibility = 'visible';
    document.getElementById('game').style.visibility = 'visible';
}

document.getElementById('credits-button').addEventListener('click', function() {
    document.getElementById('creditsPopup').style.display = 'block';
    document.getElementById('start-button').style.visibility = 'hidden';
    document.querySelector('h1').style.display = 'none';
    document.getElementById('categories').style.visibility = 'hidden';
    document.getElementById('game').style.visibility = 'hidden';
    document.getElementById('endPopup').style.visibility = 'hidden';
});


function closeCreditsPopup() {
    document.getElementById('creditsPopup').style.display = 'none';
    document.getElementById('start-button').style.visibility = 'visible';
    document.querySelector('h1').style.display = 'block';
    document.getElementById('categories').style.visibility = 'visible';
    document.getElementById('game').style.visibility = 'visible';
    document.getElementById('endPopup').style.visibility = 'visible';
    
}


document.getElementById('creditsPopup').querySelector('button').addEventListener('click', function() {
    closeCreditsPopup();
    if (document.getElementById('endPopup').style.display === 'block') {
        resetPageContents();
        initializeGame();
    }
});

function resetPageContents() {
    document.getElementById('start-button').style.visibility = 'visible';
    document.querySelector('h1').style.display = 'block';
    document.getElementById('categories').style.visibility = 'visible';
    document.getElementById('game').style.visibility = 'none';
    document.getElementById('endPopup').style.display = 'none';

    attempts = 0;
    usedImages = [];
    currentMap = '';
    currentCategory = '';
    score = 0;

}

const video = document.getElementById('background-video');
const loadingText = document.getElementById('loading-text');
const toggleButton = document.getElementById('toggle-video-button');

toggleButton.disabled = true;
toggleButton.style.opacity = 0.5;

video.addEventListener('canplaythrough', () => {
    video.classList.add('loaded');
    document.body.style.background = 'none';
    toggleButton.disabled = false;
    toggleButton.style.opacity = 1;
});

function toggleVideo() {
    if (video.style.opacity === '0') {
        video.style.opacity = 1;
        document.body.style.background = 'none';
        setTimeout(() => {
            video.style.filter = 'none';
        }, 300); 
    } else {
        video.style.filter = 'blur(10px)';
        setTimeout(() => {
            video.style.opacity = 0;
            document.body.style.background = "url('placeholder.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = 'cover';
        }, 300); 
    }
}

document.body.style.background = "url('placeholder.jpg') no-repeat center center fixed";
document.body.style.backgroundSize = 'cover';


// Map frequencies based on the provided values 
const mapFrequencies = {    
    'Cliffside-Medium': 9,
    'Brittany-Easy': 22,
    'Crete-Medium': 52,
    'Casino-Medium': 3,
    'Fortress-Hard': 12,
    'Brittany-Hard': 9,
    'Flakturm-Easy': 12,
    'Nuketown-Hard': 2,
    'Nezhit-Hard': 4,
    'Brittany-Medium': 21,
    'Reichstag-Hard': 1,
    'Crossroads-Hard': 17,
    'Reichstag-Easy': 9,
    'Shimajiri-Medium': 6,
    'Nezhit-Easy': 9,
    'Hangar-Medium': 11,
    'Crossroads-Medium': 27,
    'Jagd-Easy': 20,
    'Dunkirk-Medium': 43,
    'Bootcamp-Medium': 6,
    'Shimajiri-Hard': 1,
    'Nuketown-Easy': 12,
    'Hangar-Easy': 11,
    'Reichstag-Medium': 7,
    'Fortress-Medium': 39,
    'Anzio-Medium': 31,
    'Storm-Hard': 5,
    'Crete-Easy': 77,
    'Ursprung-Hard': 4,
    'Station-Medium': 12,
    'Inferno-Medium': 28,
    'Meadows-Easy': 5,
    'Crete-Hard': 10,
    'Mammut-Medium': 14,
    'Gdansk-Easy': 15,
    'Nuketown-Medium': 9,
    'Station-Hard': 1,
    'Station-Easy': 24,
    'Mammut-Hard': 1,
    'Cliffside-Easy': 14,
    'Donner-Hard': 15,
    'Yards-Easy': 12,
    'Dunkirk-Easy': 38,
    'Donner-Medium': 23,
    'Mammut-Easy': 13,
    'Meadows-Medium': 6,
    'Fortress-Easy': 43,
    'Ursprung-Medium': 8,
    'Asylum-Hard': 4,
    'Crossroads-Easy': 28,
    'Jagd-Hard': 9,
    'Argentan-Easy': 15,
    'Dunkirk-Hard': 7,
    'Hangar-Hard': 4,
    'Meadows-Hard': 3,
    'Yards-Hard': 7,
    'Bootcamp-Hard': 4,
    'Anzio-Easy': 22,
    'Argentan-Hard': 2,
    'Bootcamp-Easy': 8,
    'Jagd-Medium': 20,
    'Casino-Hard': 2,
    'Storm-Easy': 17,
    'Flakturm-Hard': 1,
    'Gdansk-Hard': 7,
    'Anzio-Hard': 4,
    'Nezhit-Medium': 7,
    'Inferno-Easy': 18,
    'Inferno-Hard': 12,
    'Asylum-Medium': 5,
    'Donner-Easy': 21,
    'Asylum-Easy': 5,
    'Cliffside-Hard': 7,
    'Storm-Medium': 14,
    'Argentan-Medium': 17,
    'Casino-Easy': 2,
    'Ursprung-Easy': 7,
    'Gdansk-Medium': 11,
    'Yards-Medium': 20,
    'Shimajiri-Easy': 8,
    'Flakturm-Medium': 6,

};


let currentMap = '';
let currentCategory = '';
let attempts = 0;
let maxAttempts = 5;
let score = 0;
let usedImages = [];
let devtoolsOpened = false;




const mapNames = [    
    'Anzio',
    'Asylum',
    'Bootcamp',
    'Brittany',
    'Casino',
    'Cliffside',
    'Crossroads',
    'Donner',
    'Flakturm',
    'Gdansk',
    'Hangar',
    'Inferno',
    'Jagd',
    'Mammut',
    'Meadows',
    'Nezhit',
    'Nuketown',
    'Reichstag',
    'Shimajiri',
    'Station',
    'Storm',
    'Ursprung',
    'Yards',
    'Crete',
    'Fortress',
    'Argentan',
    'Dunkirk'

];

// Start the game
function startGame(category) {
    currentCategory = category;
    document.getElementById('categories').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('game').style.display = 'visible';
    document.querySelector('h1').textContent = 'BlockFront Map Guesser'; // Update title
    nextRound();
}

// Start the next round
function nextRound() {
    if (attempts >= maxAttempts) {
        endGame();
        return;
    }

    // Filter out already used maps
    let availableMaps = mapNames.filter(map => !usedImages.includes(map));
    if (availableMaps.length === 0) {
        usedImages = [];
        availableMaps = mapNames;
    }

    // Pick a random map from the available maps
    currentMap = availableMaps[Math.floor(Math.random() * availableMaps.length)];
    usedImages.push(currentMap);

// Determine the category and construct the map identifier
const mapCategory = `${currentMap}-${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1).toLowerCase()}`;

// Get the frequency for the current map and category combination
const frequency = mapFrequencies[mapCategory] || 3;  // Default to 3 if no frequency is found

    
    const imageNumber = Math.floor(Math.random() * frequency) + 1; // Random number based on frequency


   
const categoryMapping = {
    medium: "Medium",
    hard: "Hard",
    easy: "Easy"
};
// Construct the image path
const fixedCategory = categoryMapping[currentCategory.toLowerCase()] || currentCategory;
const imagePath = `Maps/${currentMap}/${fixedCategory}/${currentMap.toLowerCase()}_${currentCategory.toLowerCase()}-${imageNumber}.png`;

    const nextImage = new Image();
    nextImage.src = imagePath;
    nextImage.onload = () => {
        currentImage = imagePath;
        document.getElementById('mapImage').src = currentImage;
        document.getElementById('mapImage').style.opacity = 1;
        document.getElementById('guess').value = '';
    };
    nextImage.onerror = () => alert('Failed to load image!');
}

function levenshtein(a, b) {
    const an = a ? a.length : 0;
    const bn = b ? b.length : 0;
    if (an === 0) return bn;
    if (bn === 0) return an;
    const matrix = Array.from({ length: an + 1 }, () => Array(bn + 1).fill(0));
    for (let i = 0; i <= an; i++) matrix[i][0] = i;
    for (let j = 0; j <= bn; j++) matrix[0][j] = j;
    for (let i = 1; i <= an; i++) {
        for (let j = 1; j <= bn; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1, 
                matrix[i][j - 1] + 1, 
                matrix[i - 1][j - 1] + cost 
            );
        }
    }
    return matrix[an][bn];
}

function submitGuess() {
    let userGuess = document.getElementById('guess').value.trim().toLowerCase();
    const correctAnswer = currentMap.toLowerCase();

    // Automatically change "Yard" to "Bootcamp" TNT demanded this
    if (userGuess === 'yard') {
        userGuess = 'bootcamp';
        document.getElementById('guess').value = 'Bootcamp';
    }

    if (userGuess === 'infected') {
        userGuess = 'nezhit';
        document.getElementById('guess').value = 'Nezhit';
    }

    const distance = levenshtein(userGuess, correctAnswer);
    const threshold = Math.ceil(currentMap.length * 0.2); // Allows up to 20% character differences
    if (distance <= threshold) {
        score++;
        attempts++;
        document.getElementById('correctPopup').style.display = 'block';
        document.getElementById('correctAnswerCorrect').textContent = currentMap;
        setTimeout(() => {
            document.getElementById('correctPopup').style.display = 'none';
            loadNextImage();
        }, 2000);
    } else {
        attempts++;
        document.getElementById('correctAnswer').textContent = currentMap;
        document.getElementById('incorrectPopup').style.display = 'block';
        showPopup('incorrectPopup');
    }

    setTimeout(nextRound, 1000);
}

// Function to set the next map
function setNextMap(mapName) {
    if (mapNames.includes(mapName)) {
        currentMap = mapName;
        console.log(`Next map set to: ${mapName}`);
    } else {
        console.error(`Map name "${mapName}" is not valid.`);
    }
}

// Show feedback popup
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 1000);
}

// End the game
function endGame() {
    document.getElementById('game').style.display = 'none';
    showEndPopup();
    document.getElementById('finalScoreText').textContent = score;
    document.getElementById('maxAttempts').textContent = maxAttempts;
    document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click
 
});

}

// Restart the game
function restartGame() {
    attempts = 0;
    score = 0;
    usedImages = [];
    document.getElementById('categories').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    document.querySelector('h1').textContent = 'Select a difficulty:';
    currentMap = '';
}

document.getElementById('endPopup').querySelector('button').addEventListener('click', function() {
    restartGame();
    closeEndPopup();
});

   document.addEventListener('DOMContentLoaded', function () {
    const mapImage = document.getElementById('mapImage');
    
    // Disable right-click on the image 
    mapImage.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    // Add an event listener to submit the guess on Enter key
    const guessInput = document.getElementById('guess');
    guessInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitGuess();
        }
    });

    const backgroundVideo = document.getElementById('background-video');
    backgroundVideo.addEventListener('canplaythrough', function () {
        backgroundVideo.classList.add('loaded');
        document.body.style.background = 'none'; 
    });
});
