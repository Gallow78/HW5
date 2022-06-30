//File: Script.html
//GUI Assignment: HW5 Implementing a Bit of Scrabble with Drag-and-Drop
//Wesley Gallo,  UMass Lowell Computer Science, Wesley_Gallo@student.uml.edu

//Scrabble
//Copyright (c) 2022 by Gallo. All rights reserved. It may be freely copied or 
//excerpted for educational purposes with credit to the author.
//references: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript
//https://www.w3schools.com/
//https://jquery.com/
//https://beautifier.io/
//https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js
//https://www.youtube.com/watch?v=jfYWwQrtzzY
//updated by WG on June 29, 2022, at 9:30 PM


//Reference Jesse M. Heines
//https://beautifier.io/ changed the format slighty to be more readable

let ScrabbleTiles = [];
ScrabbleTiles["A"] = {
    "value": 1,
    "original-distribution": 9,
    "number-remaining": 1
};
ScrabbleTiles["B"] = {
    "value": 3,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["C"] = {
    "value": 3,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["D"] = {
    "value": 2,
    "original-distribution": 4,
    "number-remaining": 4
};
ScrabbleTiles["E"] = {
    "value": 1,
    "original-distribution": 12,
    "number-remaining": 12
};
ScrabbleTiles["F"] = {
    "value": 4,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["G"] = {
    "value": 2,
    "original-distribution": 3,
    "number-remaining": 3
};
ScrabbleTiles["H"] = {
    "value": 4,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["I"] = {
    "value": 1,
    "original-distribution": 9,
    "number-remaining": 9
};
ScrabbleTiles["J"] = {
    "value": 8,
    "original-distribution": 1,
    "number-remaining": 1
};
ScrabbleTiles["K"] = {
    "value": 5,
    "original-distribution": 1,
    "number-remaining": 1
};
ScrabbleTiles["L"] = {
    "value": 1,
    "original-distribution": 4,
    "number-remaining": 4
};
ScrabbleTiles["M"] = {
    "value": 3,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["N"] = {
    "value": 1,
    "original-distribution": 6,
    "number-remaining": 6
};
ScrabbleTiles["O"] = {
    "value": 1,
    "original-distribution": 8,
    "number-remaining": 8
};
ScrabbleTiles["P"] = {
    "value": 3,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["Q"] = {
    "value": 10,
    "original-distribution": 1,
    "number-remaining": 1
};
ScrabbleTiles["R"] = {
    "value": 1,
    "original-distribution": 6,
    "number-remaining": 6
};
ScrabbleTiles["S"] = {
    "value": 1,
    "original-distribution": 4,
    "number-remaining": 4
};
ScrabbleTiles["T"] = {
    "value": 1,
    "original-distribution": 6,
    "number-remaining": 6
};
ScrabbleTiles["U"] = {
    "value": 1,
    "original-distribution": 4,
    "number-remaining": 4
};
ScrabbleTiles["V"] = {
    "value": 4,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["W"] = {
    "value": 4,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["X"] = {
    "value": 8,
    "original-distribution": 1,
    "number-remaining": 1
};
ScrabbleTiles["Y"] = {
    "value": 4,
    "original-distribution": 2,
    "number-remaining": 2
};
ScrabbleTiles["Z"] = {
    "value": 10,
    "original-distribution": 1,
    "number-remaining": 1
};
ScrabbleTiles["_"] = {
    "value": 0,
    "original-distribution": 2,
    "number-remaining": 2
};

//dragged Character variable
let dragtile;

//Variables for Alphabet and Blank
let alphabet = "abcdefghijklmnopqrstuvwxyz_";

//Score Variables for current Score and Word
let curScore = 0;
let curWordScr = 0;

// dictionary
let dictionary = [];
//Variable for 100 tiles 
let RemTiles = 100;

//dbWord, Doubles the word score if used tile
let dbWord = false;

// Uses a string to hold current word, starting with the empty spaces. 
//7 Spaces to potentially use all letters
let crntword = "";
let crntwordArray = ["", "", "", "", "", "", ""];

// Letters on the Board in an array
let board = ["", "", "", "", "", "", ""];
//Empty playersHand that is filled with an array
let playersHand = [];

start();

//Start function to begin on start up
function start() {
    console.log("START FUNCTION CALLED");
    // Function to deal tiles
    tilesDealt();
}

// Reset Button function to reset the game
document.getElementById("buttonReset").addEventListener("click", function() {
    gameReset();
});

// gameReset function: which resets the game. Resulting in 
//Scores to 0 and Tiles back to 100 remaining
// Resets scores to 0, resets RemTiles to 100,
function gameReset() {
    console.log("Reset Function");
    curWordScr = 0;
    curScore = 0;
    RemTiles = 100;
    document.getElementById("RemTiles").innerHTML = RemTiles
    document.getElementById("currWord").innerHTML = ""
    document.getElementById("exist").innerHTML = ""
    dbWord = false;
    playersHand = [];
    crntword = "";
    board = ["", "", "", "", "", "", ""]
    crntwordArray = ["", "", "", "", "", "", ""];
    document.getElementById("crntword").innerHTML = "NULL"
    let ScrabbleTiles = [];
    ScrabbleTiles["A"] = {
        "value": 1,
        "original-distribution": 9,
        "number-remaining": 1
    };
    ScrabbleTiles["B"] = {
        "value": 3,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["C"] = {
        "value": 3,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["D"] = {
        "value": 2,
        "original-distribution": 4,
        "number-remaining": 4
    };
    ScrabbleTiles["E"] = {
        "value": 1,
        "original-distribution": 12,
        "number-remaining": 12
    };
    ScrabbleTiles["F"] = {
        "value": 4,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["G"] = {
        "value": 2,
        "original-distribution": 3,
        "number-remaining": 3
    };
    ScrabbleTiles["H"] = {
        "value": 4,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["I"] = {
        "value": 1,
        "original-distribution": 9,
        "number-remaining": 9
    };
    ScrabbleTiles["J"] = {
        "value": 8,
        "original-distribution": 1,
        "number-remaining": 1
    };
    ScrabbleTiles["K"] = {
        "value": 5,
        "original-distribution": 1,
        "number-remaining": 1
    };
    ScrabbleTiles["L"] = {
        "value": 1,
        "original-distribution": 4,
        "number-remaining": 4
    };
    ScrabbleTiles["M"] = {
        "value": 3,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["N"] = {
        "value": 1,
        "original-distribution": 6,
        "number-remaining": 6
    };
    ScrabbleTiles["O"] = {
        "value": 1,
        "original-distribution": 8,
        "number-remaining": 8
    };
    ScrabbleTiles["P"] = {
        "value": 3,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["Q"] = {
        "value": 10,
        "original-distribution": 1,
        "number-remaining": 1
    };
    ScrabbleTiles["R"] = {
        "value": 1,
        "original-distribution": 6,
        "number-remaining": 6
    };
    ScrabbleTiles["S"] = {
        "value": 1,
        "original-distribution": 4,
        "number-remaining": 4
    };
    ScrabbleTiles["T"] = {
        "value": 1,
        "original-distribution": 6,
        "number-remaining": 6
    };
    ScrabbleTiles["U"] = {
        "value": 1,
        "original-distribution": 4,
        "number-remaining": 4
    };
    ScrabbleTiles["V"] = {
        "value": 4,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["W"] = {
        "value": 4,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["X"] = {
        "value": 8,
        "original-distribution": 1,
        "number-remaining": 1
    };
    ScrabbleTiles["Y"] = {
        "value": 4,
        "original-distribution": 2,
        "number-remaining": 2
    };
    ScrabbleTiles["Z"] = {
        "value": 10,
        "original-distribution": 1,
        "number-remaining": 1
    };
    ScrabbleTiles["_"] = {
        "value": 0,
        "original-distribution": 2,
        "number-remaining": 2
    };
    tableClear();
    start();
}

// Function Dealing 7 of 100 tiles to player, subtracting the number from the pool of 100
//They are randomly chosen by choosing an letter from the alphabet and pushes the letter to the players hand

function tilesDealt() {
    console.log("Dealing Tiles");
    let currentletter;
    complete = false;
    while (!complete) {
        currentletter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        console.log("letter", currentletter, "left:", ScrabbleTiles[currentletter]["number-remaining"]);
        if (ScrabbleTiles[currentletter]["number-remaining"] == 0) {
            console.log(currentletter.toLowerCase());
            alphabet = alphabet.replace(currentletter.toLowerCase(), "");
        } else {
            if (RemTiles <= 0) {
                complete = true;

            } else {
                ScrabbleTiles[currentletter]["number-remaining"]--;
                playersHand.push(currentletter);
                RemTiles--;
                if (playersHand.length == 7) {
                    complete = true;
                }
            }
        }
    }
    document.getElementById("RemTiles").innerHTML = RemTiles;
    console.log(playersHand);
    screenTiles();
}

// The function wordSubmit makes sure the word is not blank

function wordSubmit() {
    if (crntword != "") {
        if (dbWord) {
            curWordScr = curWordScr * 2;
        }
        curScore = curScore + curWordScr;
        newGame();
    } else {
        document.getElementById("exist").innerHTML = "Word is empty";
    }
    curWordScr = 0;
}

// Process new game function, sets word to 0 and updates the score 
function newGame() {
    document.getElementById("crntword").innerHTML = 0;
    document.getElementById("curScore").innerHTML = curScore;
    document.getElementById("RemTiles").innerHTML = RemTiles;
    document.getElementById("currWord").innerHTML = "";
    document.getElementById("exist").innerHTML = "";
    crntword = "";
    board = ["", "", "", "", "", "", ""];
    tableClear();
    start();
}

// Function to clear the tiles off the board and sets the background image to empty to remove it.
// Clears current tiles off of board, goes through

function tableClear() {
    let children = [...document.getElementById('board').children]
    children.forEach((tile, index) => {
        document.getElementById(tile.id).style.backgroundImage = ``
        document.getElementById(tile.id).dataset.occupied = `false`
    })
}

// Clears previous tiles and loads new ones
function screenTiles() {
    let children = [...document.getElementById('tiles').children]
    children.forEach((tile, index) => {
        document.getElementById(tile.id).style.backgroundImage = ``;
    });
    playersHand.forEach((tile, index) => {
        document.getElementById(`tile${index}`).dataset.letter = tile;
        document.getElementById(`tile${index}`).style.backgroundImage = `url(graphics_data/Scrabble_Tiles/Scrabble_Tile_${tile}.jpg)`;
    });
}

//Function for placing tiles, checks tiles are placed next to one another
function tilePlaced() {
    console.log("Tile Placed");
}

// Function to determine tile placement and calculating current score with double letter bonus and word bonus
//https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js
function tileCurrentScore(draggableElement, dropzone) {
    if (dropzone.dataset.special == "dw") {
        dbWord = true;
    }
    let doubleLetter = false;
    if (dropzone.dataset.special == "dl") {
        doubleLetter = true;
    }
    let scoreToAdd = doubleLetter ? ScrabbleTiles[draggableElement.dataset.letter].value * 2 : ScrabbleTiles[draggableElement.dataset.letter].value;
    curWordScr = curWordScr + scoreToAdd;
    document.getElementById("crntword").innerHTML = dbWord ? curWordScr * 2 : curWordScr;
}

// Function to set character being dragged
function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
    dragtile = event.target.dataset.letter;
    console.log("drag start", dragtile);
}

// Function to keep Letter being dragged on table space
function onDragOver(event) {
    event.preventDefault();
}

//Function for tile dropped, sets id to text of tile and dropzone
function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    // Function to make sure the tile is placed in a "legal" drop area
    if (tilePlacement(dropzone)) {
        dropzone.dataset.occupied = "true";
        dropzone.style.backgroundImage = draggableElement.style.backgroundImage;
        console.log("adding in space " + dropzone.dataset.index + " the letter " + draggableElement.dataset.letter);
        board[dropzone.dataset.index] = draggableElement.dataset.letter;
        playersHand.splice(draggableElement.dataset.index, 1);
        checkWord(draggableElement, dropzone);
        tileCurrentScore(draggableElement, dropzone);
        screenTiles();
    }
}

// checkWord function- checks and prints the current word
function checkWord() {
    crntword = board.toString().replace(/,/g, '');
    document.getElementById("currWord").innerHTML = crntword;
    console.log("current word is", crntword);
}

// Function to make sure the tile is placed in a "legal" drop area, makes sure tile space is empty
function tilePlacement(dropzone) {
    const emptyboard = board.join('');
    if (emptyboard == "") {
        return true;
    } else {
        if (dropzone.dataset.occupied == "false") {
            const indextooccupy = parseInt(dropzone.dataset.index);
            const checkabove = indextooccupy + 1 == 7 ? false : board[indextooccupy + 1] != "";
            const checkbelow = indextooccupy - 1 == -1 ? false : board[indextooccupy - 1] != "";
            console.log("check space", (indextooccupy - 1), (indextooccupy + 1));
            if (checkbelow || checkabove) {
                return true;
            }
        } else {
            return false;
        }
    }
}