$.getJSON( "js/words.json").then(start);
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
$(".header").click(function(){
  $(".header").slideUp();
  regenerate();
})
$("body").keyup(function(e){
  if (String.fromCharCode(e.which).toLowerCase() == item.charAt(correct).toLowerCase()){
    $("#"+correct).addClass("active");
    correct ++;
    if(correct == item.length){
      typedwords.push(item);
      $("#times").append(time.toFixed(2)+" ("+item+")<br>")
      regenerate();
    }
  }else{
    typos++;
  }
})
})
function regenerate(){
  stopTimer();
  saveLastTime();
  resetTimer();
  startTimer();
  correct = 0;
  item = words[Math.floor(Math.random()*words.length)];
  text = "";
  for(i=0;i<item.length; i++){
    text += "<span id='"+i+"'>"+item.charAt(i)+"</span>"
  }
  $("#text").html("");
  $("#text").html(text);
}
