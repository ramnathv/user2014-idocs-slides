---
title       : Interactive Documents with R
subtitle    : Slidify + Shiny
author      : Ramnath Vaidyanathan
job         : R Hacker
--- &radio

## Interactive Quiz

What is 1 + 1?

1. 1
2. _2_
3. 3
4. 4

*** .hint

This is a hint

*** .explanation

This is an explanation


```r
knitr::knit_hooks$set(document = function(doc){
  gsub("```", "```", doc)
})
```


---

    --- &radio
    
    ## Interactive Quiz
    
    What is 1 + 1?
    
    1. 1
    2. _2_
    3. 3
    4. 4
    
    *** .hint
    
    This is a hint
    
    *** .explanation
    
    This is an explanation

---

## Interactive Chart


<div id = 'chart1f2d7aedf45a' class = 'rChart nvd3'></div>
<script type='text/javascript'>
 $(document).ready(function(){
      drawchart1f2d7aedf45a()
    });
    function drawchart1f2d7aedf45a(){  
      var opts = {
 "dom": "chart1f2d7aedf45a",
"width":    800,
"height":    400,
"x": "Eye",
"y": "Freq",
"group": "Hair",
"type": "multiBarChart",
"id": "chart1f2d7aedf45a" 
},
        data = [
 {
 "Hair": "Black",
"Eye": "Brown",
"Sex": "Female",
"Freq":             36 
},
{
 "Hair": "Brown",
"Eye": "Brown",
"Sex": "Female",
"Freq":             66 
},
{
 "Hair": "Red",
"Eye": "Brown",
"Sex": "Female",
"Freq":             16 
},
{
 "Hair": "Blond",
"Eye": "Brown",
"Sex": "Female",
"Freq":              4 
},
{
 "Hair": "Black",
"Eye": "Blue",
"Sex": "Female",
"Freq":              9 
},
{
 "Hair": "Brown",
"Eye": "Blue",
"Sex": "Female",
"Freq":             34 
},
{
 "Hair": "Red",
"Eye": "Blue",
"Sex": "Female",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Blue",
"Sex": "Female",
"Freq":             64 
},
{
 "Hair": "Black",
"Eye": "Hazel",
"Sex": "Female",
"Freq":              5 
},
{
 "Hair": "Brown",
"Eye": "Hazel",
"Sex": "Female",
"Freq":             29 
},
{
 "Hair": "Red",
"Eye": "Hazel",
"Sex": "Female",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Hazel",
"Sex": "Female",
"Freq":              5 
},
{
 "Hair": "Black",
"Eye": "Green",
"Sex": "Female",
"Freq":              2 
},
{
 "Hair": "Brown",
"Eye": "Green",
"Sex": "Female",
"Freq":             14 
},
{
 "Hair": "Red",
"Eye": "Green",
"Sex": "Female",
"Freq":              7 
},
{
 "Hair": "Blond",
"Eye": "Green",
"Sex": "Female",
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

---

    ```{r echo = F, results = 'asis'}
    require(rCharts)
    haireye <- as.data.frame(HairEyeColor)
    n1 <- nPlot(Freq ~ Eye, group = 'Hair', type = 'multiBarChart',
        data = subset(haireye, Sex == "Female")
    )
    n1$set(width = 800, height = 400)
    n1$show('inline')
    ```

--- &interactive



<textarea class='interactive' id='interactive{{slide.num}}' data-cell='{{slide.num}}' data-results='asis' style='display:none'>require(googleVis)
M1 <- gvisMotionChart(Fruits, idvar = 'Fruit', timevar = 'Year')
print(M1, tag = 'chart')</textarea>

--- &vcenter

    ## Interactive Console
    
    ```{r, opts.label = 'interactive', results = 'asis'}
    require(googleVis)
    M1 <- gvisMotionChart(Fruits, idvar = 'Fruit', timevar = 'Year')
    print(M1, tag = 'chart')
    ```

---

## Non-Interactive Console


```r
require(googleVis)
M1 <- gvisMotionChart(Fruits, idvar = 'Fruit', timevar = 'Year')
print(M1, tag = 'chart')
```

<!-- MotionChart generated in R 3.1.0 by googleVis 0.5.2 package -->
<!-- Mon Jun 30 11:16:52 2014 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataMotionChartID1f2d16c6e9b5 () {
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
function drawChartMotionChartID1f2d16c6e9b5() {
var data = gvisDataMotionChartID1f2d16c6e9b5();
var options = {};
options["width"] =    600;
options["height"] =    500;

    var chart = new google.visualization.MotionChart(
    document.getElementById('MotionChartID1f2d16c6e9b5')
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
callbacks.push(drawChartMotionChartID1f2d16c6e9b5);
})();
function displayChartMotionChartID1f2d16c6e9b5() {
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
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID1f2d16c6e9b5"></script>
 
<!-- divChart -->
  
<div id="MotionChartID1f2d16c6e9b5"
  style="width: 600px; height: 500px;">
</div>

---

## Interactive Chart with Shiny Controls

<div class="row-fluid">
  <div class="span4">
    <form class="well">
      <label class="control-label" for="sex">Choose Sex</label>
      <select id="sex"><option value="Male" selected>Male</option>
<option value="Female">Female</option></select>
      <script type="application/json" data-for="sex" data-nonempty="">{}</script>
      <label class="control-label" for="type">Choose Type</label>
      <select id="type"><option value="multiBarChart" selected>multiBarChart</option>
<option value="multiBarHorizontalChart">multiBarHorizontalChart</option></select>
      <script type="application/json" data-for="type" data-nonempty="">{}</script>
    </form>
  </div>
  <div class="span8">
    <div id="nvd3plot" class="shiny-html-output nvd3 rChart"></div>
  </div>
</div>














--- &interactive height:450

<textarea class='interactive' id='interactive{{slide.num}}' data-cell='{{slide.num}}' data-results='asis' style='display:none'>n1 <- nPlot(mpg ~ wt, 
  data = mtcars, 
  type = 'scatterChart', 
  group = 'gear'
)
n1$addControls("x", "wt", names(mtcars))
n1$set(width = 450, height = 350)
n1</textarea>
















--- &interactive

## Results = Markup

<textarea class='interactive' id='interactive{{slide.num}}' data-cell='{{slide.num}}' data-results='markup' style='display:none'>require(xtable)
options(xtable.type = 'html')
xtable(head(mtcars))</textarea>























