
var crystal1;
var crystal2;
var crystal3;
var crystal4;



var userWins = 0;
var userLosses = 0;
var randNum;


$(document).ready(function(){

    // Generate random number between 19 and 120

    // Math.floor(Math.random() * (max - min + 1)) + min;
    // function randNumFunc() {
    //     randNum = Math.floor(Math.random() * 102) + 19;
    //     console.log("randNum :" + randNum);
    //     $( "#random-num" ).html(randNum);
    // }
    // randNumFunc();

    // Generate random numbers for crystals between 1 and 9 --- and make sure that they are unique to each crystal
    function crystalRandGen () {

        var uniqueRandoms = [];
        var numRandoms = 4;

        function makeUniqueRandom() {
            // refill the array if needed
            if (!uniqueRandoms.length) {
                for (var i = 1; i <= numRandoms; i++) {
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
            if (i % numRandoms == 0) {
                return;
            }
            
            crystal1 = uniqueRandoms[0];
            crystal2 = uniqueRandoms[1];
            crystal3 = uniqueRandoms[2];
            crystal4 = uniqueRandoms[3];

            // crystal1 = Math.floor(Math.random() * 9) + 1;
            // crystal2 = Math.floor(Math.random() * 9) + 1;
            // crystal3 = Math.floor(Math.random() * 9) + 1;
            // crystal4 = Math.floor(Math.random() * 9) + 1;
            console.log("crystal1 :" + crystal1);
            console.log("crystal2 :" + crystal2);
            console.log("crystal3 :" + crystal3);
            console.log("crystal4 :" + crystal4);
        // }
    };
    crystalRandGen();


    // Add clicked crystal number to corresponding crystal variable

    var crystalSum = 0;

        $('#crystal1').click(function() {
            if (crystalSum < randNum) { // Prevent addition overrun after a win/loss has been achieved
                crystalSum = crystalSum + crystal1;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html("Your current total is: " + crystalSum);
            } else {
                return;
            }
            compareWin();
        });

        $('#crystal2').click(function() {
            if (crystalSum < randNum) {
                crystalSum = crystalSum + crystal2;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html("Your current total is: " + crystalSum);
            } else {
                return;
            }
            compareWin();
        });

        $('#crystal3').click(function() {
            if (crystalSum < randNum) {
                crystalSum = crystalSum + crystal3;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html("Your current total is: " + crystalSum);
            } else {
                return;
            }
            compareWin();
        });

        $('#crystal4').click(function() {
            if (crystalSum < randNum) {
                crystalSum = crystalSum + crystal4;
                console.log("crystalSum :" + crystalSum);
                $( "#crystal-sum" ).html("Your current total is: " + crystalSum);
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
                $( "#losses" ).html("Losses: " + userLosses);
                $("#announcement").html("You lost!");
                alert("Sorry, you lose!");
                delayReset = setTimeout(function() {
                    crystalSum = 0;
                    $( "#crystal-sum" ).html("Your current total is: " + crystalSum);
                }, 1000);
                randNumFunc();
                crystalRandGen();
            }, 500);
        }

        //         //  Start on click.
        // $("#start").on("click", function() {
        //     //  Set the button alert's timeout to run three seconds after the function's called.
        //     delayButtonAlert = setTimeout(function() {
        //     alert("Alert #2: Called 3 seconds after the start button is clicked.");
        //     }, 3000);
        // });

        if (crystalSum === randNum) {
            delayReset = setTimeout(function() {
                userWins = userWins + 1;
                console.log("userWins :" + userWins);
                $("#announcement").html("You won!");
                alert("You won!");
                delayReset = setTimeout(function() {
                    crystalSum = 0;
                    $( "#crystal-sum" ).html("Your current total is: " + crystalSum);
                }, 1000);
                $( "#wins" ).html("Wins: " + userWins);
                randNumFunc();
                crystalRandGen();
            }, 500);
        }
    };
    


});