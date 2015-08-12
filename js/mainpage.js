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

