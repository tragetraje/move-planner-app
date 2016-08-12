
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview:
    // collect the values of street address and city of submit form
    var streetVal = $( "#street" ).val();
    var cityVal = $( "#city" ).val();
    var location = cityVal + ' ,' + streetVal;

    // street view url
    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + location + '&key=AIzaSyAU_HCBE5IojEje5VGo95e7izIupvhmqHE';

    // append the image on the page
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // ny times ajax request:
    // the url with parameters to query
    var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    nytimesUrl += '?' + $.param({
    'api-key': "46ae31f1ca6949dfb80a2899464ebbbb",
    'q': location,
    'begin_date': '20100101',
    'fl': 'web_url,snippet'
    });

    // get the .getJSON() working
    $.getJSON(nytimesUrl, function(data){
        console.log(data);
    });







    return false;
};

$('#form-container').submit(loadData);
