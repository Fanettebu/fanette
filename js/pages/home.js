// AUTOPLAY 
document.getElementById('vid').play();



//LAYER APPEAR
let controller = new ScrollMagic.Controller();

let layer = new TimelineMax();

layer.add([
  TweenMax.fromTo(".layer", .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}),
]);

new ScrollMagic.Scene({
  triggerElement: ".link",
  triggerHook: 0.85
})
.setTween(layer)
.addTo(controller);
