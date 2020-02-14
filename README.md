# basic-auto-slider-js
Simple slider which runs automated

First load the JS library.
````
<script src="gmx.slider.js"><script>
````
Then set the function, 1st param is your slider items class, 2 param is the number of slides and the last one is the seconds in MS.
Set an attribute called "data-slide" with the number of position of the slide to your items element.
````
<script>
// Slider Settings
var item_class = ".slider-item";
var speed = 9000; // Slider MS Speed -> Speed of slides 
var controls  = "enabled"; // enabled or disabled -> to show slider controls to switch slides.
var controls_type  = "squared"; // squared or circle -> the appeareance of the controller
var slider_color  = "#009640";  //  Color of the active slider controller -> color code or color name
Slider(item_class,speed,controls,controls_type,slider_color);
<script>
````
