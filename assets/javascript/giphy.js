var topics = ["anime", "Full Metal Alchemist", "DragonBall Z", "Fruits Basket", "Ouran High School Host Club"];

// pulling gifs

function displayGifs() {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=sTY8u4svT7q5V5kmbOFxWn7S1SyfRB3b&limit=10&tag=" + topics;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // var animeGif = $("<div>");
        // var rating = response.rating;



    });

};

// making buttons
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


// click function
$("#add-anime").on("click", function() {

});