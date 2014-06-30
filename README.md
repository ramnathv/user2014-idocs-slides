## Interactive Documents with R

This repository consists of slides for my tutorial on Interactive Documents with R at UseR2014. Please download the repo as a zip file using the links in the sidebar.

## Installation

Slidify is not on CRAN and needs to be installed from `github` using the `devtools` package.

```S
pkgs <- c("slidify", "slidifyLibraries", "rCharts")
devtools::install_github(pkgs, "ramnathv")
```

While the installation process from `github` is relatively painless for Mac/Linux/Ubuntu users, it can make Windows users jump through hoops. For those of you on Windows that hit a bottleneck, here is an [excellent blog post](http://thiagosilva.wordpress.com/2013/02/17/installing-slidify-on-a-windows-machine/) that takes you through an alternate installation process that has been reported to work well.

## Tutorials

1. [Interactive Documents](http://ramnathv.github.io/user2014-idocs-slides/tutorials/00)
1. [Slidify](http://ramnathv.github.io/user2014-idocs-slides/tutorials/01)
2. [Frameworks](http://ramnathv.github.io/user2014-idocs-slides/tutorials/02)
3. [Layouts](http://ramnathv.github.io/user2014-idocs-slides/tutorials/03)
4. [Widgets](http://ramnathv.github.io/user2014-idocs-slides/tutorials/04)
5. [How Slidify Works](http://ramnathv.github.io/user2014-idocs-slides/tutorials/05)


#### Demonstrations

All demonstrations for the workshop can be found in the [demos folder](demos). The instructions for the demos can be found in the tutorials.
