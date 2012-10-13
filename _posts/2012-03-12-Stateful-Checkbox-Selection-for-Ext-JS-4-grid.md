---           
layout: post
title: Stateful Checkbox Selection for Ext JS 4 grid
date: 2012-03-12 02:59:50 UTC
updated: 2012-03-12 02:59:50 UTC
comments: false
categories: [ javascript ]
tags: [ extjs, javascript ]
---

**Hello** _everybody_.

It is time to blog something. Like I said in my first post, I am focusing in web development 
and related technologies. The web technologies I am currently working with are Ext JS 4, PHP, CSS, HTML 5. 

Ext JS 4 is a pure JavaScript application framework that works everywhere and is base on web standards. 
It allows developers to write very cool web apps.

Since Ext JS allows you to build custom components, in this post I am going to show you a small 
grid plugin called **Ext.ux.grid.plugin.StatefulCheckboxColumn** that I developed since I needed
for a personal project that I'd had.

The Project consist in a grid plugin that injects a checkbox column into the grid and handle
the selection of the items through checkbox selection. It also adds an event to the grid, 
that is fired after items checked has changed.

This plugin uses a Ext.state.Provider to mantain the currently selected items after page loads or paging.

The project source code can be found at [StatefulCheckboxColumn](https://github.com/jorgeramirez/StatefulCheckboxColumn).  
Feel free to download and use it.