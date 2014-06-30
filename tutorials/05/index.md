---
title       : How Slidify Works?
subtitle    : Interactive Docs, UseR 2014
author      : Ramnath Vaidyanathan
hitheme     : solarized_light 
mode        : selfcontained # {standalone, draft}
assets:
  js:
    - "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"
    - "http://bartaz.github.io/sandbox.js/jquery.highlight.js"
  css: "http://fonts.googleapis.com/css?family=Crimson+Text"
---



--- .segue .dark .nobackground

## Page (Rmd)

--- .centrepre

	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	```{r myplot}
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```

--- &callout #step3a .centrepre


	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	```{r myplot}
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```

*** #draggable5 .left

Properties

--- &callout #step3b .centrepre


	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	```{r myplot}
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```

*** #draggable6 .left

Section

--- &callout #step3c .centrepre


	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	```{r myplot}
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```

*** #draggable7 .left

Separator

--- &callout #step3d .centrepre


	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	```{r myplot}
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```

*** #draggable8 .right

Markdown


--- &callout #step3e .centrepre


	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	```{r myplot}
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```

*** #draggable9 .right

Code Chunk

---

<iframe src='../01/assets/img/knit.svg' width=800px height=250px>
</iframe> 

--- .centrepre #page1

	---
	title: Slidify
	author: Ramnath Vaidyanathan
	framework: io2012
	---
	## Get Started
	
	Slidify is easy to use, only three rules!
	
	1. Write content using R Markdown
	3. Add properties using YAML
	4. Separate slides using `---`
	
	---
	## Example Slide
	
	Let us create a __scatterplot__
	
	
	```r
	require(ggplot2)
	qplot(wt, mpg, data = mtcars)
	```
	
	![plot of chunk myplot](assets/fig/myplot.png) 
	

---

<iframe src='../01/assets/img/split_apply_combine.svg' width=800px height=250px>
</iframe> 


---

<iframe src='../01/assets/img/split.svg' width=800px height=250px>
</iframe> 


--- .segue .dark .nobackground

## Slide

--- .centrepre



	--- {class: [class1, class2], id: id}
	
	## Title
	
	Some content
	
	*** {name: block1, class: class3}
	
	## Block1 Title
	
	Some contents of block 1
	
	*** {bg: green}
	
	## Block2 Title
	
	Some contents of block 2


--- {id: step1a, tpl: callout, class: 'centrepre'}

```no-highlight

 --- {class: [class1, class2], id: id}
 
 ## Title
 
 Some content
 
 *** {name: block1, class: class3}
 
 ## Block1 Title
 
 Some contents of block 1
 
 *** {bg: green}
 
 ## Block2 Title
 
 Some contents of block 2

```

*** .right

Properties

--- .centrepre #step1b &callout

```no-highlight

 --- {class: [class1, class2], id: id}
 
 ## Title
 
 Some content
 
 *** {name: block1, class: class3}
 
 ## Block1 Title
 
 Some contents of block 1
 
 *** {bg: green}
 
 ## Block2 Title
 
 Some contents of block 2

```

*** .left

Title

--- .centrepre #step1c &callout

```no-highlight

 --- {class: [class1, class2], id: id}
 
 ## Title
 
 Some content
 
 *** {name: block1, class: class3}
 
 ## Block1 Title
 
 Some contents of block 1
 
 *** {bg: green}
 
 ## Block2 Title
 
 Some contents of block 2

```

*** .left

Content

--- .centrepre #step1d &callout

```no-highlight

 --- {class: [class1, class2], id: id}
 
 ## Title
 
 Some content
 
 *** {name: block1, class: class3}
 
 ## Block1 Title
 
 Some contents of block 1
 
 *** {bg: green}
 
 ## Block2 Title
 
 Some contents of block 2

```

*** .left

Blocks

---

<iframe src='../01/assets/img/apply.svg' width=800px height=250px>
</iframe> 


---

<iframe src='../01/assets/img/combine.svg' width=800px height=250px>
</iframe> 


--- .segue .dark .nobackground

## Backup Slides

--- .dark .nobackground .segue

## Code Chunks

--- .centrepre &callout #chunk1

    ```{r example, fig.width = 6, comment = NA}
    x <- 1+1
    rnorm(5)
    ```
    
*** .left #markup build:true

Markup

*** .top #label build:true

Label


*** .top #options build:true

Options

*** .bottom #code1 build:true

Code

--- .centrepre &callout #chunk2



	```{r example, fig.width = 6, comment = NA}
	x <- 1+1
	rnorm(5)
	```


    
*** .left #markup

Markup

--- .dark .quote .nobackground

<q>The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.</q>

<!-- rmarkdown v1 -->






