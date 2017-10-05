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

$('.nav_thumb').click(function(event){
  $('.item').addClass('thumb');
  $('.item').removeClass('full');
});

$('.nav_full').click(function(event){
  $('.item').addClass('full');
  $('.item').removeClass('thumb');
});







  });
