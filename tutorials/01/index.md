---
title       : Slidify
subtitle    : Interactive Docs, UseR2014
hitheme     : solarized_light
license     : by-nc-sa
url         : {lib: "../../libraries"}
editlink    : "tutorials/01"
--- .dark .nobackground .quote

<q> Slidify helps create, customize and share, elegant, dynamic and interactive HTML5 documents using R Markdown.</q>



---

## Install Slidify

Slidify is not on CRAN and needs to be installed from `github` using the `devtools` package. I would recommend installing the `dev` version of the package.

```r
# install.packages('devtools')
pkgs <- c("slidify", "slidifyLibraries", "rCharts")
install_github(pkgs, 'ramnathv', ref = 'dev')
```

NOTE: While the installation process from `github` is relatively painless for Mac/Linux/Ubuntu users, it can make Windows users jump through hoops. For those of you on Windows that hit a bottleneck, here is an [excellent blog post](http://thiagosilva.wordpress.com/2013/02/17/installing-slidify-on-a-windows-machine/) that takes you through an alternate installation process that has been reported to work well.

--- .nobackground .quote

<q> Slidify helps __create__, customize and share, elegant, dynamic and interactive HTML5 documents using R Markdown.</q>

--- 

## Quick Start

```r
author("myDeck")
slidify("index.Rmd")
browseURL("index.html")
publish("myDeck", "ramnathv")
```

--- .bigger

## Create

The easiest way to get started is by using the `author` function to set up a scaffold for your slide deck. This will do the following

> - create a directory for the deck.
> - copy necessary scaffolding for the deck.
> - if you have git installed, then
    - initialize a git repo
    - switch to a gh-pages branch
    - commit all changes to the repo.
> - open index.Rmd for you to edit.
 

--- .centrepre &vcenter .bigger

## Setup

<a class='example'>Your Turn</a>
  
```
author("myDeck")
```

*** =pnotes

<iframe src='assets/img/create_deck.svg' width=960px></iframe>

--- .centrepre #demo1-create

<a class='example'>Your Turn</a>

     ---
     title       : 
     subtitle    : 
     author      : 
     job         : 
     framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
     highlighter : highlight.js  # {highlight.js, prettify, highlight}
     hitheme     : tomorrow      # 
     widgets     : []            # {mathjax, quiz, bootstrap}
     mode        : selfcontained # {standalone, draft}
     knit        : slidify::knit2slides
     ---
     
     ## Read-And-Delete
     
     1. Edit YAML front matter
     2. Write using R Markdown
     3. Use an empty line followed by three dashes to separate slides!
     
     --- .class #id 
     
     ## Slide 2
     
     
     
     

--- .centrepre

## Slidify

<a class='example'>Your Turn</a>

```
slidify("index.Rmd")
browseURL("index.html")
```


--- .nobackground .quote

<q> Slidify helps create, __customize__ and share, elegant, dynamic and interactive HTML5 documents using R Markdown.</q>

---

## Customization

Slidify is highly modular and attempts to achieve clean separation of content from view and behavior. There are several ways to customize a document.

> 1. Frameworks
> 2. Layouts
> 3. Widgets

<div class='build'>
<p>We will look at customization in more detail later.</p>
</div>

--- .nobackground .quote

<q> Slidify helps create, customize and __share__, elegant, dynamic and interactive HTML5 documents using R Markdown.</q>

--- .bigger

## Share

Share your document easily on 

> - [github](http://github.com)
> - [rpubs](http://rpubs.com) 
> - [dropbox](http://dropbox.com)

---

## Share on Github

The default option is to publish to github. 


```
publish('myDeck', 'ramnathv')
```

<br/>


In order to use this option, you need to

- Install `git`.
- Set up a `github` account.
- Set up SSH access to `github`.

Alternately, you can also use the github GUI client to publish. This [screencast](http://www.youtube.com/watch?v=GmcRWitLI0o) provides details.

---

## Share on Dropbox

You can share your deck using Dropbox, by copying it to your Public folder.

```
publish('myDeck', host = "dropbox")
```

You can also drag-and-drop your slide folder to your Public Dropbox folder and get a link to `index.html`. Press `p` to see a screenshot of how to do this.

*** =pnotes

![](http://codingsomething.files.wordpress.com/2013/02/screenshot.png?w=652)

---

## Share on RPubs

[RPubs](http://rpubs.com) is a service provided by [RStudio](http://rstudio.com) to share RMarkdown documents. Here are the steps to share on RPubs.

> 1. Change `mode` to `standalone` in `index.Rmd`.
> 2. Slidify the deck `slidify('index.Rmd')`.
> 3. Hit Publish on the RStudio preview window.
> 4. Follow the instructions from there.

--- .nobackground .quote

<q> Slidify helps create, customize and share, elegant, __dynamic__ and interactive HTML5 documents using R Markdown.</q>

---

## Dynamic

Dynamic content implies that plots, tables and other results in the deck can be dynamically generated using code snippets. Slidify uses the `knitr` package to accomplish this.

<img class='center' src='http://ecx.images-amazon.com/images/I/41kI1dxXGfL.jpg' height=150px width=300px/>

--- &vcenter

     ## A Simple Plot
       
     ```{r simple-plot, fig.height = 6, fig.align = 'center', message = F}
     require(ggplot2)
     qplot(wt, mpg, data = mtcars)
     ```
     
     ---
     
     ## MotionPlot
     
     ```{r results = 'asis', commment = NA, message = F, echo = F}
     require(googleVis)
     M1 <- gvisMotionChart(Fruits, idvar="Fruit", timevar="Year")
     print(M1, tag = 'chart')
     ```
     

---


## A Simple Plot
  

```r
require(ggplot2)
qplot(wt, mpg, data = mtcars)
```

<img src="figure/simple-plot.png" title="plot of chunk simple-plot" alt="plot of chunk simple-plot" style="display: block; margin: auto;" />

---

## MotionPlot

<!-- MotionChart generated in R 3.1.0 by googleVis 0.5.2 package -->
<!-- Mon Jun 30 11:00:02 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataMotionChartID1daa4f1b9e55 () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Apples",
2008,
"West",
98,
78,
20,
"2008-12-31" 
],
[
 "Apples",
2009,
"West",
111,
79,
32,
"2009-12-31" 
],
[
 "Apples",
2010,
"West",
89,
76,
13,
"2010-12-31" 
],
[
 "Oranges",
2008,
"East",
96,
81,
15,
"2008-12-31" 
],
[
 "Bananas",
2008,
"East",
85,
76,
9,
"2008-12-31" 
],
[
 "Oranges",
2009,
"East",
93,
80,
13,
"2009-12-31" 
],
[
 "Bananas",
2009,
"East",
94,
78,
16,
"2009-12-31" 
],
[
 "Oranges",
2010,
"East",
98,
91,
7,
"2010-12-31" 
],
[
 "Bananas",
2010,
"East",
81,
71,
10,
"2010-12-31" 
] 
];
data.addColumn('string','Fruit');
data.addColumn('number','Year');
data.addColumn('string','Location');
data.addColumn('number','Sales');
data.addColumn('number','Expenses');
data.addColumn('number','Profit');
data.addColumn('string','Date');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartMotionChartID1daa4f1b9e55() {
var data = gvisDataMotionChartID1daa4f1b9e55();
var options = {};
options["width"] =    600;
options["height"] =    500;

    var chart = new google.visualization.MotionChart(
    document.getElementById('MotionChartID1daa4f1b9e55')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "motionchart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartMotionChartID1daa4f1b9e55);
})();
function displayChartMotionChartID1daa4f1b9e55() {
  var pkgs = window.__gvisPackages = window.__gvisPackages || [];
  var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
  window.clearTimeout(window.__gvisLoad);
  // The timeout is set to 100 because otherwise the container div we are
  // targeting might not be part of the document yet
  window.__gvisLoad = setTimeout(function() {
  var pkgCount = pkgs.length;
  google.load("visualization", "1", { packages:pkgs, callback: function() {
  if (pkgCount != pkgs.length) {
  // Race condition where another setTimeout call snuck in after us; if
  // that call added a package, we must not shift its callback
  return;
}
while (callbacks.length > 0)
callbacks.shift()();
} });
}, 100);
}
 
// jsFooter
</script>
 
<!-- jsChart -->  
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID1daa4f1b9e55"></script>
 
<!-- divChart -->
  
<div id="MotionChartID1daa4f1b9e55"
  style="width: 600px; height: 500px;">
</div>



--- .nobackground .quote

<q> Slidify helps create, customize and share, elegant, dynamic and __interactive__ HTML5 documents using R Markdown.</q>

---

## Interactive

Slidify uses `widgets` to add interactive content to slides.

--- &vcenter #interactive-quiz

<a class='example'>Your Turn</a>

    ---
    title: Interactive Quiz
    widgets: [bootstrap, quiz]
    --- &radio
    
    ## Question 1
    
    What is 1 + 1?
    
    1. 1 
    2. _2_
    3. 3
    
    *** .hint
    
    This is a hint
    
    *** .explanation
    
    This is an explanation

--- &radio

## Question 1

What is 1 + 1?

1. 1 
2. _2_
3. 3


*** .hint

This is a hint

*** .explanation

This is an explanation

--- .bigger

## Interactive Chart


```r
require(rCharts)
haireye = as.data.frame(HairEyeColor)
n1 <- nPlot(Freq ~ Hair, 
  group = 'Eye',
  data = subset(haireye, Sex == 'Male'),
  type = 'multiBarChart'
)
n1$show('inline')
```

---

## Interactive Chart


<div id = 'chart1daa67538d1c' class = 'rChart nvd3'></div>
<script type='text/javascript'>
 $(document).ready(function(){
      drawchart1daa67538d1c()
    });
    function drawchart1daa67538d1c(){  
      var opts = {
 "dom": "chart1daa67538d1c",
"width":    800,
"height":    400,
"x": "Hair",
"y": "Freq",
"group": "Eye",
"type": "multiBarChart",
"id": "chart1daa67538d1c" 
},
        data = [
 {
 "Hair": "Black",
"Eye": "Brown",
"Sex": "Male",
"Freq":             32 
},
{
 "Hair": "Brown",
"Eye": "Brown",
"Sex": "Male",
"Freq":             53 
},
{
 "Hair": "Red",
"Eye": "Brown",
"Sex": "Male",
"Freq":             10 
},
{
 "Hair": "Blond",
"Eye": "Brown",
"Sex": "Male",
"Freq":              3 
},
{
 "Hair": "Black",
"Eye": "Blue",
"Sex": "Male",
"Freq":             11 
},
{
 "Hair": "Brown",
"Eye": "Blue",
"Sex": "Male",
"Freq":             50 
},
{
 "Hair": "Red",
"Eye": "Blue",
"Sex": "Male",
"Freq":             10 
},
{
 "Hair": "Blond",
"Eye": "Blue",
"Sex": "Male",
"Freq":             30 
},
{
 "Hair": "Black",
"Eye": "Hazel",
"Sex": "Male",
"Freq":             10 
},
{
 "Hair": "Brown",
"Eye": "Hazel",
"Sex": "Male",
"Freq":             25 
},
{
 "Hair": "Red",
"Eye": "Hazel",
"Sex": "Male",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Hazel",
"Sex": "Male",
"Freq":              5 
},
{
 "Hair": "Black",
"Eye": "Green",
"Sex": "Male",
"Freq":              3 
},
{
 "Hair": "Brown",
"Eye": "Green",
"Sex": "Male",
"Freq":             15 
},
{
 "Hair": "Red",
"Eye": "Green",
"Sex": "Male",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Green",
"Sex": "Male",
"Freq":              8 
} 
]
  
      if(!(opts.type==="pieChart" || opts.type==="sparklinePlus" || opts.type==="bulletChart")) {
        var data = d3.nest()
          .key(function(d){
            //return opts.group === undefined ? 'main' : d[opts.group]
            //instead of main would think a better default is opts.x
            return opts.group === undefined ? opts.y : d[opts.group];
          })
          .entries(data);
      }
      
      if (opts.disabled != undefined){
        data.map(function(d, i){
          d.disabled = opts.disabled[i]
        })
      }
      
      nv.addGraph(function() {
        var chart = nv.models[opts.type]()
          .width(opts.width)
          .height(opts.height)
          
        if (opts.type != "bulletChart"){
          chart
            .x(function(d) { return d[opts.x] })
            .y(function(d) { return d[opts.y] })
        }
          
         
        
          
        

        
        
        
      
       d3.select("#" + opts.id)
        .append('svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

       nv.utils.windowResize(chart.update);
       return chart;
      });
    };
</script>

--- .segue bg:indigo

## How Slidify Works?

---

<iframe src='assets/img/knit.svg' width=800px height=250px>
</iframe> 

---

<iframe src='assets/img/split_apply_combine.svg' width=800px height=250px>
</iframe> 


---

<iframe src='assets/img/split.svg' width=800px height=250px>
</iframe> 

---

<iframe src='assets/img/apply.svg' width=800px height=250px>
</iframe> 


---

<iframe src='assets/img/combine.svg' width=800px height=250px>
</iframe> 

---

## Credits

1. Yihui Xie for knitr.
2. Joe Cheng for Shiny.
3. Jeffrey Horner and RStudio for R Markdown.
4. Hadley Wickham for several R packages.
5. Kenton Russel and Thomas Reinholdsson for coauthoring rCharts.
6. Authors of all the JS Libraries I have liberally used.
7. Authors of several presentation libraries in Ruby/Python/JS.

<!-- rmarkdown v1 -->









