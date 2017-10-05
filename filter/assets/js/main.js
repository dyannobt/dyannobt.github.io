$(document).ready(function() {


// Add jQuery here

$('.nav_plan').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.plan').removeClass('hide');
  $('.item.plan').addClass('show');
});

$('.nav_circle').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.circle').removeClass('hide');
  $('.item.circle').addClass('show');
});

$('.nav_thing').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.thing').removeClass('hide');
  $('.item.thng').addClass('show');
});

$('.nav_window').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.window').removeClass('hide');
  $('.item.window').addClass('show');
});

$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('item').addClass('show');
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
