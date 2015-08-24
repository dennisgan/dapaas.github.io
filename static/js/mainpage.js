// Screenshots carousel
(function() {

    var screenshotsContainer = document.getElementById("screenshots-container");

    if (!screenshotsContainer) return;

    screenshotsContainer.addEventListener("click", function() {
        screenshotsContainer.insertBefore(screenshotsContainer.lastElementChild, screenshotsContainer.firstElementChild);
    });

})();

// Useless parallax
(function() {

    var secondScreen = document.getElementsByClassName("third-screen")[0];

    if (!secondScreen) return;

    var parent = secondScreen.parentNode;



    var parallax = function() {
        var sizeParallax = Math.min(300, Math.round(parent.clientHeight/2));

        var height = secondScreen.clientHeight;
        var width = secondScreen.clientWidth;
        var newHeight, newWidtH;

        var wantedHeight = height + sizeParallax;

        if (width/wantedHeight > 4/3) {
            newHeight = Math.round(width * 3/4);
            newWidth = Math.round(width);
        } else {
            newHeight = Math.round(wantedHeight);
            newWidth = Math.round(wantedHeight * 4/3);
        }

        var obtainedParallax = newHeight-height;

        // scrollTop is divided by two because it's the third element ?
        var offset = Math.min(Math.max((parent.scrollTop-secondScreen.clientHeight) / secondScreen.clientHeight, 0.0) * obtainedParallax / 2, obtainedParallax);

        secondScreen.style.backgroundSize = newWidth + "px " + newHeight+"px";
        secondScreen.style.backgroundPosition = "center " + -offset + "px";
    };

    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle ("scroll", "parallax", parent);
    throttle ("resize", "parallax");

    parent.addEventListener("parallax", parallax);
    window.addEventListener("parallax", parallax);
})();

/*
 * light-weight smooth scrolling
 *
 * https://github.com/bendc/anchor-scroll
*/
(function() {
  "use strict"

    var links = document.querySelectorAll("a.scroll");
    var i = links.length;
    var root = document.getElementsByClassName("mdl-layout__content")[0];
    var easeInOutCubic = function(t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };

    while (i--)  {
        links.item(i).addEventListener("click", function(e) {
            var startTime;
            var startPos = root.scrollTop;
            var endPos = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top;
            var maxScroll = root.scrollHeight - window.innerHeight;
            var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos;
            var duration = 900;
            var scroll = function(timestamp) {
                startTime = startTime || timestamp;
                var elapsed = timestamp - startTime;
                var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration);
                root.scrollTop = progress;
                elapsed < duration && requestAnimationFrame(scroll);
            }   
            requestAnimationFrame(scroll);
            e.preventDefault();
        });
    }
})();
