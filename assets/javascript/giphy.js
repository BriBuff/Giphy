// Gif "topic" buttons
var topics = ["Anime", "Yuri on Ice!", "Full Metal Alchemist", "DragonBall Z", "Fruits Basket", "Ouran High School Host Club"];

// Pulling gifs

for (var i= 0; i < topics.length; i++) {
    var topicBttn = $("<button>");
    topicBttn.addClass(".bttn");
    topicBttn.attr("data", topics[i]);
    topicBttn.text(topics[i]);
    $("#animeBttns").append(topicBttn);
}

var topic = 

// Displaying gifs
function displayGifs() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=sTY8u4svT7q5V5kmbOFxWn7S1SyfRB3b&tag=" + topic + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

};

// Making new buttons
function animeBttns() {
    $("#animeBttns").empty();
    for (var i = 0; i < topics.length; i++) {
        var bttn = $("<button>");
        bttn.addClass("anime-button");
        bttn.attr("data-name", topics[i]);
        bttn.text(topics[i]);
        $("animeBttns").append(bttn);
    }
};


// click function- display gifs, limit rating, (call functions above?)
$("#add-anime").on("click", function() {
    displayGifs();
    animeBttns();
});