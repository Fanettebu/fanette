// SCROLLMAGIC APPEAR
let controller = new ScrollMagic.Controller();


$(".scrollAppear").each(function() {

  let scrollAppear = new TimelineMax();

  scrollAppear.add(
    TweenMax.staggerTo($(this), 1, {autoAlpha: 1, ease:Power1.easeInOut}, .05),
  );

  let myScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: ".9",
  })
  .setTween(scrollAppear)
  .addTo(controller);

});


let navbar = new TimelineMax();

navbar.add([
  TweenMax.to(".elt-name", .2, {fontSize: "35px", ease: Power1.easeInOut}),
]);

new ScrollMagic.Scene({
  triggerElement: ".container-content",
  offset: 200,
  triggerHook: 0.1
})
.setTween(navbar)
.setClassToggle(".elt-name", "resize")
.addTo(controller);
