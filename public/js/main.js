var fontsLoaded = false;
var bgLoaded = false;     

WebFontConfig = {
  google: { families: [ 'Text Me One:n4' ] },
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
  $("h2").css("opacity", 1);
  $("#links").css("opacity", 1);
  $("h3").css("opacity", 1);
  $("h4").css("opacity", 1);
  $("div.linkContainer").css("opacity", 1);

  $("#links").css("bottom", (-1 * $(window).height() + 148));
}

var backgrounds = [
  {
    label : "angkor wat",
    greetingColor : "#000",
    image : "images/angkor.jpg",
    caption: "angkor wat",
    captionLink : "http://en.wikipedia.org/wiki/Angkor_Wat",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "glacier national park",
    greetingColor : "#FFF",
    image : "images/montana.jpg",
    caption: "glacier national park",
    captionLink : "http://en.wikipedia.org/wiki/Glacier_National_Park_(U.S.)",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "the inca trail",
    greetingColor : "#000",
    image : "images/peru.jpg",
    caption : "inca trail", 
    captionLink : "http://en.wikipedia.org/wiki/Inca_Trail_to_Machu_Picchu",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "shady waffle",
    greetingColor : "#FFF",
    image : "images/bm.jpg",
    caption : "shady waffle", 
    captionLink : "http://www.shadywaffle.org/",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "nepal",
    greetingColor : "#000",
    image : "images/nepal.jpg",
    caption : "mardi himal", 
    captionLink : "http://en.wikipedia.org/wiki/Trekking_peak",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "market and 10th",
    greetingColor : "#000",
    image : "images/sf_market_and_10th.jpg",
    caption : "market & 10th", 
    captionLink : "https://maps.google.com/maps?q=market+and+10th,+sf,+ca&hl=en&sll=37.269174,-119.306607&sspn=12.3355,21.928711&hnear=Market+St+%26+10th+St,+San+Francisco,+California&t=m&z=16",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  {
    label : "san francisco",
    greetingColor : "#FFF",
    image : "images/sf.jpg",
    caption : "mt davidson", 
    captionLink : "http://en.wikipedia.org/wiki/Mount_Davidson_(California)",
    captionColor : "#FFF",
    linksColor : "#FFF"
  }
];

function setBackground() {
  var greeting = "welcome to a little view of ";
  var backgroundInfo = backgrounds[Math.floor(Math.random()*backgrounds.length)];
  greeting += backgroundInfo.label;
  $("div#greeting").css("color", backgroundInfo.greetingColor);
  $("#greeting span").attr("title", greeting);             
  $("#greeting span").css("borderBottom", "1px solid " + backgroundInfo.greetingColor);
  var link = $("#bgCap a");
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