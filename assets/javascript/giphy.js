// Gif "topic" buttons
var topics = ["Anime", "Yuri on Ice!", "Full Metal Alchemist", "DragonBall Z", "Fruits Basket", "Ouran High School Host Club"];

// Pulling gifs

// Making buttons/new buttons
function newAnimeBttns() {
    $("#animeBttns").empty();
    for (var i= 0; i < topics.length; i++) {
        var topicBttn = $("<button>");
        topicBttn.addClass("bttn");
        topicBttn.attr("data", topics[i]);
        topicBttn.text(topics[i]);
        $("#animeBttns").append(topicBttn);
    } 
}

    $("#add-anime").on("click", function(event) {
        event.preventDefault();
        var anime = $("#anime-input").val().trim();
        topics.push(anime);
        newAnimeBttns();
    });

newAnimeBttns();

// Displaying gifs
// function displayGifs() {
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=sTY8u4svT7q5V5kmbOFxWn7S1SyfRB3b&tag=" + topic + "&limit=10";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//     });

// };



// click function- display gifs, limit rating, (call functions above?)
// $("#add-anime").on("click", function(event) {
//     event.preventDefault();
//     var anime = $("#animeBttns").val().trim();
//     topics.push(anime);
//     newAnimeBttns();
// });

// Calling newAnimeBttns() to show the initial list