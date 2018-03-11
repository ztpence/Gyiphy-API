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
//need to create a function for pausing and starting video clips
// 