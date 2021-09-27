
// Button colors and game pattern variables
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// play button audio on click
function playAudio(btnColor) {
    var audioPath = 'sounds/' + btnColor + '.mp3';
    (new Audio(audioPath)).play();
}

// get next color of sequence
function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColor);
}

var randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

var randomButton = $('#' + randomChosenColor);

// on button click: 
//   1) animate button
//   2) play button audio
$('.btn').click(function () {
    var userChosenColor = this.id
    userClickedPattern.push(userChosenColor);
    playAudio(userChosenColor);
    animatePress(userChosenColor);
});

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(function() { $('#' + currentColor).removeClass('pressed')
    }, 100);
}
