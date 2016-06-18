var words = ["hyper","hello"];
var typedwords = [];

var item;
var correct

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
        regenerate();
      }
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
