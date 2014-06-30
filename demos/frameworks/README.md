## Frameworks

> A framework is a collection of stylesheets, javascripts and layouts that control the style and appearance of a slide deck.

Here is an [example](index.Rmd)

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


Slidifying this deck would result in 

<a href="http://slidify.github.io/workshops/demos/frameworks/#/slide-1">
  <img src="http://www.clipular.com/c?4601539914104832=W_XkcjwqFEJE-kSBGRClSoR_Z-s&f=.png" width = 75%/>
</a>

Slidify supports multiple frameworks. You can modify the `framework` property in `index.Rmd` to check out different frameworks. Here is a small list of frameworks for you to check out.

1. deckjs
2. flowtime
3. shower
4. minimal

## Themes

> A theme is a collection of stylesheets that provides different skins for slide decks generated using the framework.

Here is an example of a deck, making use of the `revealjs` framework and the `solarized` theme.

    ---
    title: Frameworks
    framework: revealjs
    revealjs: {theme: solarized, transition: cube}
    mode: selfcontained
    ---
     
    ## Slide 1
     
    Some content
     
    --- 

    ## Slide 2
     
    Some content
    
Slidifying this deck would result in 
     
<a href="http://slidify.github.io/workshops/demos/frameworks/solarized">
  <img src="http://www.clipular.com/c?5879398985105408=6bbjaKCYdzePHhIQpMZ1d9PNbO4&f=.png" width = 75%/>
</a>

Different frameworks support different themes and transitions. Shown below are some examples that you can check out.

__revealjs__

- theme: solarized, moon, sky, simple, serif, night, moon, default, beige
- transition: default, cube, page, concave, zoom, linear, fade, none

__deckjs__

- theme: web-2.0, neon, swiss
- transition: fade, horizontal-slide, vertical-slide

#### Vertical Slides

Some frameworks like `revealjs` and `flowtime` support vertical slides. They are triggered by specifying the slide layout to be `vertical`. Here is a [simple example](vertical/index.Rmd)

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
    
Slidifying this results in [this deck](http://slidify.github.io/demos/frameworks/vertical)

You can set `framework: flowtime` to render the same slide deck using FlowtimeJS.




    

