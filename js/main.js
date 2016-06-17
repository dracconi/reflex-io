var words = ["hyper","hello"];
var item;
var correct

$(document).ready(function(){
  regenerate();
  $(".header").click(function(){
    $(".header").slideUp()
  })
  $("body").keyup(function(e){
    if (String.fromCharCode(e.which).toLowerCase() == item.charAt(correct).toLowerCase()){
      $("#"+correct).addClass("active");
      correct ++;
      if(correct == item.length){
        regenerate();
      }
    }
  })
})
function regenerate(){
  correct = 0;
  item = words[Math.floor(Math.random()*words.length)];
  text = "";
  for(i=0;i<item.length; i++){
    text += "<span id='"+i+"'>"+item.charAt(i)+"</span>"
  }
  $("#text").html("");
  $("#text").html(text);
}
function check(word){
  if(words.indexOf(word) != -1){
    $("input").addClass("active");
    $("#ok").css("display","inline");
    $("#bad").css("display","none");
    setTimeout(function(){$("input").removeClass("active");$("#ok").css("display","none");$("#bad").css("display","inline");document.getElementById("input").value="";},1500);
  }
}
