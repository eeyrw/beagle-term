
"use strict";
var rect = document.querySelector(".anim")

document.timeline.play(new Animation(rect, {cx: "400px", cy: "85px", r: "75px"}, {duration: 1 * 1000, fill: 'forwards'}));

