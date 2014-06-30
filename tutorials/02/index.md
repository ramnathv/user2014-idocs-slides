---
title    : Frameworks
subtitle : Interactive Docs, UseR 2014
author   : Ramnath Vaidyanathan
mode     : selfcontained # {standalone, draft}
url      : {lib: "../../libraries"}
hitheme  : solarized_light
editlink : "tutorials/02"
assets:
  js:
    - "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"
    - "http://bartaz.github.io/sandbox.js/jquery.highlight.js"
--- .segue .dark .nobackground

<q>A framework is a collection of stylesheets, javascripts and layouts that control the style and appearance of a slide deck.</q>




--- .centrepre &vcenter

    ---
    title: Frameworks
    framework: revealjs
    mode: selfcontained
    ---
     
    ## Slide 1
     
    Some content
     
    --- 
     
    ## Slide 2
     
    Some content


--- #high1 .centrepre &vcenter

	---
	title: Frameworks
	framework: revealjs
	mode: selfcontained
	---
	
	## Slide 1
	
	Some content
	
	--- 
	
	## Slide 2
	
	Some content
	

---

<iframe src='../../demos/frameworks/index.html' width=90%></iframe>


--- bg:lightgoldenrodyellow

## Using Frameworks

<a class='example'>Example</a>

1. Open `demos/frameworks/index.Rmd`
2. Run `slidify("index.Rmd")` and Open `index.html`

### Intermediate

Change the `framework` property in `index.Rmd` and run `slidify`

1. deckjs
2. shower

--- .segue .dark .nobackground

<q>A theme is a collection of stylesheets that provides different skins for slide decks generated using the framework.</q>

--- .centrepre &vcenter #high-theme

	---
	title: Frameworks
	framework: revealjs
	revealjs: {theme: solarized, transition: cube}
	mode: selfcontained
	url: {lib: ../libraries}
	---
	
	## Slide 1
	
	Some content
	
	--- 
	
	## Slide 2
	
	Some content
	

---

<iframe src='../../demos/frameworks/solarized/index.html'></iframe>

--- bg:lightgoldenrodyellow

## Using Themes

<a class='example'>Example</a>

1. Open `demos/frameworks/solarized/index.Rmd`
2. Run `slidify("index.Rmd")` and Open `index.html`

### Intermediate

Different frameworks support different themes and transitions.

__revealjs__

- theme: solarized, moon, sky, simple, serif, night, moon, default, beige
- transition: default, cube, page, concave, zoom, linear, fade, none

__deckjs__

- theme: web-2.0, neon, swiss
- transition: fade, horizontal-slide, vertical-slide

--- .centrepre

## Vertical Slides

 	---
 	title: Frameworks
 	framework: revealjs
 	mode: selfcontained
 	url: {lib: ../libraries}
 	--- &vertical
 	     
 	## Slide 1
 	     
 	Some content
 	
 	*** 
 	    
 	## Sub Slide 1
 	    
 	***
 	    
 	## Sub Slide 2
 	

---

<iframe src='../../demos/frameworks/vertical/index.html'></iframe>

--- .segue .dark .nobackground

## ImpressJS

--- .centerpre #impress

 	---
 	title: Testing ImpressJS
 	framework: impressjs
 	mode: draft
 	--- .slide x:-1000 y:-1500
 	
 	<q>Aren't you just **bored** with all those slides-based presentations?</q>
 	
 	--- .slide x:0 y:-1500
 	
 	<q>Don't you think that presentations given **in modern browsers** shouldn't **copy the limits** of 'classic' slide decks?</q>
 	
 	--- .slide x:1000 y:-1500
 	
 	<q>Would you like to **impress your audience** with **stunning visualization** of your talk?</q>
 	
 	--- #title x:0 y:0 scale:4
 	
 	<span class="try">then you should try</span>
 	# impress.js^*
 	<span class="footnote">^* no rhyme intended</span>

<!-- rmarkdown v1 -->











