// Our little app, inspired by cc ( :

$('.corner-link').mouseenter(function () {
  $('.corner-menu').slideToggle();
});

$('.corner-menu').mouseleave(function () {
  $('.corner-menu').slideToggle();
});

// This only minifes, transitions, does no real shit
