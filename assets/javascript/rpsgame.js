$(document).ready(function () {

    $("#start-btn").on("click", function (event) {
        event.preventDefault();
        // Capture User Input and store them into variable
        var name = $("#input-name").val().trim();
        var p = $("<p>Hi " + name + "You are Player 1</p>");
        
        // Console log each of the user inputs to confirm we are receiving them
        console.log(name)
        //Output user inout into correct html area replacing text area and button
        $("#name-added-1").text(p);
        console.log(p)
        $("#input-name").val("");
        $("#input-name").hide();
        $("#start-btn").hide();
        

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