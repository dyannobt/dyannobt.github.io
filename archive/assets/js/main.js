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




$('.nav_solid').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.solid').removeClass('hide');
  $('.item.solid').addClass('show');
});


$('.nav_velvet').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.velvet').removeClass('hide');
  $('.item.velvet').addClass('show');
});


$('.nav_polished').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.polished').removeClass('hide');
  $('.item.polished').addClass('show');
});

$('.nav_soft').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.soft').removeClass('hide');
  $('.item.soft').addClass('show');
});

$('.nav_metallic').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.metallic').removeClass('hide');
  $('.item.metallic').addClass('show');
});


$('.nav_fabric').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.fabric').removeClass('hide');
  $('.item.fabric').addClass('show');
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
