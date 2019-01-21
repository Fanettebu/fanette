$(".brand").mouseover(function() {

  $(this).toggleClass("active");

});

// ANIMATIONS ENTREE DE PAGE

TweenMax.to(".container-brand", 1, {autoAlpha: 1, delay: .5});

$(document).ready(function() {

  //NAVBAR ANIM
  $(".container-brand a").toggleClass("active");
  setTimeout(function() {
    $(".container-brand a").toggleClass("active");
  }, 750);

  //APPEAR
  let appear = new TimelineMax();

  appear.add(
    TweenMax.fromTo("body", .5, {autoAlpha: 0}, {autoAlpha: 1})
  ).add(
    TweenMax.staggerFromTo(".appear", .8, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, .1)
  );

  TweenMax.to("#project .container-navbar", 1, {autoAlpha: 1, ease: Power1.easeIn});

});

$(".video video").ready(function(){
  TweenMax.to(".video img", .01, {display: "none"});
});
