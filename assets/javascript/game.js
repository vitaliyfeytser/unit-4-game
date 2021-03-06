
var crystal1;
var crystal2;
var crystal3;
var crystal4;



var userWins = 0;
var userLosses = 0;
var randNum;

// Generate an alert with instructions to the game
// setTimeout(function() {
//     alert("\nINSTRUCTIONS:\n\nYou will be given a random number at the start of the game.\n\nThere are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.\n\nYou win the game by matching your total score to the random number, you lose the game if your total score goes above the random number.\n\nThe value of each crystal is hidden from you until you click on it.\nEach time when the game starts, the game will change the values of each crystal.");
// }, 1000);

$(document).ready(function(){
    
    
    // Generate random number between 19 and 120

    // Math.floor(Math.random() * (max - min + 1)) + min;

    function randNumFunc() {
        randNum = Math.floor(Math.random() * 102) + 19;
        console.log("randNum :" + randNum);
        $( "#random-num" ).html(randNum);
    }
    randNumFunc();

    // Generate random numbers for crystals between 1 and 9 --- and make sure that they are unique to each crystal
    function crystalRandGen () {

        var uniqueRandoms = [];
        var numRandoms = 9;

        function makeUniqueRandom() {
            // refill the array if needed
            if (!uniqueRandoms.length) {
                for (var i = 1; i < numRandoms; i++) {
                    uniqueRandoms.push(i);
                }
            }
            var index = Math.floor(Math.random() * uniqueRandoms.length);
            var val = uniqueRandoms[index];
            console.log("val :" + val);

            // now remove that value from the array
            uniqueRandoms.splice(index, 1);

            return val;

        }

        for (var i = 0; i < 4; i++) {
            var rand = makeUniqueRandom();
            console.log("rand: " + rand);
        }
            
            console.log("uniqueRandoms: " + uniqueRandoms);


            crystal1 = uniqueRandoms[0];
            crystal2 = uniqueRandoms[1];
            crystal3 = uniqueRandoms[2];
            crystal4 = uniqueRandoms[3];

            console.log("crystal1 :" + crystal1);
            console.log("crystal2 :" + crystal2);
            console.log("crystal3 :" + crystal3);
            console.log("crystal4 :" + crystal4);

    };
    crystalRandGen();


    // Add clicked crystal number to corresponding crystal variable

    var crystalSum = 0;

        $('#crystal1').click(function() {
            if (crystalSum < randNum) { // Prevent addition overrun after a win/loss has been achieved
                crystalSum = crystalSum + crystal1;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html(crystalSum);
            } else {
                return;
            }
            compareWin();
        });

        $('#crystal2').click(function() {
            if (crystalSum < randNum) {
                crystalSum = crystalSum + crystal2;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html(crystalSum);
            } else {
                return;
            }
            compareWin();
        });

        $('#crystal3').click(function() {
            if (crystalSum < randNum) {
                crystalSum = crystalSum + crystal3;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html(crystalSum);
            } else {
                return;
            }
            compareWin();
        });

        $('#crystal4').click(function() {
            if (crystalSum < randNum) {
                crystalSum = crystalSum + crystal4;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html(crystalSum);
            } else {
                return;
            }
            compareWin();
        });



    // Compare the random number to crystalSum
    function compareWin() {
        var delayReset;

        if (crystalSum > randNum) {
            delayReset = setTimeout(function() {
                userLosses = userLosses + 1;
                console.log("userLosses :" + userLosses);
                $( "#losses" ).html(userLosses);
                $("#announcement").html("You lost!");
                alert("Sorry, you lose!");
                delayReset = setTimeout(function() {
                    crystalSum = 0;
                    $( "#crystal-sum" ).html(crystalSum);
                }, 1000);
                randNumFunc();
                crystalRandGen();
            }, 500);
        }

        if (crystalSum === randNum) {
            delayReset = setTimeout(function() {
                userWins = userWins + 1;
                console.log("userWins :" + userWins);
                $("#announcement").html("You won!");
                alert("You won!");
                delayReset = setTimeout(function() { // Delay erasure of total score at victory or defeat for 1 sec.
                    crystalSum = 0;
                    $( "#crystal-sum" ).html(crystalSum);
                }, 1000);
                $( "#wins" ).html(userWins);
                randNumFunc();
                crystalRandGen();
            }, 500);
        }
    };
    


});