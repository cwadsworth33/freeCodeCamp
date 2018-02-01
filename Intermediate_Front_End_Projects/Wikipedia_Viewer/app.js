/*
* @purpose opens a new window with a random Wikipedia article
*/
function getRandom(){
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}

/*
* @purpose makes an http request to Wikipedia then updates the
*          searchResults div with the new search results
*/
function search(){
  //clear search results and get search from search bar
  $("#searchResults").html('');
  $("#searchResults").append("<hr>");
  $("#searchResults").css("display","block");
  var searchTitle = $('<h3>Search Results</h3>');
  searchTitle.addClass("text-center");
  $("#searchResults").append(searchTitle);
  var val = $("#searchBar").val();
  var search = val.toString();
  //ajax call
  $.ajax({
  url: '//en.wikipedia.org/w/api.php',
  data: { action: 'query', list: 'search', srsearch: search, format: 'json' },
  dataType: 'jsonp',
  success: function (x) {
    console.log(x.query.search);
    //iterate over the length of the search results and create divs
    //with the search results
    for(var i=0; i<x.query.search.length; i++){
      var div = $("<div></div>");
      var link = $("<a></a>");
      var linkString = "https://en.wikipedia.org/?curid="+x.query.search[i].pageid;
      link.attr('href', linkString);
      link.attr('target', '_blank');
      div.addClass("search-div");
      var h4 = $("<h4>"+x.query.search[i].title+"</h4>");
      var snippet = $("<p>"+x.query.search[i].snippet+"..."+"</p>");
      div.append(h4);
      div.append(snippet);
      link.append(div);
      $("#searchResults").append(link);
    }
    $("#searchBar").val("");
  }
});
}

/*
* @purpose hides the search icon, displays the search bar,
*          and shows the compress icon.
*/
function searchBar(){
  $(".fa-search").hide();
  $("input").css("display", "inline-block");
  $(".fa-compress").show();
}

/*
* @purpose Collapses the search results and puts the
* search icon back up in place of the input element
*/
function collapse(){
  $(".fa-search").show();
  $("#searchResults").hide();
  $("input").hide();
  $(".fa-compress").hide();
  $("#searchResults").html('');
}

//When the compress icon is clicked, call collapse()
$(".fa-compress").on('click', function () {
    collapse();
});

//When line feed is entered into the input, call search()
$("input").on('keyup', function (e) {
    if (e.keyCode == 13) {
        search();
    }
});
