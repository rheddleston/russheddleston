var fontsLoaded = false;
var bgLoaded = false;     

WebFontConfig = {
  google: { families: [ 'Quicksand:n4' ] },
  // font successfully loaded
  fontactive: function(fontFamily, fontDescription) {
    fontsLoaded = true;
    render();
  },
  // font failed to load
  fontinactive: function(fontFamily, fontDescription) {
    fontsLoaded = true;
    render();
  }
};

function render() {
  if(!fontsLoaded || !bgLoaded) {
    return;
  }
  $("#greeting").css("opacity", 1);
  $("#bgCaption").css("opacity", 1);
  $("#links").css("opacity", 1);
}

var backgrounds = {
  morning : {
    label : "morning",
    greetingColor : "#000",
    image : "images/angkor.jpg",
    caption: "Angkor Wat",
    captionLink : "http://en.wikipedia.org/wiki/Angkor_Wat",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  afternoon : {
    label : "afternoon",
    greetingColor : "#FFF",
    image : "images/montana.jpg",
    caption: "Glacier National Park",
    captionLink : "http://en.wikipedia.org/wiki/Glacier_National_Park_(U.S.)",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  evening : {
    label : "evening",
    greetingColor : "#FFF",
    image : "images/peru.jpg",
    caption : "Inca Trail", 
    captionLink : "http://en.wikipedia.org/wiki/Inca_Trail_to_Machu_Picchu",
    captionColor : "#FFF",
    linksColor : "#FFF"
  }
};

function setBackground() {
  var hours = new Date().getHours();
  var time;
  var greeting = "so lovely of you to come by this ";
  if(hours > 17 || hours < 5) {
    time = "evening";
  }
  else if(hours > 4 && hours < 12) {
    time = "morning";
  }
  else {
    time = "afternoon";
  }
  // time = "afternoon";
  var backgroundInfo = backgrounds[time];
  greeting += backgroundInfo.label;
  $("div#greeting").css("color", backgroundInfo.greetingColor);
  $("#greeting span").attr("title", greeting);             
  $("#greeting span").css("borderBottom", "1px solid " + backgroundInfo.greetingColor);
  $("#bgCaption").css("color", backgroundInfo.captionColor)
  var link = $("#bgCaption a");
  link.attr("href", backgroundInfo.captionLink);
  link.html(backgroundInfo.caption);        
  link.css("color", backgroundInfo.captionColor);
  $("#links").css("color", backgroundInfo.linksColor);
  $("#links a").css("color", backgroundInfo.linksColor);
  $("#links span").css("borderBottom", "1px solid " + backgroundInfo.linksColor);
  // attempt to pre-load the desired image
  var img = document.createElement("img");
  img.id = "background";
  img.src = backgroundInfo.image;
  $(img).load(function() { 
    bgLoaded = true;
    // bring in the background as soon as it's loaded
    $("div#bg").css("backgroundImage", "url(" + backgroundInfo.image + ")");
    $("div#bg").css("opacity", 1);
    render();
  });
}

// setup
setBackground();