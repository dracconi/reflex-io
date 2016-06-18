var timer;
var time;
var timerInterval;
var times = [];
function startTimer(){
  timer = 1;
  timerInterval = setInterval(function(){
    time += 0.01;//prov
    $("#time").html(time.toFixed(2));//prov
  },10);
}
function resetTimer(){
  time=0;
}
function saveLastTime(){
  times.push(time);
}
function stopTimer(){
  clearInterval(timerInterval);
}
