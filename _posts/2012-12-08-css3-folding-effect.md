---
layout: post
title: "CSS3 Folding effect"
description: ""
categories: [ demos ]
tags: [ CSS3 ]
---
{% include JB/setup %}

Each of the modules that is part of the CSS3 standard adds really impressive features 
that extends the possibilities of the browser, regarding what it can do without depending on 
external plugins. For example: CSS transforms (2D and 3D) allows us to apply 2D and 3D 
operations to DOM elements, CSS transitions allows us to change the aspect of an element 
from an initial state to a final state using a smooth animation, CSS animations allow us 
to create, as suggested by its name, pretty cool animations, and there are other 
modules that I encourage you to google about. 

Starting with this post I will be posting small demos showing off some cool HTML5/CSS3/JavaScript 
feature that I come across while surfing the web.

Today I am going to show you a pretty cool CSS 3D folding effect that I saw 
in David Walsh's <a href="http://davidwalsh.name/folding-animation" target="_blank">post</a> 
where he explains that he got inspired by Google Plus' map fold-in effect. 
I went through the article and decided to roll my own version of the animation 
so that I could understand and learn more about it.

<a href="/demos/folding-effect/" class="view-demo" target="_blank">
View Demo
</a>

###HTML

The HTML markup needed to accomplish this effect is shown in the following snippet

<pre class="prettyprint" data-lang="html">
  &lt;div class="container"&gt;
    &lt;div class="fold-outer"&gt;
      &lt;div class="fold-inner"&gt;
        &lt;div class="content"&gt;
          &lt;!-- content for animation goes here --&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</pre>
<br>
The `div.fold-outer` sets up the 3D aspect of the animation and `div.fold-inner` is  
the element that progressively change during the animation.

###CSS

The most important part of this animation is, of course, the CSS code:

<pre class="prettyprint" data-lang="css">
    .container {
      height: 275px;
      width: 475px;
      position: relative;
      border: 1px solid #888;
    }

    .fold-outer {
      /* animation container */
      height: 0;
      overflow: hidden;
      /*-vp transition : height 1s; -vp*/
      perspective: 1000px;
      /*-vp transform-style: preserve-3d -vp*/;
    }

    .fold-inner {
      /* animated block */
      height: 50px;
      /*-vp transition: all 1s; -vp*/
      /*-vp transform: rotateX(-90deg); -vp*/
      /*-vp transform-origin: top; -vp*/
    }
    
    .container:hover .fold-outer {
      height: 100px;
    }

    .container:hover .fold-inner {
      height: 100px;
      /*-vp transform: rotateX(0deg);
    }
</pre>

As I mentioned above, `.fold-outer` sets up the 3D aspect of this particular
animation and `.fold-inner` animates the element progressively.

As you can see, with the new features added to CSS we can create pretty cool
stuff.
