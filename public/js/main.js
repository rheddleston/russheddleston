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
    image : "images/shangrila.jpg",
    caption: "香格里拉，中国",
    captionLink : "http://en.wikipedia.org/wiki/Zhongdian",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  afternoon : {
    label : "afternoon",
    greetingColor : "#FFF",
    image : "images/healdsburg.jpg",
    caption: "Healdsburg, CA",
    captionLink : "http://en.wikipedia.org/wiki/Healdsburg,_California",
    captionColor : "#FFF",
    linksColor : "#FFF"
  },
  evening : {
    label : "evening",
    greetingColor : "#FFF",
    image : "images/lijiang.jpg",
    caption : "丽江, 中国", 
    captionLink : "http://en.wikipedia.org/wiki/Lijiang,_Yunnan",
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