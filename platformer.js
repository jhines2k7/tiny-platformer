(function() {
    //-------------------------------------------------------------------------
    // POLYFILLS
    //-------------------------------------------------------------------------
  
    if (!window.requestAnimationFrame) { // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(callback, element) {
  		    window.setTimeout(callback, 1000 / 60);
        }
    }

    //-------------------------------------------------------------------------
    // UTILITIES
    //-------------------------------------------------------------------------
  
    function timestamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }
  
    function bound(x, min, max) {
        return Math.max(min, Math.min(max, x));
    }

    function get(url, onsuccess) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if ((request.readyState == 4) && (request.status == 200))
                onsuccess(request);
        }
        request.open("GET", url, true);
        request.send();
    }

    function overlap(x1, y1, w1, h1, x2, y2, w2, h2) {
        return !(((x1 + w1 - 1) < x2) ||
            ((x2 + w2 - 1) < x1) ||
            ((y1 + h1 - 1) < y2) ||
            ((y2 + h2 - 1) < y1))
    }
})();