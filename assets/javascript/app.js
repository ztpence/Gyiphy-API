// May need a document.ready function or something that loads the first set of buttons and page
//need an array of starting items or themes
var musicStars = ["Green Day", "Michael Jackson", "Styx", "Nirvana", "Snoop Dog", "Tool"]
//Need to create buttons for items --- look at class examples
console.log(musicStars[0])
function renderButtons() {
    
    $("#buttons-view").empty();

    for (var i = 0; i < musicStars.length; i++){
        var button = $("<button>");
        button.addClass("musicStar");
        button.attr("data-name", musicStars[i]);
        button.text(musicStars[i]);
        $("#buttons-view").append(button);
    }
}


//need to create onclick function for array items that are displayed on openning page
//need to create onclick functio to create new item buttons and a .val .trim method for text
$("#add-musicStar").on("click", function(event){
    event.preventDefault();
    var newMusicStar = $("#musicStar-input").val().trim();
    musicStars.push(newMusicStar);
    renderButtons();
    console.log("button should add")
});

renderButtons();
// need to create ajax json function for giphy data to be returned to page

$("#buttons-view").on("click", function() {
    var musicStars = $(this).attr("data-name");
      console.log(musicStars + "Star")
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ylypXp2DJdzSIxhOLecX28bY06qycAp7&q=" +
    musicStars +
    "&limit=10&offset=0&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(queryURL);
        console.log(response);

        var results = response.data;
        console.log(results);

        for (var i = 0 ; i < results.length; i++) {
            var musicStarDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var musicStarImage = $("<img>");
            musicStarImage.attr("src", results[i].images.fixed_height.url);
            musicStarDiv.append(p);
            musicStarDiv.append(musicStarImage);

            $("#music-star").prepend(musicStarDiv);
        }

    
    });

});


//need to create a function for pausing and starting video clips
// 