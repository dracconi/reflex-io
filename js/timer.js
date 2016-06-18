var timer;
var time;
var timerInterval;
var times = [];
function startTimer(){
  timer = 1;
  timerInterval = setInterval(function(){
    time += 0.01;//prov
    $("#time").html(time.toFixed(2));//prov
    $("#times").html("")
    for(var i=1;i<times.length;i++){
      $("#times").append(times[i].toFixed(2)+" ("+typedwords[i-1]+")<br>")
    }
  },10);
}
function resetTimer(){
  timer = 0;
  time=0;
  timer = 1;
}
function saveLastTime(){
  times.push(time);
}
function stopTimer(){
  clearInterval(timerInterval);
}
