$(document).ready(function() {


// Add jQuery here

$('.nav_yellow').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.yellow').removeClass('hide');
  $('.item.yellow').addClass('show');
});

$('.nav_red').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.red').removeClass('hide');
  $('.item.red').addClass('show');
});

$('.nav_blue').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.blue').removeClass('hide');
  $('.item.blue').addClass('show');
});



$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('item').addClass('show');
});




$('.nav_firebrick').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.firebrick').removeClass('hide');
  $('.item.firebrick').addClass('show');
});


$('.nav_redd').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.redd').removeClass('hide');
  $('.item.redd').addClass('show');
});


$('.nav_goldenrod').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.goldenrod').removeClass('hide');
  $('.item.goldenrod').addClass('show');
});

$('.nav_gold').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.gold').removeClass('hide');
  $('.item.gold').addClass('show');
});

$('.nav_deepsky').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.deepsky').removeClass('hide');
  $('.item.deepsky').addClass('show');
});


$('.nav_midnight').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.midnight').removeClass('hide');
  $('.item.midnight').addClass('show');
});



$('.nav_thumb').click(function(event){
  $('.item').addClass('thumb');
  $('.item').removeClass('full');
});

$('.nav_full').click(function(event){
  $('.item').addClass('full');
  $('.item').removeClass('thumb');
});





  });
