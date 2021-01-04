const animateCSS = (element, animation) =>
  new Promise((resolve, reject) => {
    const animationName = `${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`animated`, animationName);
    function handleAnimationEnd() {
      node.classList.remove(`animated`, animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      resolve("Animation ended");
    }
    node.addEventListener("animationend", handleAnimationEnd);
  });


var message = new Array();
var reps = 2;
var speed = 250;
var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;

function xnanimate() {
    A()
}

function A() {
    s++;
    if (s > 20) {
        s = 1
    }
    if (s == 1) {
        document.title = '_ '
    }
    if (s == 2) {
        document.title = 'a_ '
    }
    if (s == 3) {
        document.title = 'an_ '
    }
    if (s == 4) {
        document.title = 'and_ '
    }
    if (s == 5) {
        document.title = 'andr_ '
    }
    if (s == 6) {
        document.title = 'andre_ '
    }
    if (s == 7) {
        document.title = 'andrew_ '
    }
    if (s == 8) {
        document.title = 'andrewi_ '
    }
    if (s == 9) {
        document.title = 'andrewii_ '
    }
    if (s == 10) {
        document.title = 'andrewii2_ '
    }
    if (s == 11) {
        document.title = 'andrewii23_ '
    }
    if (s == 12) {
        document.title = 'andrewii2_ '
    }
    if (s == 13) {
        document.title = 'andrewii_ '
    }
    if (s == 14) {
        document.title = 'andrewi_ '
    }
    if (s == 15) {
        document.title = 'andrew_ '
    }
    if (s == 16) {
        document.title = 'andre_ '
    }
    if (s == 17) {
        document.title = 'andr_ '
    }
    if (s == 18) {
        document.title = 'and_ '
    }
    if (s == 19) {
        document.title = 'an_ '
    }
    if (s == 20) {
        document.title = 'a_ '
    }
    if (C < (20 * reps)) {
        sT = setTimeout("A()", speed);
        C++
    } else {
        C = 0;
        s = 0;
        mC++;
        if (mC > p - 1) mC = 0;
        sT = null;
        xnanimate()
    }
}
xnanimate();