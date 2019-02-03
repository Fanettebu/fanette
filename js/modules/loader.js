$(document).ready(function(){
  buildLoader();
  loader();
  videoLoading();
});

function buildLoader() {

  let content = $(".elt-loader")[0].innerHTML;
  let height = $(".elt-loader").height();
  let number = Math.floor(window.innerHeight / height);
  console.log(content + "  " + height + "  " + number);

  for(i = 0; i < number - 1; i++) {
    let div = document.createElement("DIV");
    div.setAttribute("class", "elt-loader");
    div.classList.add("col-12");
    div.innerHTML = content;
    if(i % 2 == 0) {
      div.classList.add("right");
    } else {
      div.classList.add("left");
    }
    document.getElementById("loader-container").appendChild(div);
  }

  $(".elt-loader").css("display", "block");

}


function loader() {
  TweenMax.fromTo("body", .5, {autoAlpha: 0}, {autoAlpha: 1});

  if(window.innerWidth >= 500 && window.innerHeight >= 700) {
    let hithere = new TimelineMax({
      repeat: 4
    });

    hithere.add([
      TweenMax.to(".loader-container", .01, {backgroundColor: "white", delay: .2})
    ])
    .add([
      TweenMax.to(".loader-container", .01, {backgroundColor: "black", delay: .2})
    ]);
  }

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
}

function videoLoading() {
  $(".video video").ready(function(){
    TweenMax.to(".video img", .01, {display: "none"});
  });
}
