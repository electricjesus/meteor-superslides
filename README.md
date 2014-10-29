Meteor Superslides
==================


[SuperSlides](https://github.com/nicinabox/superslides) packaged for Meteor 0.9.2 +


API
---

Syntax:

	SuperSlides(*selector*, *options*);

Example(s):

1. First param as a selector

	SuperSlides('.main-slider', {
	      animation: 'fade',
	      play: 6000
	    });


2.  First param as a jQuery object

	 var slider = $('.main-slider');
	 SuperSlides(slider, {
	      animation: 'fade',
	      play: 1000
	    });