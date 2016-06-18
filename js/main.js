
$.getJSON( "js/words.json").then(start)
var typos = 0;
var item;
var typedwords = [];
var correct;
var words;
var words_obj;
function start(response){
  words = response["words"];
  $("#times").html("");
}
$(document).ready(function(){
  if(getParameterByName("seed")==undefined){
    window.location.replace(window.location.href + "?seed=" + makeid());
  };
  Math.seed = getParameterByName("seed");
  $("#start").click(function(){
    $(".header").slideUp();
    regenerate();
  });
$("body").keyup(function(e){
  if (String.fromCharCode(e.which).toLowerCase() == item.charAt(correct).toLowerCase()){
    $("#"+correct).addClass("active");
    correct ++;
    if(correct == item.length){
      typedwords.push(item);
      $("#times").append(time.toFixed(2)+" ("+item+")<br>")
      regenerate();
    };
  }else{
    time += 1;
    typos++;
  };
});
});
function regenerate(){
  stopTimer();
  saveLastTime();
  resetTimer();
  startTimer();
  correct = 0;
  item = words[Math.floor(Math.seededRandom(words.length,0))];
  text = "";
  for(i=0;i<item.length; i++){
    text += "<span id='"+i+"'>"+item.charAt(i)+"</span>";
  };
  $("#text").html("");
  $("#text").html(text);
}
