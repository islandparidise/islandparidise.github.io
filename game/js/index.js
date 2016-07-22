$(document) .ready( function() { 
 var score = 0;
  
  $('#spike1').hide();
  $('#spike2').hide();
  $('#spike3').hide();
  $('#dirt1').hide();
  $('#dirt2').hide();
  $('#dirt3').hide();
  $('.goldcoin').hide();
  $('.gold').hide();
  $('.silvercoin').hide();
   $('.diamond').hide();
  $('#Scoreboard').hide();
  
  
$('button').click(function(){
var name = prompt( "What is your name?" )
 alert(" Hello " + name + " Welcome to my game. Enjoy! ")
  
  $('h1').hide();
  $('h2').hide();
  $('p').hide();
  $('h3').hide();
  $('ul').hide();
  $('h4').hide();
  $('button').hide();
   $('#spike1').show();
  $('#spike2').show();
  $('#spike3').show();
  $('#dirt1').show();
  $('#dirt2').show();
  $('#dirt3').show();
  $('#gold1').show();
  $('#gold2').show();
  $('#gold3').show();
  $('.silvercoin').show();
  $('#goldcoin1').show();
  $('#goldcoin2').show();
  $('#goldcoin3').show();
  $('#gold3').show();
  $('#gold3').show();
  $('#gold3').show();
  $('#diamond1').show();
  $('#diamond2').show();
  $('#diamond3').show();
  $('#Scoreboard').show();
  
});

  //Dirt explode
  $('.dirt').click(function(){ 
 $('.dirt').toggle("explode");
  score = score - 2;
  document.getElementById("points").innerHTML = score;
  $('.dirt').fadeIn(2000);
 });


//Spike explode
  $('.spike').click(function(){ 
 $('.spike').toggle("explode"); 
  score = score - 2;
  document.getElementById("points").innerHTML = score;
 $('.spike').fadeIn(2000);
 });

//Gold Coins explode
  $('.goldcoin').click(function(){ 
  $('.goldcoin').toggle("explode");
  score = score + 4;
  document.getElementById("points").innerHTML = score;
  $('.goldcoin').fadeIn(2000);
 });

//Silver Coins explode
  $('.silvercoin').click(function(){ 
 $('.silvercoin').toggle("explode")
  score = score + 3;
  document.getElementById("points").innerHTML = score;
    $('.silvercoin').fadeIn(1000);
 });

//Gold explode
  $('.gold').click(function(){ 
 $('.gold').toggle("explode");
    score = score + 2;
  document.getElementById("points").innerHTML = score;
  $('.gold').fadeIn(2000);
 });

//Diamond explode
  $('.diamond').click(function(){ 
 $('.diamond').toggle("explode");
    score = score + 5;
  document.getElementById("points").innerHTML = score;
  $('.diamond').fadeIn(3000);
 });
  
  
//Move #spike1 
  function moveSpike1Right() {
    $("#spike1").animate({left: "+=800"}, 1000, moveSpike1Left);
  }
  
   function moveSpike1Left() { 
    $("#spike1").animate({left: "-=800"}, 1000, moveSpike1Right);  
  }
  
  moveSpike1Right();

  
//Move #spike2 
  function moveSpike2Right() {
    $("#spike2").animate({left: "+=500"}, 1000, moveSpike2Left);
  }
  
   function moveSpike2Left() { 
    $("#spike2").animate({left: "-=500"}, 1000, moveSpike2Right);  
  }
  
  moveSpike2Right();
  //Move #spike3 
  function moveSpike3Right() {
    $("#spike3").animate({left: "+=500"}, 1000, moveSpike3Left);
  }
  
   function moveSpike3Left() { 
    $("#spike3").animate({left: "-=500"}, 1000, moveSpike3Right);  
  }
  
  moveSpike3Right();
  //Move #dirt1
  function moveDirt1Right() {
    $("#dirt1").animate({left: "+=500"}, 1000, moveDirt1Left);
  }
  
   function moveDirt1Left() { 
    $("#dirt1").animate({left: "-=500"}, 1000, moveDirt1Right);  
  }
  
  moveDirt1Right();
  //Move #dirt2
  function moveDirt2Right() {
    $("#dirt2").animate({left: "+=500"}, 1000, moveDirt2Left);
  }
  
   function moveDirt2Left() { 
    $("#dirt2").animate({left: "-=500"}, 1000, moveDirt2Right);  
  }
  
  moveDirt2Right();
  //Move #dirt3
  function moveDirt3Right() {
    $("#dirt3").animate({left: "+=500"}, 1000, moveDirt3Left);
  }
  
   function moveDirt3Left() { 
    $("#dirt3").animate({left: "-=500"}, 1000, moveDirt3Right);  
  }
  
  moveDirt3Right();
  //Move #gold1
  function moveGold1Right() {
    $("#gold1").animate({left: "+=500"}, 1000, moveGold1Left);
  }
  
   function moveGold1Left() { 
    $("#gold1").animate({left: "-=500"}, 1000, moveGold1Right);  
  }
  
  moveGold1Right();
//Move #gold2
  function moveGold2Right() {
    $("#gold2").animate({left: "+=500"}, 1000, moveGold2Left);
  }
  
   function moveGold2Left() { 
    $("#gold2").animate({left: "-=500"}, 1000, moveGold2Right);  
  }
  
  moveGold2Right();
  //Move #gold3
  function moveGold3Right() {
    $("#gold3").animate({left: "+=500"}, 1000, moveGold3Left);
  }
  
   function moveGold3Left() { 
    $("#gold3").animate({left: "-=500"}, 1000, moveGold3Right);  
  }
  
  moveGold3Right();
  //Move #diamond1
  function moveDiamond1Right() {
    $("#diamond1").animate({left: "+=500"}, 1000, moveDiamond1Left);
  }
  
   function moveDiamond1Left() { 
    $("#diamond1").animate({left: "-=500"}, 1000, moveDiamond1Right);  
  }
  
  moveDiamond1Right();
//Move #diamond2
  function moveDiamond2Right() {
    $("#diamond2").animate({left: "+=500"}, 1000, moveDiamond2Left);
  }
  
   function moveDiamond2Left() { 
    $("#diamond2").animate({left: "-=500"}, 1000, moveDiamond2Right);  
  }
  
  moveDiamond2Right();
  //Move #diamond3
  function moveDiamond3Right() {
    $("#diamond3").animate({left: "+=500"}, 1000, moveDiamond3Left);
  }
  
   function moveDiamond3Left() { 
    $("#diamond3").animate({left: "-=500"}, 1000, moveDiamond3Right);  
  }
  
  moveDiamond3Right();
  //Move #silvercoin1
  function moveSilverCoin1Right() {
    $("#silvercoin1").animate({left: "+=500"}, 1000, moveSilverCoin1Left);
  }
  
   function moveSilverCoin1Left() { 
    $("#silvercoin1").animate({left: "-=500"}, 1000, moveSilverCoin1Right);  
  }
  
  moveSilverCoin1Right();
   //Move #silvercoin2
  function moveSilverCoin2Right() {
    $("#silvercoin2").animate({left: "+=500"}, 1000, moveSilverCoin2Left);
  }
  
   function moveSilverCoin2Left() { 
    $("#silvercoin2").animate({left: "-=500"}, 1000, moveSilverCoin2Right);  
  }
  
  moveSilverCoin2Right();
   //Move #silvercoin3
  function moveSilverCoin3Right() {
    $("#silvercoin3").animate({left: "+=500"}, 1000, moveSilverCoin3Left);
  }
  
   function moveSilverCoin3Left() { 
    $("#silvercoin3").animate({left: "-=500"}, 1000, moveSilverCoin3Right);  
  }
  
  moveSilverCoin3Right();
   //Move #goldcoin1
  function moveGoldCoin1Right() {
    $("#goldcoin1").animate({left: "+=500"}, 1000, moveGoldCoin1Left);
  }
  
   function moveGoldCoin1Left() { 
    $("#goldcoin1").animate({left: "-=500"}, 1000, moveGoldCoin1Right);  
  }
  
  moveGoldCoin1Right();
  //Move #goldcoin2
  function moveGoldCoin2Right() {
    $("#goldcoin2").animate({left: "+=500"}, 1000, moveGoldCoin2Left);
  }
  
   function moveGoldCoin2Left() { 
    $("#goldcoin2").animate({left: "-=500"}, 1000, moveGoldCoin2Right);  
  }
  
  moveGoldCoin2Right();
  //Move #goldcoin3
  function moveGoldCoin3Right() {
    $("#goldcoin3").animate({left: "+=500"}, 1000, moveGoldCoin3Left);
  }
  
   function moveGoldCoin3Left() { 
    $("#goldcoin3").animate({left: "-=500"}, 1000, moveGoldCoin3Right);  
  }
  
  moveGoldCoin3Right();
});