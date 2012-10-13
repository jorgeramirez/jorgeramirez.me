---           
layout: post
title: Syntax highlighter for SL programming language
date: 2012-03-17 22:13:14 UTC
updated: 2012-03-17 22:13:14 UTC
comments: false
categories: [ highlighting ] 
tags: [ syntax-highlighting ]
---

A few days ago [Eliseo Ocampos](https://github.com/roskoff) posted on Google plus
a hello world example that shows a bit of his project named [gSL](https://github.com/roskoff/gSL)
which is a very interesting project that still in early states.

gSL is a GNU interpreter for SL, a language which is used in the academic field to teach
Introductory courses to programming. The SL language interpreter is distributed freely
but the code is proprietary, that's why the gSL project started.

Since there is no open source IDE or text editor that supports SL language, I decided to 
do a syntax highlighter for GtkSourceView-based editors, such as 
[gedit](http://projects.gnome.org/gedit/), named **sl-highlight** which simple declares 
a language spec that GtkSourceView uses.

The project source code can be found at [sl-highlight](https://github.com/jorgeramirez/sl-highlight)  
Feel free to download and use it.