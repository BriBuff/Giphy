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
$(document).on("click", ".bttn", function() {
    var topic = $(this).attr("data")
    console.log(topic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=sTY8u4svT7q5V5kmbOFxWn7S1SyfRB3b&limit=10";

    $.ajax({   
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
    
     var results = response.data;
     console.log(results);

// For loop for getting rid of R/PG-13 Gifs, adding stills of Gifs, and adding rating to the Gifs.
    
    for (var a = 0; a < results.length; a++) {
        if (results[a].rating !== "r" && results[a].rating !== "pg-13") {

            var newGif = $("<div>");
            newGif.addClass("newGif");

            var gifimg = results[a].images.fixed_width_still.url;
            
            var animeImg = $("<img>");
            animeImg.attr("src", results[a].images.fixed_width_still.url);
            animeImg.addClass("animeGIF");
            animeImg.attr("alt", "animeGif");

            var stillimg = results[a].images.fixed_width_still.url;
            animeImg.attr("data-state", "still"); 
            animeImg.attr("data-state-still", stillimg);

            var animateimg = results[a].images.fixed_width.url;
            animeImg.attr("data-state-animate", animateimg);

            newGif.append(animeImg);

            var gifRating = $("<p>").text("Rating: " + results[a].rating.toUpperCase());
            newGif.append(gifRating);

            $("#anime-gif").prepend(newGif);
        }
        }
    })
});

    // global on-click command
    $(document).on("click", ".animeGIF", function(){
        var ds = this.getAttribute("data-state");
        var urlStill = this.getAttribute("data-state-still");
        var urlAnimate = this.getAttribute("data-state-animate");
        console.log("ds is " + ds);
        // if img data-state == still, change img src to value of data-state-animated (i.e. the url)
        if (ds == "still"){
            // change img src value to value of data-state-animate
            $(this).attr("src", urlAnimate);
            $(this).attr("data-state", "animate");
        }
        else {
            // change img src value to value of data-state-state
            $(this).attr("src", urlStill);
            $(this).attr("data-state", "still");
        }

    });