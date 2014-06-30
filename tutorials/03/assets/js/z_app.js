$(function(){
  $(".draggable").draggable();
  $("#slide1a code").highlight("--- {class: class1, bg: yellow, id: id1}")
  $("#slide1b code").highlight("## Slide Title")
  $("#slide1c code").highlight(["Slide Contents", "*** =pnotes", "Some notes"])
  $("#carouselslideA code").highlight("--- {tpl: carousel, class: span12}")
  $("#carouselslideB code").highlight("## Carousel")
  $("#carouselslideC code").highlight([
    '*** {class: active, img: "../01/assets/img/split.svg"}',
    'Image 1',
    '*** {img: "../01/assets/img/apply.svg"}',
    'Image 2'
  ]);
});