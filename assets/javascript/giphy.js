// Gif "topic" buttons
var topics = ["Anime", "Yuri on Ice!", "Full Metal Alchemist", "DragonBall Z", "Fruits Basket", "Ouran High School Host Club"];

console.log(topics.length);
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

// Calling the function to show the initial topics
newAnimeBttns();

// Displaying gifs on a click for any of the buttons above.
$(".bttn").on("click", function() {
    var topic = $(this).attr("data")
    console.log(topic);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=sTY8u4svT7q5V5kmbOFxWn7S1SyfRB3b&limit=10";
    $.ajax({   
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
    
    var results = response.data;

    for (var a = 0; a < results.length; a++) {
        if (results[a].rating !== "r" && results[a].rating !== "pg-13") {
            var newGif = $("<div>");
            newGif.addClass("newGif");
            var gifRating = $("<p>").text("Rating: " + results[a].rating);
            // newGif.attr("data", results[a]);
            var gifimg = results[a].images.fixed_width_still.url;
            var animeImg = $("<img>");
            animeImg.attr("src", gifimg);
            animeImg.attr("alt", "animeGif");
            // var stillimg = results[a].images.fixed_width_still.url;
            // var animateimg = results[a].images.fixed_width.url;
            // animeImg.attr("data-state", "still"); 
            // animeImg.attr("data-still", stillimg);
            // animeImg.attr("data-animate", animateimg);
            newGif.append(gifRating);
            newGif.append(animeImg);
            console.log(animeImg);
            console.log(newGif);
            $("#anime-gif").prepend(newGif);
        }

        // Function to update state of gif
        // function updatedState() {
        //     var state = "data-state";
        //     $(".newGif").on("click", function(){
        //         if (state === "still") {
        //             updatedState(animateimg, this);
        //         }
        
        //         else {
        //             updatedState(stillimg);
        //         }
        //     })
        // }
        // updatedState()
}
})
});