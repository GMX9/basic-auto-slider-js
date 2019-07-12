# basic-auto-slider-js
Simple slider which runs automated

First load the JS library.
````
<script src="slider.js"><script>
````
Then set the function, 1st param is your slider items class, 2 param is the number of slides and the last one is the seconds in MS.
Set an attribute called "data-slide" with the number of position of the slide to your items element.
````
<script>
Slider(".slider-item",2,4000);
<script>
````
