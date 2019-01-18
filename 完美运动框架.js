function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (attr in json) {

            var objAttr = 0;
            if (attr == "opacity") {
                objAttr = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                objAttr = parseInt(getStyle(obj, attr));
            }

            var iSpeed = (json[attr] - objAttr) / 10;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (objAttr != json[attr]) {
                bStop = false;
            }
            if (attr == "opacity") {
                obj.style.filter = 'alpha(opacity:' + (objAttr + iSpeed) + ')';
                obj.style.opacity = (objAttr + iSpeed) / 100;
            } else {
                obj.style[attr] = objAttr + iSpeed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}