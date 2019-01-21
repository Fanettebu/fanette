$(document).ready(function(){

  TweenMax.fromTo("body", .5, {autoAlpha: 0}, {autoAlpha: 1});

  let hithere = new TimelineMax({
    repeat: 4
  });

  hithere.add([
    TweenMax.to(".loader-container", .2, {backgroundColor: "white"})
  ])
  .add([
    TweenMax.to(".loader-container", .2, {backgroundColor: "black"})
  ]);

  setTimeout(function(){

    let hithereOff = new TimelineMax();

    hithereOff.add([
      TweenMax.to(".loader-container .elt-loader", .4, {autoAlpha: 0}),
      TweenMax.to(".loader-container", .4, {backgroundColor: "black"})
    ]).add(
      TweenMax.to(".loader-container", .2, {autoAlpha: 0, delay: .4}),
      TweenMax.to(".loader-container", .2, {display: "none", delay: .5}),
    );


    setTimeout(function() {
      TweenMax.to(".container-brand", 1, {autoAlpha: 1, delay: .5});
      let appear = new TimelineMax();
      appear.add(
        TweenMax.fromTo("body", .5, {autoAlpha: 0}, {autoAlpha: 1})
      ).add(
        TweenMax.staggerFromTo(".appear", .8, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, .1)
      );
    }, 300);

  }, 1500);

});

$(".video video").ready(function(){
  TweenMax.to(".video img", .01, {display: "none"});
});
