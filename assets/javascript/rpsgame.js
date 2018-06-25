$(document).ready(function () {

    var rock = $("img").attr({ src: "./assets/images/Rock.jpg", height: "140px", width: "175px" });
    var paper = $("img").attr({ src: "./assets/images/Paper.jpg", height: "140px", width: "175px" });
    var scissors = $("img").attr({ src: "./assets/images/Scissors.jpg", height: "140px", width: "175px" });
    var playerTurn = $("<p>It's Your Turn!</p>");
    var wins = 0;
    var losses = 0;

    


    $("#start-btn").on("click", function (event) {
        event.preventDefault();
        // Capture User Input and store them into variable
        var name = $("#input-name").val().trim();
        var p = $("<p>Hi " + name + " You are Player 1</p>");

        // Console log each of the user inputs to confirm we are receiving them
        console.log(name)
        //Output user input into correct html area replacing text area and button
        $("#name-added-1").html(p);
        $("#player1-box").text(name);
        $("#player-turn").html(playerTurn)
        console.log(p)
        $("#input-name").val("");
        $("#input-name").hide();
        $("#start-btn").hide();

    });

    

    $(document).on("click", function () {

        var userGuess = [rock, paper, scissors];

        if (userGuess === rock) {
            $("#player1-box").hide(paper);
            $("#player1-box").hide(scissors);
        }
        if (userGuess === paper) {
            $("#player1-box").hide(rock);
            $("#player1-box").hide(scissors);
        }
        if (userGuess === scissors) {
            $("#player1-box").hide(rock);
            $("#player1-box").hide(paper);
        }




    });
























    // var config = {
    //     apiKey: "AIzaSyCwRSRHRE3vcOcjvYZ6H4JRHz8wiQyGfSo",
    //     authDomain: "rps-multiplayer-213d5.firebaseapp.com",
    //     databaseURL: "https://rps-multiplayer-213d5.firebaseio.com",
    //     projectId: "rps-multiplayer-213d5",
    //     storageBucket: "",
    //     messagingSenderId: "776452580515"
    // };
    // firebase.initializeApp(config);

});