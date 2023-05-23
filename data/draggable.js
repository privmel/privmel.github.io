// making the windows draggable

$(function(){
  $('#win').draggable();
});

$(function(){
  $('#win2').draggable();
});

$(function(){
  $('#win3').draggable();
});

$(function(){
  $('#win4').draggable();
});

// show windows on click

function openWin2() {
  document.getElementById("win2").style.display = "";
}

function openWin4() {
  document.getElementById("win4").style.display = "";
}

// close windows

function close2() {
  document.getElementById("win2").style.display = "none";
}

function close4() {
  document.getElementById("win4").style.display = "none";
}