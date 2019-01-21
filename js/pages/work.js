$(".project-item a").hover(function(){

  $(".project-item a").not($(this)).removeClass("active");
  $(this).addClass("active");

  let tabClass = []
  tabClass = $(this)[0].className.split(/\s+/);
  let classImg = tabClass[0] + "-img";

  $(".project-apercu").not($(classImg)).removeClass("active");
  $("." + classImg).addClass("active");

  // let linkName = $(this)[0].innerHTML.replace(/[^0-9a-z]/gi, '')
  // console.log(linkName);

});

$(".project-item a").mouseleave(function() {

  $(this).removeClass("active");
  $(".project-apercu").removeClass("active");

});




$(".project-item").click(function(){

  // console.log($(this).innerHTML.replace(/[^0-9a-z]/gi, ''));

});

//ANIMATIONS ENTREE

$(document).ready(function() {

  let projectTitle = new TimelineMax();

  projectTitle.add(
    TweenMax.staggerFromTo(".project-item", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, .05)
  );

});
