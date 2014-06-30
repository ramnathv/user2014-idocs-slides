$(function(){
  $("#step1a code").highlight("--- {class: [class1, class2], id: id}");
  $("#step1b code").highlight("## Title");
  $("#step1c code").highlight("Some content", {wordsOnly: true});
  $("#step1d code").highlight([
    "*** {name: block1, class: class3}", 
    "## Block1 Title",
    "Some contents of block 1",
    "*** {bg: green}",
    "## Block2 Title",
    "Some contents of block 2"
  ]);
  $("#step3a code").highlight("title: Slidify\nauthor: Ramnath Vaidyanathan\nFramework: io2012");
  $("#step3b code").highlight("## Get Started\n\nSlidify is easy to use, only three rules!\n\n1. Write content using R Markdown\n3. Add properties using YAML\n4. Separate slides using `---`");
  $("#step3c code").highlight("---");
  $("#step3d code").highlight("## Example Slide\n\nLet us create a __scatterplot__")
  $("#step3e code").highlight("```{r}\nrequire(ggplot2)\nqplot(wt, mpg, data = mtcars)\n```")
  $(".draggable").draggable();
  $('#myhtml2 code').highlight([
    "{{# slide.header }}", "<hgroup>", "{{{ slide.header}}}", "</hgroup>",
    "{{/ slide.header }}"
  ]);
  $("#chunk2 pre").highlight(["```r{", "}", "```"])
});